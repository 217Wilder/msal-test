var path = require("path");
var webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  bundles: path.resolve(__dirname, 'dist'),
  node: path.resolve(__dirname, 'node_modules')
}

var config = {
  mode: 'development',
  entry: {
    'msal': [PATHS.entryPoint],
    'msal.min': [PATHS.entryPoint]
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      sourceMap: true,
      include: /\.min\.js$/
    })]
  },
  output: {
    path: PATHS.bundles,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'Msal',
    umdNamedDefine: true
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: 'source-map',
  module: {

    rules: [{
        test: /\.ts|\.tsx$/,
        loader: "awesome-typescript-loader",
        include: __dirname,
        exclude: PATHS.node
      }

    ]

  }
}

module.exports = config;
