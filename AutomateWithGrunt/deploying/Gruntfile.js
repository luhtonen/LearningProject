module.exports = function(grunt){
  grunt.config.init({
    copyFiles: {
      options: {
        workingDirectory: 'working'
      }
    }
  });
  grunt.registerTask('createFolder', 'Create the working folder', function() {
    grunt.config.requires('copyFiles.options.workingDirectory');
    grunt.file.mkdir(grunt.config.get('copyFiles.options.workingDirectory'));
  });
};