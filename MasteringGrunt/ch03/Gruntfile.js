'use strict';
var fs = require('fs');
module.exports = function (grunt) {
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
};