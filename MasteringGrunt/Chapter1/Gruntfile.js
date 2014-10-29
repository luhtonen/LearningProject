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
    },
    useminPrepare: {
      options: {
        dest: 'dist'
      },
      html: 'src/index.html'
    },
    usemin: {
      options: {
        assetsDirs: ['dist']
      },
      html: ['dist/{,*/}*.html']
    },
    uglify: {
      options: {
        mangle: false
      }
    },
    filerev: {
      dist: {
        src: [
          'dist/scripts/{,*/}*.js'
        ]
      }
    }
  });

  var tasks = [
    'clean',
    'useminPrepare',
    'htmlmin',
    'concat',
    'uglify',
    'filerev',
    'usemin'
  ];

  grunt.registerTask('build', tasks);
};