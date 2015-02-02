package org.elu

import org.scalatest.{Matchers, FlatSpec}
import scala.xml.{XML, PrettyPrinter}

/**
 * Created by luhtonen on 02/02/15.
 */
class StockQuoteSpec extends FlatSpec with Matchers {
  "Getting a quote for Apple" should "given appropriate data" in {
    val pp = new PrettyPrinter(80, 2)

    val service =
      (new org.elu.StockQuoteSoap12Bindings
        with scalaxb.SoapClients
        with scalaxb.DispatchHttpClients {}).service

    val stockquote = service.getQuote(Some("AAPL"))

    stockquote match {
      case Left(err) => fail("Problem with stockquote invocation")
      case Right(success) => success.GetQuoteResult match {
        case None => println("No info returned for that quote")
        case Some(x) => {
          println("Stockquote: " + pp.format(XML.loadString(x)))
          x should startWith ("<StockQuotes><Stock><Symbol>AAPL</Symbol>")
        }
      }
    }
  }
}
