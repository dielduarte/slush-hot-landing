var gulp = require('gulp');
var minifyCSS = require('gulp-cssnano');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cssGlobbing = require('gulp-css-globbing');
var cmq = require('gulp-merge-media-queries');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var  path = require('path');

gulp.task('css', function () {
  gulp.src('./app/assets/styles/main.scss')
    .pipe(plumber())
    .pipe(cssGlobbing({
      extensions: ['.scss', '.css', '.sass']
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['not ie <= 8'],
      cascade: false
    }))
    .pipe(concat('main.css'))
    .pipe(cmq())
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/assets/styles'));
});
