'use strict';

/**
 * @ngdoc function
 * @name GuidebookApp.Guidebook.controller:ChaptersController
 * @description
 * # ChaptersController
 * Controller of the GuidebookApp.Guidebook
 */
angular.module('GuidebookApp.Guidebook')
  .controller('ChaptersController', ['$scope', '$location', '$routeParams', 'ChapterModel', 'NoteModel',
    function ($scope, $location, $routeParams, ChapterModel, NoteModel) {
      var chapters = ChapterModel.getChapters();
      for (var i = 0; i < chapters.length; i++) {
        chapters[i].notes = NoteModel.getNotesForChapter(chapters[i].id);
      }
      $scope.chapters = chapters;
      $scope.selectedChapterId = $routeParams.chapterId;
      $scope.onDelete = function(noteId) {
        var confirmDelete = confirm('Are your sure you want to delete this note?');
        if (confirmDelete) {
          $location.path('/guidebook/deleteNote/' + $routeParams.chapterId + '/' + noteId);
        }
      };
  }]);
