'use strict';

/**
 * @ngdoc overview
 * @name yoHelloApp
 * @description
 * # yoHelloApp
 *
 * Main module of the application.
 */
angular
  .module('yoHelloApp', [
    'ngResource',
    'ngRoute'
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
  });
