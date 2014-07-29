var app = angular.module('MyApp', ['ui.utils']);

app.controller('User', ['$scope', function($scope) {
    $scope.user = {};
    $scope.wasSubmitted = false;

    $scope.submit = function() {
        $scope.wasSubmitted = true;
    };
    $scope.error = function(name) {
        var s = $scope.form[name];
        return s.$invalid && s.$dirty ? 'has-error' : '';
    };
    $scope.blacklist = ['idiot', 'looser'];
    $scope.notBlacklisted = function(value) {
        return $scope.blacklist.indexOf(value) === -1;
    };
}]);
