'use strict';

module.exports = function (grunt) {
  // Register multi-task (run once per target)
  grunt.registerMultiTask('showTargetFiles', 'Show target files', function() {
    // Show the 'files' array
    this.files.forEach(function(file) {
      console.log('source: ' + file.src + ' -> ' +
                  'destination: ' + file.dest);
    });
  });
};