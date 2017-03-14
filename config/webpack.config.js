var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var calc = require('postcss-calc');
var cssnext = require('cssnext');
var autoprefixer = require('autoprefixer');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: [
    'babel-polyfill',
    './src/scripts/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'scripts/bundle.js',
  },
  resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
    },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('/styles/styles.css', {
        disabled: process.env.NODE_ENV === 'dev'
    }),
    new webpack.DefinePlugin({
        __DEBUG__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'dev'))
    }),
  ],

  module: {
    loaders: [
    // js
    {
      test: /\.(js)?$/,
      loaders: [
          'react-hot',
          'babel'
      ],
      exclude: /node_modules/
    },
    // CSS
     {
        test: /\.(css)$/,
        loader: ExtractTextPlugin.extract(
            'style',
            'css!postcss', {
                publicPath: '../'
            }
        )
    },
    // HTML
    {
        test: /\.(html)$/,
        exclude: /node_modules/,
        loader: 'file?name=[path][name].[ext]&context=./src'
    },
    // image
    {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[path][hash].[ext]&context=./src'
        ]
    }
    ]
  },
  postcss: function () {
        return [cssnext, precss, autoprefixer, calc];
    }
};
