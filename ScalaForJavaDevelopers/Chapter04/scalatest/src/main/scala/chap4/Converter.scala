package chap4

/**
 * Created by luhtonen on 23/01/15.
 */
trait Converter {
  lazy val rates : Map[String,BigDecimal] = {
    val url = "http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"
    for (elem <- xml.XML.load(url) \ "Cube" \ "Cube" \ "Cube")
      yield (elem \ "@currency").text -> BigDecimal((elem \ "@rate").text)
  }.toMap ++ Map[String, BigDecimal]("EUR" -> 1)

  def convert(amount: BigDecimal, from:String, to:String) =
    amount / rates(from) * rates(to)
}

class ECBConverter extends Converter