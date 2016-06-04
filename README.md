# webpack-extension
Extends https://github.com/antonybudianto/angular2-starter to have Webpack build

[![npm version](https://badge.fury.io/js/%40ngstarter%2Fwebpack-extension.svg)](https://badge.fury.io/js/%40ngstarter%2Fwebpack-extension)

## Getting started
1. Copy `webpack.config.js` in this repo to the root of your starter.

2. Install the extension in your starter
    ```bash
    npm install @ngstarter/webpack-extension --save-dev
    ```

3. Go to `tasks/build.js` in your starter, require the extension
    ```js
    require('@ngstarter/webpack-extension');
    ```

    and then change `build-systemjs` to `build-webpack`
    ```js
    gulp.task('build', function (done) {
        runSequence('test', 'build-webpack', 'build-assets', done);
    });
    ```

4. Done! Try to build it!

## License
MIT
