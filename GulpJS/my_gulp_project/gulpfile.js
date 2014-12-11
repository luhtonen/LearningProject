var gulp = require('gulp'),
  sass = require('gulp-ruby-sass');

// Define path to sass
var sassRoot = 'build/sass/';

// Gulp task
gulp.task('sass-to-css', function() {
  return gulp.src(sassRoot + 'main.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});