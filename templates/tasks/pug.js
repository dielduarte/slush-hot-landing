var gulp = require('gulp');
var minifyHTML = require('gulp-htmlmin');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');

gulp.task('pug', function () {
  gulp.src('./app/index.pug')
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(minifyHTML())
    .pipe(gulp.dest('./build/'))
});
