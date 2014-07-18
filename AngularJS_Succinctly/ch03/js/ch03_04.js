var app = angular.module('MyApp', []);

app.directive('myWidget', function() {
    return {
        restrict: "E",
        transclude: true,
        templateUrl: "widget04.html"
    };
});