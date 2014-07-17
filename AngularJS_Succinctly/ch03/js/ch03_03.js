var app = angular.module('MyApp', []);

app.directive('myWidget', function() {
    return {
        restrict: 'E',
        template: "<p>Hello World</p>"
    };
});