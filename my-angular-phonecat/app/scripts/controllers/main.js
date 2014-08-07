'use strict';

/**
 * @ngdoc function
 * @name myAngularPhonecatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularPhonecatApp
 */
angular.module('myAngularPhonecatApp')
.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
    });
    $scope.orderProp = 'age';
}])
    .controller('PhoneDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
    }]);
