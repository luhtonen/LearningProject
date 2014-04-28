var app = angular.module("TestApp", []);
app.service("serviceA", function() {
    this.name = "A";
});
app.service("serviceB", function() {
    this.name = "B";
});
var svcC = function(svcA, svcB) {
    svcA.name; // returns "A"
    svcB.name; // returns "B"
};
svcC.$inject = ["serviceA", "serviceB"];
app.service("serviceC", svcC);