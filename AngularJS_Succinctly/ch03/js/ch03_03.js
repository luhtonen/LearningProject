var app = angular.module('MyApp', []);

app.directive('myWidget', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "widget03.html"
    };
});