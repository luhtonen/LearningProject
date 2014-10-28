'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: {
      build: {
        files: [{
          dot: true,
          src: [
            'dist/*',
            '!dist/.git*'
          ]
        }]
      }
    },
    htmlmin: {
      build: {
        options: {
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: '{,*}*.html',
          dest: 'dist'
        }]
      }
    }
  });
};