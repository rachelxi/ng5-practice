const path = require('path');
const _root = path.resolve(__dirname, '.');

function root(args){
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const generalStyles = new ExtractTextPlugin('style.css');

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    'polyfills': './app/polyfills.ts',
    'vendor': './app/vendor.ts',
    'app': './app/main.ts'
  },

  output: {
    path: root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

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
            options: { configFileName: root('.', 'tsconfig.json') }
          } , 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: root('.', 'app'),
        loader: ExtractTextPlugin.extract({ 
          fallback: 'style-loader', 
          use: 'css-loader' 
        })
      },
      {
        test: /\.css$/,
        include: root('.', 'app'),
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        use: generalStyles.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  plugins: [
    generalStyles,

    // Workaround for angular/angular#20357
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/, 
      root(__dirname, './client')
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),

    new HtmlWebpackPlugin({
      template: './index.html'
    }),

    new UglifyJsPlugin()
  ]
};