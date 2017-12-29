var path = require('path');
var _root = path.resolve(__dirname, '.');

function root(args){
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
          } , 'angular2-template-loader'
        ],
        exclude: [
          'node_modules'
        ]
      },
      {
        test: /\.ts$/,
        exclude: [
          /node_modules/,
          /\.spec\.ts$/,
        ],
        loader: 'istanbul-instrumenter-loader',
        options: {
          esModules: true
        },
        enforce: 'post'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      },
      {
        test: /\.css$/,
        exclude: root('.', 'app'),
        loader: 'null-loader'
      },
      {
        test: /\.css$/,
        include: root('.', 'app'),
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#20357
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/, 
      root(__dirname, './client')
    )
  ]
}