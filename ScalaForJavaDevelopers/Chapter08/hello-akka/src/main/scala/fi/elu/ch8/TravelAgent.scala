package fi.elu.ch8

import akka.actor.SupervisorStrategy.{Stop, Restart}
import akka.actor.{ActorLogging, OneForOneStrategy, Actor, ActorRef}
import akka.event.LoggingReceive

/**
 * Created by luhtonen on 06/02/15.
 */
object TravelAgent {
  case class BookTrip(transport: ActorRef, accomodation: ActorRef, nbOfPerson: Int)
  case object Done
  case object Failed
}
class TravelAgent extends Actor with ActorLogging {
  import TravelAgent._

  override val supervisorStrategy = OneForOneStrategy(loggingEnabled = false) {
    case _: Flight.FlightBookingException =>
      log.warning("Flight Service Failed. Restarting")
      Restart
    case _: Hotel.HotelBookingException =>
      log.warning("Hotel Service Failed. Restarting")
      Restart
    case e =>
      log.error("Unexpected failure", e.getMessage)
      Stop
  }

  def receive = LoggingReceive {
    case BookTrip(flightAgent, hotelAgent, persons) =>
      flightAgent ! Flight.BookSeat(persons)
      hotelAgent ! Hotel.BookRoom(persons)
      context.become(awaitTransportOrAccommodation(flightAgent, hotelAgent, sender))
  }

  def awaitTransportOrAccommodation(transport: ActorRef, accommodation: ActorRef,
                                   customer: ActorRef) : Receive = LoggingReceive {
    case Flight.Done =>
      context.become(awaitAccommodation(customer))
    case Hotel.Done =>
      context.become(awaitTransport(customer))
    case Flight.Failed | Hotel.Failed =>
      customer ! Failed
      context.stop(self)
  }

  def awaitTransport(customer: ActorRef): Receive = LoggingReceive {
    case Flight.Done =>
      customer ! Done
      context.stop(self)
    case Flight.Failed =>
      customer ! Failed
      context.stop(self)
  }

  def awaitAccommodation(customer: ActorRef): Receive = LoggingReceive {
    case Hotel.Done =>
      customer ! Done
      context.stop(self)
    case Hotel.Failed =>
      customer ! Failed
      context.stop(self)
  }
}