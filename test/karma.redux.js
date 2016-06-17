/* eslint-disable */
var wpConfig = require('./webpack.test.js');
var karmaConfig = require('./karma.base.js');

wpConfig.entry = {
  'tests.redux.js': './test/tests.redux.js',
};

karmaConfig.webpack = wpConfig;

karmaConfig.files = [
  '../node_modules/babel-polyfill/dist/polyfill.js',
  'tests.redux.js'
];

karmaConfig.preprocessors = {
  'tests.redux.js': ['webpack', 'sourcemap'],
};

karmaConfig.coverageReporters = {
  reporters: [
    {
      type: 'html',
      dir: 'coverage/redux',
      subdir: 'html'
    }, {
      type: 'lcovonly',
      dir: 'coverage/redux',
      subdir: 'lcov'
    },
  ]
};

module.exports = function(config) {
  config.set(karmaConfig);
};

