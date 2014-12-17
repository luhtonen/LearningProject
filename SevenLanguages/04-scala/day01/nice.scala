class Person(val name: String)

trait Nice {
  def greet() = println("Howdily doodily.")
}

class Character(override val name: String) extends Person(name) with Nice

val flanders = new Character("Ned")
flanders.greet

/*
Output
------
$ scala day01/nice.scala
Howdily doodily.
 */