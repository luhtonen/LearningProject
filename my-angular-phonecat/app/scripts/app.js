'use strict';

/**
 * @ngdoc overview
 * @name myAngularPhonecatApp
 * @description
 * # myAngularPhonecatApp
 *
 * Main module of the application.
 */
angular
  .module('myAngularPhonecatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'PhoneListCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
