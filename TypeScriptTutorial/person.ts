/**
 * Created by luhtonen on 03/03/15.
 */
interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstname + ' ' + person.lastname;
}

var user = {firstname: 'Edu', lastname: 'Finn'};

document.getElementById('person').innerHTML = greeter(user);