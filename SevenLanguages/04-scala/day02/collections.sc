// Lists

List(1, 2, 3)

List("one", "two", "three")

List("one", "two", 3)

List("one", "two", 3)(2)

//List("one", "two", 3)(4)
// throws an exception

//List("one", "two", 3)(-1)
// throws an exception

Nil

// Sets

val animals = Set("lions", "tigers", "bears")

// adding element
animals + "armadillos"

// removing element
animals - "tigers"

//animals + Set("armadillos", "raccoons")
// this is not working in Scala

// adding Set
animals ++ Set("armadillos", "raccoons")

// removing Set
animals -- Set("lions", "bears")

// Sets' intersection - deprecated and is not working anymore
//animals ** Set("armadillos", "raccoons", "lions", "tigers")

// Set are order independent
Set(1, 2, 3) == Set(3, 2, 1)

// List are order dependent
List(1, 2, 3) == List(3, 2, 1)

// Maps
// declaration
val ordinals = Map(0 -> "zero", 1 -> "one", 2 -> "two")

ordinals(2)

import scala.collection.mutable.HashMap
// defining HashMap
val map = new HashMap[Int, String]
// adding entries
map += 4 -> "four"
map += 8 -> "eight"

map

//map += "zero" -> 0
// don't work because of incompatible type