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
    }
  });

  // Define the default task
  grunt.registerTask('default', 'Default task', ['uglify']);

  grunt.loadTasks('./tasks');
};