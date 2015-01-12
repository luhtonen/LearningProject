import org.elu.mongo._

object QuickTour extends App {
    def client = new MongoClient
    def db = client.createDB("mydb")

    for(name <- db.collectionNames) println(name)
}