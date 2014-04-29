var app = angular.module("TestApp", []);
app.service("serviceA", function() {
    this.name = "A";
});
app.service("serviceB", function() {
    this.name = "B";
});
app.service("serviceC",["serviceA", "serviceB", function(svcA, svcB) {
    svcA.name; // returns "A"
    svcB.name; // returns "B"
}]);
