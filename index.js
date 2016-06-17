var gulp = require('gulp');
var runSequence = require('run-sequence');
var webpack = require('webpack-stream');

var defaultWebpackConfig = require('./webpack.config.js');

function WebpackExtension(config, webpackConfig) {
    webpackConfig = webpackConfig || defaultWebpackConfig;

    gulp.task('build-webpack', function (done) {
        runSequence('tsc-app', buildWebpack);

        function buildWebpack() {
            gulp.src(config.tmpApp + 'main.js')
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest(config.tmpApp))
            .on('finish', done);
        }
    });
}

module.exports = WebpackExtension;
