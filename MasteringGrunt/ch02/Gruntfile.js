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
    },
    showTargetFiles: {
      // compact format
      target1: {
        src: 'src/{a,b}.js',
        dest: 'build/ab.js'
      },
      // files array format
      target2: {
        files: [
          { src: 'src/{a,b,c}.js', dest: 'build/abc.js' },
          { src: 'src/{x,y,z}.js', dest: 'build/xyz.js' }
        ]
      },
      // files object format
      target3: {
        files: {
          'build/abc.js': 'src/{a,b,c}.js',
          'build/xyz.js': 'src/{x,y,z}.js'
        }
      },
      target4: {
        files: [
          {src: 'src/a.js', dest: 'build/a.min.js'},
          {src: 'src/b.js', dest: 'build/b.min.js'},
          {src: 'src/subdir/c.js', dest: 'build/subdir/c.min.js'},
          {src: 'src/subdir/d.js', dest: 'build/subdir/d.min.js'}
        ]
      },
      // destination expanded
      target5: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: '**/*.js',
            dest: 'build/',
            ext: '.min.js'
          }
        ]
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