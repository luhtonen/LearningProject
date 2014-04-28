var app = angular.module("TestApp", []);
app.service("serviceA", function() {
    this.name = "A";
});
app.service("serviceB", function() {
    this.name = "B";
});
app.service("serviceC", function(serviceA, serviceB) {
    serviceA.name; // returns "A"
    serviceB.name; // returns "B"
});