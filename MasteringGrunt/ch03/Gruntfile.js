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
};