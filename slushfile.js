'use strict';

var gulp     = require('gulp'),
    install  = require('gulp-install'),
    conflict = require('gulp-conflict'),
    _        = require('underscore.string'),
    rename   = require('gulp-rename');


gulp.task('default', function(done) {

    gulp.src(__dirname + '/templates/**')
        .pipe(conflict('./'))
        .pipe(rename(function(file) {
            if (file.basename[0] === '@') {
                file.basename = '.' + file.basename.slice(1);
            }
        }))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('end', function() {
            done();
        });
});
