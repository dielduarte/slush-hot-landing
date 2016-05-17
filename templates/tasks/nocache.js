var gulp = require('gulp');
var CacheBuster = require('gulp-cachebust');

var cachebust = new CacheBuster();

gulp.task('nocache-css', function () {
  return gulp.src('build/assets/css/main.min.css')
    .pipe(cachebust.resources())
    .pipe(gulp.dest('build/assets/styles/'));
});

gulp.task('nocache-vendors-css', function () {
  return gulp.src('build/assets/css/vendors.min.css')
    .pipe(cachebust.resources())
    .pipe(gulp.dest('build/scripts/'));
});

gulp.task('nocache', ['nocache-css', 'nocache-vendors-css'], function () {
  return gulp.src('build/index.html')
    .pipe(cachebust.references())
    .pipe(gulp.dest('build/'));
});
