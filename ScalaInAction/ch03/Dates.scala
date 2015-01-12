import java.util.Date
import java.sql.{Date => SqlDate}

val now = new Date
println(now)
val sqlDate = new SqlDate(now.getTime)
println(sqlDate)