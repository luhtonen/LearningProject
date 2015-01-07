def printType(obj: AnyRef) = obj match {
    case s: String => println("This is string")
    case l: List[_] => println("This is List")
    case a: Array[_] => println("This is Array")
    case d: java.util.Date => println("This is date")
}

def rangeMatcher(num: Int) = num match {
    case within10 if within10 <= 10 => println("with in 0 to 10")
    case within100 if within100 <= 100 => println("with in 11 to 100")
    case beyond100 if beyond100 < Integer.MAX_VALUE => println("beyond 100")
}
