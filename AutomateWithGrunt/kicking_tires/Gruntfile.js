module.exports = function(grunt){
  grunt.registerTask('default', function() {
    grunt.log.writeln('Hello from Grunt.');
  });
  grunt.registerTask('greet', function(name) {
    grunt.log.writeln('Hi there, ' + name);
  });
  grunt.registerTask('addNumbers', function(first, second) {
    if (isNaN(Number(first))) {
      grunt.warn('The first argument must be a number.');
    }
    var answer = Number(first) + Number(second);
    grunt.log.writeln(first + ' + ' + second + ' is ' + answer);
  });
}