var app = angular.module('myApp', ['ngRoute', 'ngResource']);
app.config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
            when("/persons", {
                templateUrl: "/partials/index.jade",
                controller: "PersonIndexCtrl"
            }).
            when("/persons/:id", {
                templateUrl: "/partials/show.jade",
                controller: "PersonShowCtrl"
            }).otherwise({ redirectTo: "/persons" });
    });

app.factory('Person', function() {
    var persons = [
        { name: "Arno", age: 23, id: 1 },
        { name: "Lauri", age: 19, id: 2 },
        { name: "Kristian", age: 18, id: 3 },
        { name: "Karoliina", age: 14, id: 4 }
    ];

    return {
        all: function() {
            return persons;
        },
        get: function(id) {
            var result = null;
            angular.forEach(persons, function(p) {
                if (p.id == id) result = p;
            });
            return result;
        }
    };
});

app.controller('PersonIndexCtrl', ['$scope', 'Person', function($scope, Person) {
    $scope.persons = Person.all();
}]);

app.controller('PersonShowCtrl', ['$scope', '$routeParams', 'Person', function($scope, $routeParams, Person) {
    $scope.person = Person.get($routeParams.id);
}]);