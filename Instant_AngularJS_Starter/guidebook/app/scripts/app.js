'use strict';

/**
 * @ngdoc overview
 * @name GuidebookApp
 * @description
 * # GuidebookApp
 *
 * Main module of the application.
 */
angular
  .module('GuidebookApp', [
    'ngResource',
    'ngRoute',
    'GuidebookApp.Guidebook'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('HeadersCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }]);
