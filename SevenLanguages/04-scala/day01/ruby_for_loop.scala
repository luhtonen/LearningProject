def rubyStyleForLoop: Unit = {
  println("for loop using Ruby-style iteration")
  args.foreach { arg =>
    println(arg)
  }
}
rubyStyleForLoop

/*
Output
------
$ scala day01/ruby_for_loop.scala freeze those knees chickadees
for loop using Ruby-style iteration
freeze
those
knees
chickadees
 */