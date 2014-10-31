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
    },
    clean: {
      build: {
        files: [{
          dot: true,
          src: [
            '<%= chapter3.dist %>/*',
            '!<%= chapter3.dist %>/.git*'
          ]
        }]
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= chapter3.dist %>'
      },
      html: '<%= chapter3.app %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: ['<%= chapter3.dist %>']
      },
      html: ['<%= chapter3.dist %>/{,*/}*.html']
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
          cwd: '<%= chapter3.dist %>',
          src: '{,*/}*.html',
          dest: '<%= chapter3.dist %>'
        }]
      }
    },
    uglify: {
      options: {
        mangle: false
      }
    },
    copy: {
      build: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= chapter3.app %>',
          dest: '<%= chapter3.dist %>',
          src: [
            '*.html'
          ]
        }]
      }
    },
    filerev: {
      dist: {
        src: [
          '<%= chapter3.dist %>/scripts/{,*/}*.js'
        ]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= chapter3.dist %>/styles/main.css': '<%= chapter3.app %>/styles/{,*/}*.css'
        }
      }
    }
  });

  grunt.registerTask('build', [
    'clean:build',
    'useminPrepare',
    'concat',
    'copy',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);
};