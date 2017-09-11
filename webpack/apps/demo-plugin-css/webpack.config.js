const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js', // relative path
  output: {
    path: path.resolve(__dirname, 'build'), // should be absolute path
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        // use: ExtractTextPlugin.extract({
        //   use: 'css-loader',
        //   fallback: 'style-loader'
        // })
      }
    ]
  }
  // ,
  // plugins: [new ExtractTextPlugin('style.css')]
};

module.exports = config;
