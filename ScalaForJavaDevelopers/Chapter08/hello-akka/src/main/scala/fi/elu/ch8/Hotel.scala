package fi.elu.ch8

import akka.actor.Actor
import akka.event.LoggingReceive

/**
 * Created by luhtonen on 06/02/15.
 */
object Hotel {
  case class BookRoom(number: Int) {
    require(number > 0)
  }
  case object Done
  case object Failure
}
class Hotel extends Actor {
  import Hotel._
  var roomsLeft = 15
  def receive = LoggingReceive {
    case BookRoom(nb) if nb <= roomsLeft =>
      roomsLeft -= nb
      sender ! Done
    case _ => sender ! Failure
  }
}
