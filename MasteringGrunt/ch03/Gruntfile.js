'use strict';
var fs = require('fs');
module.exports = function (grunt) {
  grunt.initConfig({
    copy: {
      target1: {
        files: {
          'dest/file1.txt': 'src/file1.txt',
          'dest/file2.txt': 'src/file2.txt'
        }
      },
      target2: {
        files: {
          'dest/file3.txt': 'src/file3.txt',
          'dest/file4.txt': 'src/file4.txt'
        }
      }
    }
  });
  grunt.registerTask('log-deploy', 'Log deployment information to keep history', function() {
    var message = 'Deployment on ' + new Date();
    fs.appendFileSync('deploy.log', message + '\n');
    grunt.log.writeln('Appended "' + message + '"');
  });
  grunt.registerTask('foo', 'Sample foo task', function() {
    console.log('My task "%s" has arguments %j', this.name, this.args);
  });
  grunt.registerTask('build', 'Build project', function() {
    console.log('building...');
  });
  grunt.registerTask('test', 'Test project', function() {
    console.log('testing...');
  });
  grunt.registerTask('upload', 'Upload project', function() {
    console.log('uploading...');
  });
  grunt.registerTask('deploy', 'Deploy project', ['build', 'test', 'upload']);
  grunt.registerMultiTask('copy', 'Copy files', function() {
    this.files.forEach(function(file) {
      grunt.file.copy(file.src, file.dest);
    });
    grunt.log.writeln('Copied ' + this.files.length + ' files');
  });
};