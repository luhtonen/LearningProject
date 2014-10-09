'use strict';

/**
 * @ngdoc function
 * @name GuidebookApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the GuidebookApp
 */
angular.module('GuidebookApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });