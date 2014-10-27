'use strict';

module.exports = function (grunt) {
  // Initialize environment
  var env = grunt.option('env') || 'dev';
  // Load tasks provided by each plugin
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  // project configuration
  grunt.initConfig({
    coffee: {
      build: {
        options: {
          join: true
        },
        src: ['src/scripts/**/*.coffee',
              '!src/scripts/app.coffee',
              'src/scripts/app.coffee'],
        dest: 'build/js/app.js'
      }
    },
    stylus: {
      build: {
        src: 'src/styles/app.styl',
        dest: 'build/css/app.css'
      }
    },
    jade: {
      options: {
        pretty: true
      },
      build: {
        src: 'src/views/app.jade',
        dest: 'build/app.html'
      }
    },
    uglify: {
      options: {
        compress: {
          global_defs: {
            "DEBUG": false
          },
          dead_code: true
        }
      },
      compress: {
        src: '<%= coffee.build.dest %>',
        dest: '<%= coffee.build.dest %>'
      }
    },
    cssmin: {
      compress: {
        src: '<%= stylus.build.dest %>',
        dest: '<%= stylus.build.dest %>'
      }
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributesQuotes: true,
        removeRedundantAttributes: true,
        removeOptionalTags: true
      },
      compress: {
        src: '<%= jade.build.dest %>',
        dest: '<%= jade.build.dest %>'
      }
    },
    watch: {
      scripts: {
        files: 'src/scripts/**/*.coffee',
        tasks: 'scripts'
      },
      styles: {
        files: 'scr/styles/**/*.styl',
        tasks: 'styles'
      },
      views: {
        files: 'src/views/**/*.jade',
        tasks: 'views'
      }
    }
  });
  // Environment specific tasks
  if (env === 'prod') {
    grunt.registerTask('scripts', 'Compile and compress scripts files', ['coffee', 'uglify']);
    grunt.registerTask('styles', 'Compile and compress styles files', ['stylus', 'cssmin']);
    grunt.registerTask('views', 'Compile and compress view files', ['jade', 'htmlmin']);
  } else {
    grunt.registerTask('scripts', 'Compile scripts files', ['coffee']);
    grunt.registerTask('styles', 'Compile styles files', ['stylus']);
    grunt.registerTask('views', 'Compile view files', ['jade']);
  }
  grunt.registerTask('build', 'Compile all source files', ['scripts', 'styles', 'views']);
  // Define the default task
  grunt.registerTask('default', 'Default task, which build application and start watch', ['build', 'watch']);
};