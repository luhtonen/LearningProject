'use strict';

angular.module('GuidebookApp.Guidebook').directive('gbNoteList', function() {
  return {
    restrict: 'E',
    templateUrl: '/views/directives/noteList.html',
    scope: {
      show: '=show',
      notes: '=notes',
      orderValue: '@orderBy',
      onDelete: '=deleteNoteHandler'
    }
  };
});