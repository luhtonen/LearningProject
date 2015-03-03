/**
 * Created by luhtonen on 18/02/15.
 */
function greeter(person) {
  return 'Hello, ' + person;
}

var user = 'Edu Finn';

document.getElementById('greeter').innerHTML = greeter(user);