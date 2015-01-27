package controllers

import play.api.mvc.{Action, Controller}
import play.api.data._
import play.api.data.Forms._

object Application extends Controller {
  /**
   * Describes the hello form.
   */
  val helloForm = Form(
    tuple(
      "name" -> nonEmptyText,
      "repeat" -> number(min = 1, max = 100),
      "color" -> optional(text)
    )
  )

  // -- Actions

  /**
   * Home page
   * @return Action for home page
   */
  def index = Action {
    Ok(views.html.index(helloForm))
  }

  /**
   * Handles the form submission.
   */
  def sayHello = Action { implicit request =>
    helloForm.bindFromRequest.fold(
      formWithErrors => BadRequest(views.html.index(formWithErrors)),
      {case (name, repeat, color) => Ok(views.html.hello(name, repeat.toInt, color))}
    )
  }
}