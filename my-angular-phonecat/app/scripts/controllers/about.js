'use strict';

/**
 * @ngdoc function
 * @name myAngularPhonecatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAngularPhonecatApp
 */
angular.module('myAngularPhonecatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
