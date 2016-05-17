var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var gulpif = require('gulp-if');
var minifyCSS = require('gulp-cssnano');

var files = [
];

var styles = [
];

var EXTERNAL_FONTS = [
];

gulp.task('build-vendors', ['build-vendors-css', 'build-vendors-fonts'], function () {
  gulp.src(files)
    .pipe(gulpif(/[.]js$/, concat('vendors.js')))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./build/scripts/'));
});

gulp.task('build-vendors-css', function(){
  gulp.src(styles)
    .pipe(gulpif(/[.]css$/, concat('vendors.css')))
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./build/assets/styles/'));
});


gulp.task('build-vendors-fonts', function(){
  gulp.src(EXTERNAL_FONTS)
    .pipe(gulp.dest('./build/assets/fonts/'));
});













