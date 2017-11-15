const path = require('path');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV !== 'production';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'style.[contenthash].css',
  disable: isDev
});

const config = {
  devtool: isDev ? 'source-map' : false,
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')]
  },
  entry: {
    main: ['./src/renderers/dom.js'],
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'axios',
    ],
  },
  output: {
    path: path.resolve('public', 'bundles'),
    filename: isDev ? '[name].js' : '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          // use style-loader in development
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    extractSass,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.HashedModuleIdsPlugin(),
  ]
};

module.exports = config;
