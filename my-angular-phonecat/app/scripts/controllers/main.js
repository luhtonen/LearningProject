'use strict';

/**
 * @ngdoc function
 * @name myAngularPhonecatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularPhonecatApp
 */
angular.module('myAngularPhonecatApp')
.controller('PhoneListCtrl', function ($scope) {
    $scope.phones = [
        {'name': 'Nexus S',
         'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
         'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
         'snippet': 'The Next, Next Generation tablet.'}
    ];
    $scope.name = 'World';
});
