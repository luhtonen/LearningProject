/**
 * Created by luhtonen on 03/03/15.
 */
var Student = (function () {
    function Student(firstname, middleintial, lastname) {
        this.firstname = firstname;
        this.middleintial = middleintial;
        this.lastname = lastname;
        this.fullname = firstname + ' ' + middleintial + ' ' + lastname;
    }
    return Student;
})();
function greeter(person) {
    return 'Hello, ' + person.firstname + ' ' + person.lastname;
}
var user = new Student('Edu', 'E', 'Finn');
document.getElementById('student').innerHTML = greeter(user);
