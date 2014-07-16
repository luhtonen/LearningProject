var app = angular.module("MyApp", []);

app.factory("UserService", function() {
    var users = ["Edu", "Draude", "Finn"];

    return {
        all: function() {
            return users;
        },
        first: function() {
            return users[0];
        }
    }
});

app.controller("MyCtrl", ["$scope", "UserService",
    function($scope, UserService) {
        $scope.users = UserService.all();
}]);
app.controller("AnotherCtrl", ["$scope", "UserService",
    function($scope, UserService) {
        $scope.firstUser = UserService.first();
}]);