'use strict';

/**
 * @ngdoc function
 * @name learningD3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the learningD3App
 */
angular.module('learningD3App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
