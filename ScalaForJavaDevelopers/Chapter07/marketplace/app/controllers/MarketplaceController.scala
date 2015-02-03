package controllers

import play.api.Play.current
import play.api.mvc._
import play.api.libs.ws.WS
import scala.concurrent.ExecutionContext.Implicits.global
import play.api.libs.json._
import models._
import views._

/**
 * Created by luhtonen on 03/02/15.
 */
object MarketplaceController extends Controller {

  val pageSize = 10
  val appStoreUrl = "https://itunes.apple.com/search"

  def list(page: Int, orderBy: Int, filter: String = "*") = Action.async { implicit request =>
      println("list page: " + page + ", orderBy: " + orderBy + ", filter: " + filter)
      val futureWSResponse =
        WS.url(appStoreUrl)
          .withQueryString("term" -> filter, "country" -> "fi", "entity" -> "software")
          .get()

      futureWSResponse map { resp =>
        val json = resp.json
        val jsResult = json.validate[AppResult]
        jsResult.map {
          case AppResult(count, res) =>
            Ok(html.marketplace.list(
              Page(res,
                page,
                offset = pageSize * page,
                count),
              orderBy,
              filter))
        }.recoverTotal {
          e => BadRequest("Detected error: " + JsError.toFlatJson(e))
        }
      }
    }
}
