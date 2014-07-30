var app = angular.module('MyApp', ['ngResource']);

app.controller('MyCtrl', ['$scope', '$resource',
    function($scope, $resource) {
        var TwitterAPI = $resource("http://ergast.com/api/f1/drivers.json",
            { callback: 'JSON_CALLBACK' },
            { get: { method: "JSONP" }});
        $scope.search = function() {
            TwitterAPI.get(function(data) {
                $scope.searchResult = data.MRData.DriverTable.Drivers;
            });
//            $scope.searchResult = TwitterAPI.get({ q: $scope.searchTerm });
        };
    }
]);
