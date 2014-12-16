def forLoop: Unit = {
  println("for loop using Java-style iteration")
  for (i <- 0 until args.length) {
    println(args(i))
  }
}
forLoop

/*
Output
------
$ scala day01/for_loop.scala its all in the grind
for loop using Java-style iteration
its
all
in
the
grind
 */
