var app = angular.module('MyApp', []);

app.directive('myWidget', function() {
    return {
        restrict: 'E',
        replace: true,
        template: "<p>Hello World</p>"
    };
});