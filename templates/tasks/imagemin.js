var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imagemin', function () {
  return gulp.src('./app/assets/images/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/assets/images'));
});
