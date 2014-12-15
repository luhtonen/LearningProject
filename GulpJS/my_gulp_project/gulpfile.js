var gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  prefix = require('gulp-autoprefixer');

// Define path to sass
var sassRoot = 'build/sass/';

// Gulp task
gulp.task('sass-to-css', function() {
  return gulp.src(sassRoot + 'main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(prefix('last 3 version'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/css'));
});