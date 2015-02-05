package fi.elu.ch8

import akka.actor.Actor
import akka.event.LoggingReceive

/**
 * Created by luhtonen on 05/02/15.
 */
object Flight {
  case class BookSeat(number: Int) {
    require(number > 0)
  }
  case object Done
  case object Failure
}
class Flight extends Actor {
  import Flight._
  var seatsLeft = 50
  def receive = LoggingReceive {
    case BookSeat(nb) if nb <= seatsLeft =>
      seatsLeft -= nb
      sender ! Done
    case _ => sender ! Failure
  }
}