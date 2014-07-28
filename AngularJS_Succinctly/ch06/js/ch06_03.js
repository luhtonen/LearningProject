var app = angular.module('MyApp', ['ngRoute']).
    config(function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
            when("/persons", { templateUrl: "partials/index03.html" }).
            when("/persons/:id", {
                templateUrl: "partials/show03.html",
                controller: "ShowCtrl"
            }).
            when("/help", { templateUrl: "partials/help03.html" }).
            otherwise({ redirectTo: "/persons" });
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

app.controller('MainCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.menuClass = function(page) {
        var current = $location.path().substring(1);
        return page === current ? 'active' : '';
    }
}]);