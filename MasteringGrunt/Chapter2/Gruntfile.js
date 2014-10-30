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
          '<%= chapter2.app %>/index.html': '<%= chapter2.app %>/templates/index.jade',
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
          '<%= chapter2.app %>/index.html': '<%= chapter2.app %>/templates/index.jade',
          '<%= chapter2.app %>/golden-dragon.html': '<%= chapter2.app %>/templates/golden-dragon.jade',
          '<%= chapter2.app %>/little-pizzeria.html': '<%= chapter2.app %>/templates/little-pizzeria.jade'
        }
      }
    },
    clean: {
      build: {
        files: [{
          dot: true,
          src: [
            '<%= chapter2.dist %>/*',
            '!<%= chapter2.dist %>/.git*'
          ]
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= chapter2.app %>',
          src: '{,*/}*.html',
          dest: '<%= chapter2.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= chapter2.app %>',
          dest: '<%= chapter2.dist %>',
          src: [
            'images/{,*}/*.png'
          ]
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= chapter2.dist %>/styles/main.css': [ '<%= chapter2.app %>/styles/{,*/}*.css' ]
        }
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'jade:dist',
    'compass:dist',
    'htmlmin:dist',
    'copy',
    'cssmin'
  ]);
};