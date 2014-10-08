'use strict';

/**
 * @ngdoc function
 * @name yoHelloApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoHelloApp
 */
angular.module('yoHelloApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
