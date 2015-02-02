package org.elu

import org.scalatest._
import org.scalatest.Matchers

/**
 * Created by luhtonen on 02/02/15.
 */
class BookstoreSpec extends FlatSpec with Matchers {
  "This bookstore" should "contain 3 books" in {
    val bookstore =
    <book_store xmlns="http://www.books.org">
      <book ISBN="9781933499185">
        <title>Madame Bovary</title>
        <author>Gustave Flaubert</author>
        <date>1857</date>
        <publisher>Fonolibro</publisher>
      </book>
      <book ISBN="9782070411207">
        <title>Le malade imaginaire</title>
        <author>Moliere</author>
        <date>1673</date>
        <publisher>Gallimard</publisher>
      </book>
      <book ISBN="1475066511">
        <title>Fables</title>
        <author>Jean de La Fontaine</author>
        <date>1678</date>
        <publisher>CreateSpace</publisher>
      </book>
    </book_store>

    val bookstoreInstance = scalaxb.fromXML[Book_store](bookstore)

    println("bookstoreInstance: " + bookstoreInstance.book)

    bookstoreInstance.book.length should be === 3
  }
}
