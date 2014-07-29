var app = angular.module('MyApp', []);
app.controller('MyCtrl', ['$scope', function($scope) {
    $scope.friends = [
        { name: 'Anton', age: 46 },
        { name: 'Nastya', age: 47 },
        { name: 'Anastassia', age: 27 },
        { name: 'Vitya', age: 57 },
        { name: 'Maija', age: 47 },
        { name: 'Robert', age: 43 }
    ];
}]);