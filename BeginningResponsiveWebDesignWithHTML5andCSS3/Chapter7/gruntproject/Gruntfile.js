'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    // Grunt configuration goes here
    pgk: grunt.file.readJSON('package.json'),
    compass: {
      dev: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          imagesDir: 'images',
          environment: 'development',
          httpGeneratedImagesPath: 'images'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass:dev']);
};