/**
 * Created by luhtonen on 03/03/15.
 */
class Student {
  fullname: string;
  constructor(public firstname, public middleintial, public lastname) {
    this.fullname = firstname + ' ' + middleintial + ' ' + lastname;
  }
}

interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstname + ' ' + person.lastname;
}

var user = new Student('Edu', 'E', 'Finn');

document.getElementById('student').innerHTML = greeter(user);