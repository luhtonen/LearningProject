module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.config('coffee', {
    app : {
      options: {
        bare: false
      },
      files: {
        '.tmp/compiled.js': ['coffeescript/app.coffee',
                            'coffeescript/factories/*.coffee',
                            'coffeescript/controllers/*.coffee']
      }
    }
  });
};