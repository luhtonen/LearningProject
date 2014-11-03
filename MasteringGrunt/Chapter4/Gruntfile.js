'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    // Project settings
    chapter4: appConfig,

    watch: {
      options: {
        nospawn: true
      },
      coffee: {
        files: ['<%= chapter4.app %>/coffee/{,*/}*.coffee'],
        tasks: ['coffee:server']
      },
      compass: {
        files: ['<%= chapter4.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server']
      },
      jade: {
        files: ['<%= chapter4.app %>/templates/{,*/}*.jade'],
        tasks: ['jade:server']
      }
    },
    compass: {
      options: {
        sassDir: '<%= chapter4.app %>/styles/sass',
        cssDir: '<%= chapter4.app %>/styles',
        importPath: '<%= chapter4.app %>/bower_components',
        relativeAssets: false
      },
      dist: {},
      server: {}
    },
    jade: {
      dist: {
        options: {
          pretty: true
        },
        files: {
          '<%= chapter4.app %>/index.html': '<%= chapter4.app %>/templates/index.jade'
        }
      },
      server: {
        options: {
          data: {
            debug: false
          },
          pretty: true
        },
        files: {
          '<%= chapter4.app %>/index.html': '<%= chapter4.app %>/templates/index.jade'
        }
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= chapter4.app %>/coffee',
          src: '{,*/}*.coffee',
          dest: '<%= chapter4.dist %>/scripts',
          ext: '.js'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%= chapter4.app %>/coffee',
          src: '{,*/}*.coffee',
          dest: '<%= chapter4.app %>/scripts',
          ext: '.js'
        }]
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: '<%= chapter4.app %>'
        }
      }
    },
    mochaTest: {
      src: ['test/bbs.coffee']
    },
    clean: {
      build: {
        files: [{
          dot: true,
          src: [
            '<%= chapter4.dist %>/*',
            '!<%= chapter4.dist %>/.git*'
          ]
        }]
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= chapter4.dist %>'
      },
      html: '<%= chapter4.app %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: ['<%= chapter4.dist %>']
      },
      html: ['<%= chapter4.dist %>/{,*/}*.html']
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
          cwd: '<%= chapter4.dist %>',
          src: '{,*/}*.html',
          dest: '<%= chapter4.dist %>'
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
          cwd: '<%= chapter4.app %>',
          dest: '<%= chapter4.dist %>',
          src: [
            '*.html'
          ]
        }]
      }
    },
    filerev: {
      dist: {
        src: ['<%= chapter4.dist %>/scripts/{,*/}*.js']
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= chapter4.dist %>/styles/main.css': '<%= chapter4.app %>/styles/{,*/}*.css'
        }
      }
    }
  });

  grunt.registerTask('test', [
    'connect',
    'mochaTest'
  ]);
  grunt.registerTask('build', [
    'test',
    'clean',
    'jade:dist',
    'coffee:dist',
    'compass:dist',
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