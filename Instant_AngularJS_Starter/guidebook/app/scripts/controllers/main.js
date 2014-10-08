'use strict';

/**
 * @ngdoc function
 * @name yoHelloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoHelloApp
 */
angular.module('yoHelloApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
