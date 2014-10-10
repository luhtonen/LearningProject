'use strict';

angular.module('GuidebookApp.Guidebook').directive('gbNoteList', function() {
  return {
    restrict: 'E',
    templateUrl: '/views/directives/noteList.html'
  };
});