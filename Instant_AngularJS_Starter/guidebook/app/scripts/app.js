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
      .when('/guidebook', {
        templateUrl: 'views/chapters.html',
        controller: 'ChaptersController'
      })
      .when('/guidebook/chapter/:chapterId', {
        templateUrl: '/views/chapters.html',
        controller: 'ChaptersController'
      })
      .when('/guidebook/addNote/:chapterId', {
        templateUrl: '/views/addNote.html',
        controller: 'AddNoteController'
      })
      .when('/guidebook/deleteNote/:chapterId/:noteId', {
        templateUrl: '/views/addNote.html',
        controller: 'DeleteNoteController'
      }).otherwise({
        redirectTo: '/'
      });
  });
