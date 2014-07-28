'use strict';

/**
 * @ngdoc function
 * @name myAngularPhonecatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularPhonecatApp
 */
angular.module('myAngularPhonecatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
