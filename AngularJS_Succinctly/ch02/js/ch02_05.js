var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope) {
    $scope.name = "Edu";
    $scope.user = {
        name: "Finn"
    };
});

app.controller("MyNestedCtrl", function($scope) {
});