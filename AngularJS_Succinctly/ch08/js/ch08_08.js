var app = angular.module('MyApp', ['ngResource']);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('myHttpInterceptor');
    var spinnerFunction = function(data, headersGetter) {
        $("#spinner").show();
        return data;
    };
    $httpProvider.defaults.transformRequest.push(spinnerFunction);
}]);

app.factory('myHttpInterceptor', ['$q', function($q) {
    return {
        response: function(response) {
            $("#spinner").hide();
            return response;
        },
        responseError: function (response) {
            $("#spinner").hide();
            return $q.reject(response);
        }
    };
}]);

app.controller('MyCtrl', ['$scope', '$resource', '$rootScope', function($scope, $resource, $rootScope) {

    $scope.ergastAPI = $resource('http://ergast.com/api/f1/2013/driverStandings.json',
        {
            callback: 'JSON_CALLBACK'
        },
        { get: { method: 'JSONP' }});

    $scope.load = function() {
        $scope.ergastAPI.get(function(data) {
            $scope.drivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        });
    };
}]);
