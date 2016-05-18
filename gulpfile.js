'use strict';

var gulp     = require('gulp');
var workflow = require('gulp-workflow');

workflow
    .load(gulp)
    .task('release', 'Generate dist files', [['clean', 'lint'], ['build:js', 'build:css'], 'karma'], {
        optimizeCss: 'Optimize CSS'
    })
    .task('lint', 'Run JSHint', ['jshint'])
    .task('tests', 'Run unit tests', [['clean', 'lint'], 'build:js', 'karma'], {
        ci: 'For use on TravisCI with SauceLabs'
    });
