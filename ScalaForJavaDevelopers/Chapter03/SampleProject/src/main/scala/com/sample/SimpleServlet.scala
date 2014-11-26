package com.sample

import javax.servlet.http._
import scala.xml.NodeSeq

/**
 * Created by luhtonen on 26/11/14.
 */
class SimpleServlet extends HttpServlet {
  override def doGet(req: HttpServletRequest, resp: HttpServletResponse): Unit = {
    resp.setContentType("text/html")
    resp.setCharacterEncoding("UTF-8")

    val responseBody: NodeSeq =
      <html><body><h1>Hello, World!</h1></body></html>

    resp.getWriter.write(responseBody.toString)
  }
}
