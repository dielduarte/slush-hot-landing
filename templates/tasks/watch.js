var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('app/assets/styles/**/*.scss', ['css', 'refresh']);
  gulp.watch('app/**/*.pug', ['pug', 'refresh']);
});
