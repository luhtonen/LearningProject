'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    // Project settings
    chapter3: appConfig,

    watch: {
      options: {
        nospawn: true
      },
      coffee: {
        files: ['<%= chapter3.app %>/coffee/{,*/}*.coffee'],
        tasks: ['coffee:server']
      },
      compass: {
        files: ['<%= chapter3.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server']
      }
    }
  });

  grunt.registerTask('build', [
    // task list goes here
  ]);
};