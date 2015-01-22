package scalatest

import org.scalatest.FunSuite

class Test03 extends FunSuite {
  test("Exception expected, does not fire, FAIL") {
    val msg = "hello"
    intercept[IndexOutOfBoundsException] {
      msg.charAt(0)
    }
  }

  test("Exception expected, fires, PASS") {
    val msg = "hello"
    intercept[IndexOutOfBoundsException] {
      msg.charAt(-1)
    }
  }
}