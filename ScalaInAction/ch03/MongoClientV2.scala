import com.mongodb.Mongo

class MongoClientV2(val host: String, val port: Int) extends Mongo(host, port) {
    require(host != null, "You have to provide a host name")
    def this() = this("127.0.0.1", 27017)
}