'use strict';

module.exports = function (grunt) {
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Project configuration
  grunt.initConfig({
    uglify: {
      target1: {
        src: 'src/foo.js',
        dest: 'build/foo.min.js'
      }
    },
    stringCheck: {
      file: './src/app.js',
      string: 'console.log('
    },
    myTask: {
      options: {
        bar: 7
      },
      foo: 42
    },
    myMultiTask: {
      options: {
        foo: 42,
        bar: 7
      },
      target1: {
      },
      target2: {
        options: {
          bar: 8
        }
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', 'Default task', ['uglify']);

  grunt.loadTasks('./tasks');

  grunt.registerTask('myTask', 'My task for experiment with configuring options', function() {
    console.log(this.options());
  });

  grunt.registerMultiTask('myMultiTask', 'Task to experiment with multitask options', function() {
    console.log(this.options());
  });
};