var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });
});

gulp.task('refresh', function () {
  browserSync.reload();
});
