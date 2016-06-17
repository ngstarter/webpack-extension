# webpack-extension
Extends https://github.com/antonybudianto/angular2-starter to have Webpack build

[![npm version](https://badge.fury.io/js/%40ngstarter%2Fwebpack-extension.svg)](https://badge.fury.io/js/%40ngstarter%2Fwebpack-extension)

## Getting started
1. Copy `webpack.config.js` in this repo to the root of your starter.

2. Install webpack-stream and the extension in your starter
    ```bash
    npm install webpack-stream @ngstarter/webpack-extension --save
    ```

3. Go to `tasks/build.js` in your starter, require the extension
    ```js
    // Get gulp config
    var config = require('../config')();

    // Load extension with config
    require('@ngstarter/webpack-extension')(config);
    ```

    and then change `build-systemjs` to `build-webpack`
    ```js
    gulp.task('build', function (done) {
        runSequence('test', 'build-webpack', 'build-assets', done);
    });
    ```

4. Done! Try to build it!

## API
### Use own webpack config
```js
// Get gulp config
var config = require('../config')();

// Get webpack config
var webpackConfig = require('../webpack/webpack.config.js');

// Load extension with config and webpackConfig
require('@ngstarter/webpack-extension')(config, webpackConfig);
```

## License
MIT
