var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../../gulp.config')();
var webpack = require('webpack-stream');

gulp.task('build-webpack', function (done) {
    runSequence('tsc-app', buildWebpack);

    function buildWebpack() {
        gulp.src(config.tmp + config.app + 'main.js')
        .pipe(webpack(require('../../webpack.config.js')))
        .pipe(gulp.dest(config.tmp + config.app))
        .on('finish', done);
    }
});
