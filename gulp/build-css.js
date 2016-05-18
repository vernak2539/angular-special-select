'use strict';

var stylus = require('gulp-stylus');

module.exports = function(workflow, gulp, $, config) {
    workflow.subtask('build:css', function() {
        return gulp.src(config.dirs.src.styles)
            .pipe(stylus({
                compress: config.args.optimizeCss
            }))
            .pipe(gulp.dest(config.dirs.dist.styles));
    });
};
