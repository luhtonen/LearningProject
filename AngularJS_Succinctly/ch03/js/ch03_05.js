var app = angular.module('MyApp', []);

app.directive('myWidget', function() {
    var linkFunction = function(scope, element, attributes) {
        scope.text = attributes["myWidget"];
    };
    return {
        restrict: "A",
        template: "<p>{{text}}</p>",
        link: linkFunction,
        scope: {}
    };
});

app.directive("myWidget2", function() {
    return {
        restrict: "E",
        template: "<p>{{text}}</p>",
        scope: {
            text: "@text"
        }
    }
});

app.directive("myWidgetExpr", function() {
    var linkFunction = function(scope, element, attributes) {
        scope.text = scope.fn({ count: 5 });
    };
    return {
        restrict: "E",
        template: "<p>{{text}}</p>",
        link: linkFunction,
        scope: {
            fn: "&fn"
        }
    };
});