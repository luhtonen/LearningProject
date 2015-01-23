package chap4

/**
 * Created by luhtonen on 23/01/15.
 */
class MoneyService(converter: Converter) {
  def sendMoneyToSweden(amount:BigDecimal, from:String): BigDecimal = {
    val convertedAmount = converter.convert(amount, from, "SEK")
    println(s" $convertedAmount SEK are on their way...")
    convertedAmount
  }

  def sendMoneyToSwedenViaEngland(amount:BigDecimal, from:String): BigDecimal = {
    val englishAmount = converter.convert(amount, from, "GBP")
    println(s" $englishAmount GBP are on their way...")
    val swidishAmount = converter.convert(englishAmount, "GBP", "SEK")
    println(s" $swidishAmount SEK are on their way...")
    swidishAmount
  }
}
