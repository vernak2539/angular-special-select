'use strict';

var path = require('path');

function addCwd(relativePath) {
    return path.join(process.cwd(), relativePath);
}

module.exports = {
    dirs: {
        src: {
            app: './src/**/*.js',
            gulp: './gulp/**/*.js',
            tests: './tests/**/*.js',
            styles: './src/styles/**/*.styl'
        },
        dist: {
            folder: './dist',
            styles: './dist/styles'
        }
    },
    karma: {
        dev: addCwd('./gulp/config/karma.conf.js'),
        ci: addCwd('./gulp/config/karma.conf-ci.js')
    },
    webpack: {
        config: addCwd('./gulp/config/webpack.config.js')
    }
};
