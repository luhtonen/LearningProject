var app = angular.module('MyApp', ['ngResource']);

app.controller('MyCtrl', ['$scope', '$resource',
    function($scope, $resource) {
        var TwitterAPI = $resource("http://search.twitter.com/search.json",
            { callback: "JSON_CALLBACK" },
            { get: { method: "JSONP" }});
        $scope.search = function() {
            $scope.searchResult = TwitterAPI.get({ q: $scope.searchTerm });
        };
    }
]);
