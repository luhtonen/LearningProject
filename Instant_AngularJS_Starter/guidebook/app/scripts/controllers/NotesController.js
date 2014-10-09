'use strict';

/**
 * @ngdoc function
 * @name GuidebookApp.Guidebook.controller:AddNoteController
 * @description
 * # AddNoteController and DeleteNoteController
 * Controllers of the GuidebookApp.Guidebook
 */
angular.module('GuidebookApp.Guidebook')
  .controller('AddNoteController', ['$scope', '$location', '$routeParams', 'NoteModel',
    function ($scope, $location, $routeParams, NoteModel) {
      var chapterId = $routeParams.chapterId;
      $scope.cancel = function() {
        $location.path('/guidebook/chapter/' + chapterId);
      };
      $scope.createNote = function() {
        NoteModel.addNote(chapterId, $scope.note.content);
        $location.path('/guidebook/chapter/' + chapterId);
      };
  }])
  .controller('DeleteNoteController', ['$scope', '$location', '$routeParams', 'NoteModel',
    function($scope, $location, $routeParams, NoteModel) {
      var chapterId = $routeParams.chapterId;
      NoteModel.deleteNote(chapterId, $routeParams.noteId);
      $location.path('/guidebook/chapter/' + chapterId);
    }
  ]);
