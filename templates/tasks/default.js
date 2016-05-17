var gulp = require('gulp');

// Taks default gulp!
gulp.task('default', function () {
  gulp.start('dev');
});

//task for build
gulp.task('build', [
  'pug',
  'copyimage',
  'css',
  'build-vendors'
]);

//task for developer
gulp.task('dev', [
  'build',
  'watch',
  'browser-sync'
]);

//task for prepare deploy
gulp.task('production', [
  'build',
  'imagemin'
]);
