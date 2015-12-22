'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');


gulp.task('js', function() {
    return gulp.src('./src/js/special-select.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('./src/js/*.js', ['js']);
});
