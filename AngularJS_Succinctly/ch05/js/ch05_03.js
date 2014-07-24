var app = angular.module('MyApp', ['ngResource']);

app.controller('MyCtrl', ['$scope', '$resource',
    function($scope, $resource) {
        var TwitterAPI = $resource("https://api.twitter.com/1.1/search/",
            { get: { method: "JSONP" }});
        $scope.search = function() {
            $scope.searchResult = TwitterAPI.get({ q: $scope.searchTerm });
        };
    }
]);
