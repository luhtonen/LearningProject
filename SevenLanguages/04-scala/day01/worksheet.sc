println("Hello, surreal world")

// integers

1 + 1

(1).+(1)

5 + 4 * 3

5.+(4.*(3))

(5).+((4).*(3))

// strings

"abc".size

"abc" + 4

4 + "abc"

4 + "1.0"

// 4 * "abc"

// conditions

5 < 6

5 <= 6

5 <= 2

5 >= 2

5 != 2

val a = 1

val b = 2

if (b < a) {
  println("true")
} else {
  println("false")
}

Nil

// cannot use number as boolean
//if (0) { println("true")}

// cannot use Nil as boolean
//if (Nil) { println("true") }

