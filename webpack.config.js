const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',

  entry: [ 'babel-polyfill', './src/main.jsx' ],

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js(x)?/,
        include: path.join(__dirname, 'src'),
      },
    ],
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/contractor-connection',
  },

  plugins: [ new Dotenv() ],

  resolve: {
    extensions: [ '.js', '.jsx' ],
  },
}
