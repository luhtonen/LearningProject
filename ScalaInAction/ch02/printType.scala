def printType(obj: AnyRef) = obj match {
    case s: String => println("This is string")
    case l: List[_] => println("This is List")
    case a: Array[_] => println("This is Array")
    case d: java.util.Date => println("This is date")
}