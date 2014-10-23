'use strict';
var fs = require('fs');
var request = require('request');
var url = 'https://raw.github.com/jpillora/gswg-examples/master/README.md';
module.exports = function (grunt) {
  var baz = !!grunt.option('baz');
  console.log('baz is: ' + baz);
  console.log('bar is: ' + grunt.option('bar'));
  console.log('debug is: ' + grunt.option('debug'));
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      target1: 'src/**/*.js'
    },
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
    },
    build: {
      main: {},
      extra: {}
    },
    test: {
      main: {},
      extra: {}
    },
    multifoo: {
      ping: {},
      pong: {}
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
  grunt.registerTask('fooo', 'Task with arguments', function(p1, p2) {
    console.log('first parameter is: ' + p1);
    console.log('second parameter is: ' + p2);
  });
  grunt.registerMultiTask('multifoo', 'Multitask with arguments', function(p1, p2) {
    console.log('target is ' + this.target);
    console.log('first parameter is: ' + p1);
    console.log('second parameter is: ' + p2);
  });
  grunt.registerMultiTask('build', 'Build project', function() {
    console.log('building target ' + this.target + '...');
  });
  grunt.registerMultiTask('test', 'Test project', function() {
    console.log('testing target ' + this.target + '...');
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
  grunt.registerTask('webget', 'Getting file using HTTP', function() {
    var done = this.async();
    request(url, function(err, response, contents) {
      if (err) {
        done(err);
      } else if (response.statusCode !== 200) {
        done(new Error('Not OK'));
      } else {
        grunt.file.write('FILE.md', contents);
        grunt.log.ok('FILE.md successfully created');
        done();
      }
    });
  });
  grunt.registerTask('default', 'Default task', ['build:main', 'test:main']);
  // a new task to make jshint optional
  grunt.registerTask('check', 'Check JavaScript file syntax', function() {
    if (grunt.file.exists('.jshintrc')) {
      grunt.task.run('jshint');
    }
  });
};