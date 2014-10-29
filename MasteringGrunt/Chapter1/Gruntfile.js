'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  // Configurable paths to the application
  var appConfig = {
    app: require('./bower.json').appPath || 'src',
    dist: 'dist'
  };

  grunt.initConfig({
    // Project settings
    hello: appConfig,

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= hello.dist %>/{,*}/*',
            '!<%= hello.dist %>/.git*'
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
          cwd: '<%= hello.dist %>',
          src: '{,*}*.html',
          dest: '<%= hello.dist %>'
        }]
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= hello.dist %>'
      },
      html: '<%= hello.app %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: ['<%= hello.dist %>']
      },
      html: ['<%= hello.dist %>/{,*/}*.html']
    },
    uglify: {
      options: {
        mangle: false
      }
    },
    filerev: {
      dist: {
        src: [
          '<%= hello.dist %>/scripts/{,*/}*.js'
        ]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= hello.app %>',
          dest: '<%= hello.dist %>',
          src: [
            '*.html'
          ]
        }]
      }
    }
  });

  var tasks = [
    'clean:dist',
    'useminPrepare',
    'concat',
    'copy:dist',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ];

  grunt.registerTask('build', tasks);
};