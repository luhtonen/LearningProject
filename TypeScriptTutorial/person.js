function greeter(person) {
    return 'Hello, ' + person.firstname + ' ' + person.lastname;
}
var user = { firstname: 'Edu', lastname: 'Finn' };
document.getElementById('person').innerHTML = greeter(user);
