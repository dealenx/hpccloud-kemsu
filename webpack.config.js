const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const appRules = require('./config/rules-hpccloud.js');
const linterRules = require('./config/rules-linter.js');
const pvwRules = require('./config/rules-pvw.js');
const visualizerRules = require('./config/rules-visualizer.js');
const vtkjsRules = require('./config/rules-vtkjs.js');
const wslinkRules = require('./config/rules-wslink.js');
const simputRules = require('./config/rules-simput.js');

const entry = path.join(__dirname, 'src/app.js');

const plugins = [];

plugins.push(new webpack.HotModuleReplacementPlugin());

plugins.push(
  new CopyWebpackPlugin({
    patterns: [{ from: 'public' }],
  })
);

plugins.push(
  new webpack.DefinePlugin({
    KARMA_TEST_RUNNER: JSON.stringify(false),
  })
);

module.exports = {
  plugins,
  mode: 'development',
  entry,
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'HPCCloud.js',
  },

  module: {
    rules: [
      {
        test: entry,
        loader: 'expose-loader?HPCCloud',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
    ].concat(
      linterRules,
      appRules,
      pvwRules,
      visualizerRules,
      vtkjsRules,
      wslinkRules,
      simputRules
    ),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'PVWStyle/ReactProperties/PropertyPanel.mcss': path.resolve(
        './node_modules/simput/style/PropertyPanel.mcss'
      ),
      PVWStyle: path.join(__dirname, './node_modules/paraviewweb/style'),
      VisualizerStyle: path.join(
        __dirname,
        './node_modules/pvw-visualizer/style'
      ),
      SimputStyle: path.resolve('./node_modules/simput/style'),
      HPCCloudStyle: path.resolve('./style'),
      workflows: path.resolve('./src/workflows'),
    },
  },
  externals: {
    Simput: 'Simput',
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'public/'),
  //   port: 3000,
  //   publicPath: 'http://localhost:3000/dist/',
  //   hotOnly: true,
  // },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    publicPath: 'http://localhost:9999/dist/',
    port: 9999,
    proxy: {
      '/api/*': 'http://localhost:8080',
      '/static/*': 'http://localhost:8080',
    },
    // hotOnly: true,
  },
};
