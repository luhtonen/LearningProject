module.exports = function(grunt){
  grunt.registerTask('default', 'Default Grunt task', function() {
    grunt.log.writeln('Hello from Grunt.');
  });
  grunt.registerTask('greet', 'Have grunt greet with the name', function(name) {
    grunt.log.writeln('Hi there, ' + name);
  });
  grunt.registerTask('addNumbers', 'Add 2 numbers given as parameters', function(first, second) {
    if (isNaN(Number(first))) {
      grunt.warn('The first argument must be a number.');
    }
    var answer = Number(first) + Number(second);
    grunt.log.writeln(first + ' + ' + second + ' is ' + answer);
  });
  grunt.registerTask('all', ['default', 'greet:Edu', 'addNumbers:2:3']);
  grunt.registerTask('praise', 'Have Grunt say nice things about you.', function() {
    var praise = [
      "You're awesome.",
      "You're the best developer ever!",
      "You are extremely attractive.",
      "Everyone loves you!"
    ];
    var pick = praise[(Math.floor(Math.random() * praise.length))];
    grunt.log.writeln(pick);
  });
};