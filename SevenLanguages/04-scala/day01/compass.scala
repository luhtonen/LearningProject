class Compass {
  val directions = List("north", "east", "south", "west")
  var bearing = 0
  print("Initial bearing: ")
  println(bearing)

  def direction() = directions(bearing)

  def inform(turnDirection: String): Unit = {
    println("Turning " + turnDirection + ". Now bearing " + direction)
  }

  def turnRight(): Unit = {
    bearing = (bearing + 1) % directions.size
    inform("right")
  }

  def turnLeft(): Unit = {
    bearing = (bearing + (directions.size - 1)) % directions.size
    inform("left")
  }
}

val myCompass = new Compass

myCompass.turnRight
myCompass.turnRight

myCompass.turnLeft
myCompass.turnLeft
myCompass.turnLeft

/*
Output
------
$ scala day01/compass.scala
Initial bearing: 0
Turning right. Now bearing east
Turning right. Now bearing south
Turning left. Now bearing east
Turning left. Now bearing north
Turning left. Now bearing west
 */