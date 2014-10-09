'use strict';

/**
 * @ngdoc overview
 * @name GuidebookApp.Guidebook
 * @description
 * # GuidebookApp.Guidebook
 *
 * Module of the Guidebook.
 */
angular.module('GuidebookApp.Guidebook', [])
.config(function ($routeProvider) {
    $routeProvider
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
      });
  });