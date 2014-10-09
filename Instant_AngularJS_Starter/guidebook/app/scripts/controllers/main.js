'use strict';

/**
 * @ngdoc function
 * @name GuidebookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the GuidebookApp
 */
angular.module('GuidebookApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
