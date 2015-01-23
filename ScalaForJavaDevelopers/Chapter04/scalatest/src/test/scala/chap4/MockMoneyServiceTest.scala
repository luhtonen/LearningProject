package chap4

import org.junit.runner.RunWith
import org.scalamock.scalatest.MockFactory
import org.scalatest._
import org.scalatest.junit.JUnitRunner

/**
 * Created by luhtonen on 23/01/15.
 */
@RunWith(classOf[JUnitRunner])
class MockMoneyServiceTest extends FlatSpec with MockFactory with Matchers {
  "Sending money to Sweden" should "convert into SEK" in {
    val converter = mock[Converter]
    val moneyService = new MoneyService(converter)

    (converter.convert _).expects(BigDecimal("200"),"EUR","SEK").returning(BigDecimal("1750"))

    val amount = 200
    val from = "EUR"
    val result = moneyService.sendMoneyToSweden(amount, from)
    result.toInt should be (1750)
  }
}
