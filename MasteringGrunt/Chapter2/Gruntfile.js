'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  var appConfig = {
    app: require('./bower.json').appPath || 'src',
    dist: 'dist'
  };

  grunt.initConfig({
    // Project settings
    chapter2: appConfig,

    watch: {
      options: {
        nospawn: true
      },
      compass: {
        files: ['<%= chapter2.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server']
      },
      jade: {
        files: ['<%= chapter2.app %>/templates/{,*/}*.jade'],
        tasks: ['jade:server']
      }
    },
    compass: {
      options: {
        sassDir: '<%= chapter2.app %>/styles/sass',
        cssDir: '<%= chapter2.app %>/styles',
        importPath: '<%= chapter2.app %>/bower_components',
        relativeAssets: false
      },
      dist: {},
      server: {}
    },
    jade: {
      dist: {
        files: {
          '<%= chapter2.app %>/index.html': '<%= chapter2.app %>/templates.index.jade',
          '<%= chapter2.app %>/golden-dragon.html': '<%= chapter2.app %>/templates/golden-dragon.jade',
          '<%= chapter2.app %>/little-pizzeria.html': '<%= chapter2.app %>/templates/little-pizzeria.jade'
        }
      },
      server: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          '<%= chapter2.app %>/index.html': '<%= chapter2.app %>/templates.index.jade',
          '<%= chapter2.app %>/golden-dragon.html': '<%= chapter2.app %>/templates/golden-dragon.jade',
          '<%= chapter2.app %>/little-pizzeria.html': '<%= chapter2.app %>/templates/little-pizzeria.jade'
        }
      }
    }
  });

  var tasks = [];

  grunt.registerTask('build', tasks);
};