package fi.elu.ch8

import akka.actor.{Props, Actor}
import akka.event.LoggingReceive

/**
 * Created by luhtonen on 06/02/15.
 */
class BookingMain extends Actor {
  val flight = context.actorOf(Props[Flight], "Helsinki-Nassau")
  val hotel = context.actorOf(Props[Hotel], "Atlantis")
  val travelAgent = context.actorOf(Props[TravelAgent], "ClubMed")
//  travelAgent ! TravelAgent.BookTrip(flight, hotel, 20) // to test failed booking
  travelAgent ! TravelAgent.BookTrip(flight, hotel, 10)

  def receive = LoggingReceive {
    case TravelAgent.Done =>
      println("Booking successful")
      context.stop(self)
    case TravelAgent.Failed =>
      println("Booking Failed")
      context.stop(self)
  }
}
