package controllers

import play.api.libs.json.JsError
import play.api.libs.ws.WS
import play.api.mvc.{Action, Controller}

/**
 * Created by luhtonen on 03/02/15.
 */
object MarketplaceController extends Controller {

  val pageSize = 10
  val appStoreUrl = "https://itunes.apple.com/search"

  def list(page: Int, orderBy: Ing, filter: String = "*") = Action.
    async { implicit request =>
      val futureWSResponse = WS.url(appStoreUrl)
        .withQueryString("term" -> filter, "country" -> "fi", "entity" -> "software").get()

      futureWSResponse map { resp =>
        val json = resp.json
        val jsResult = json.validate[AppResult]
        jsResult map {
          case AppResult(count, res) =>
            Ok(html.marketplace.list(
              Page(res,
                   page,
                   offset = pageSize * page,
                   count),
              orderBy,
              filter
            ))
        }.recoverTotal {
          e => BadRequest("Detected error: " + JsError.toFlatJson(e))
        }
      }
    }
}
