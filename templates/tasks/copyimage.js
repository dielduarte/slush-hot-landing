var gulp = require('gulp');

gulp.task('copyimage', function () {
  return gulp.src('./app/assets/images/*.*')
    .pipe(gulp.dest('./build/assets/images'));
});
