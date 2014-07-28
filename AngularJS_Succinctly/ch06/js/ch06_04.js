var app = angular.module('MyApp', ['ngRoute']).
    config(function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
            when("/persons", { templateUrl: "partials/index04.html"}).
            when("/persons/:id", {
                templateUrl: "partials/show04.html",
                controller: "ShowCtrl"
            }).
            when("/login", {
                templateUrl: "partials/login04.html",
                controller: "LoginCtrl"
            }).
            when("/help", { templateUrl: "partials/help04.html" }).
            otherwise({ redirectTo: "/persons" });
    }).
    run(function($rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function(event, next, current) {
            if ($rootScope.loggedInUser == null) {
                if (next.templateUrl === "partials/login04.html") {
                    // do nothing
                } else {
                    $location.path("/login");
                }
            }
        });
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

app.controller('LoginCtrl', ['$scope', '$location', '$rootScope',
    function($scope, $location, $rootScope) {
        $scope.login = function() {
            $rootScope.loggedInUser = $scope.username;
            $location.path('/persons');
        }
    }
]);