/**
 * Created by luhtonen on 03/03/15.
 */
function greeter(person: string) {
  return 'Hello, ' + person;
}

var user = [1, 2, 3];

document.getElementById('greeter2').innerHTML = greeter(user);

// compile error:
// greeter2.ts(10,35): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.