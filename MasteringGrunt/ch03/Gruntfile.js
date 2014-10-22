'use strict';
var fs = require('fs');
module.exports = function (grunt) {
  grunt.registerTask('log-deploy', 'Log deployment information to keep history', function() {
    var message = 'Deployment on ' + new Date();
    fs.appendFileSync('deploy.log', message + '\n');
    grunt.log.writeln('Appended "' + message + '"');
  });
};