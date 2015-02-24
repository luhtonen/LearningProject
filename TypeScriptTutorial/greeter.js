/**
 * Created by luhtonen on 18/02/15.
 */
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
