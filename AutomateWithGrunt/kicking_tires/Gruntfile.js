module.exports = function(grunt){
  grunt.registerTask('default', function() {
    grunt.log.writeln('Hello from Grunt.');
  });
  grunt.registerTask('greet', function(name) {
    grunt.log.writeln('Hi there, ' + name);
  });
}