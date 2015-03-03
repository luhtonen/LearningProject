function greeter(person: string) {
  return 'Hello, ' + person;
}

var user = 'Edu Finn';

document.getElementById('greeter1').innerHTML = greeter(user);