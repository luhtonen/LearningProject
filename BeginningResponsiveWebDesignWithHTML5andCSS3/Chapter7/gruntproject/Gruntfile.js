'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Grunt configuration goes here
    pgk: grunt.file.readJSON('package.json')
  });

  grunt.registerTask('build', [
    // task list goes here
  ]);
};