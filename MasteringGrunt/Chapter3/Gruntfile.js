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
    },
    compass: {
      options: {
        sassDir: '<%= chapter3.app %>/styles/sass',
        cssDir: '<%= chapter3.app %>/styles',
        importPath: '<%= chapter3.app %>/bower_components',
        relativeAssets: false
      },
      dist: {},
      server: {}
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= chapter3.app %>/coffee',
          src: '{,*/}*.coffee',
          dest: '<%= chapter3.dist %>/scripts',
          ext: '.js'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%= chapter3.app %>/coffee',
          src: '{,*/}*.coffee',
          dest: '<%= chapter3.app %>/scripts',
          ext: '.js'
        }]
      }
    }
  });

  grunt.registerTask('build', [
    // task list goes here
  ]);
};