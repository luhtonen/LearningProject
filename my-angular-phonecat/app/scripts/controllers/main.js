'use strict';

/**
 * @ngdoc function
 * @name myAngularPhonecatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularPhonecatApp
 */
var phonecatControllers = angular.module('myAngularPhonecatApp');

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function ($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }]);
