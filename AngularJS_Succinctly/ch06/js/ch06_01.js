var app = angular.module('MyApp', ['ngRoute']).
    config(function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
            when("/persons", { templateUrl: "partials/person_list01.html"}).
            when("/persons/:id", {
                templateUrl: "partials/person_details01.html",
                controller: "ShowCtrl"
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

app.controller('IndexCtrl', ['$scope', 'Person', function($scope, Person) {
    $scope.persons = Person.all();
}]);

app.controller('ShowCtrl', ['$scope', '$routeParams', 'Person', function($scope, $routeParams, Person) {
    $scope.person = Person.get($routeParams.id);
}]);