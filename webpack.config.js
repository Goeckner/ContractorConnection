const path = require('path')
const webpack = require('webpack')

// ExtractTextPlugin moves all the *.css modules into a separate
// CSS file --- so they are longer inlined into the JS bundle.
// This will be faster on load because the JS bundle and
// the compiled CSS file can be loaded in parallel and there's
// less code for the interpreter and smaller DOM operations.
// However, it prevents Hot Module Replacement, so it is
// disabled when we're not in production.
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// HtmlWebpackPlugin creates an index.html file to fetch the
// bundle based on what gets compiled. This is needed to
// dynamically include the generated CSS file in production,
// and other leave out the <link> when we're compiling the
// styles into the bundle for Hot Module Replacement.
const HtmlWebpackPlugin = require('html-webpack-plugin')

// UglifyJSPlugin is a minifier that supports dead code removal.
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

// CompressionPlugin compression the bundle in production so
// they can be served with the Content-Encoding header.
const CompressionPlugin = require('compression-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const getPlugins = () => {
  const plugins = []

  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }))

  plugins.push(new HtmlWebpackPlugin({
    cache: true,
    errors: true,
    inject: 'body',
    template: 'src/client/index.html',
    title: 'Pat\'s Wonderful UI Template',
  }))

  plugins.push(new ExtractTextPlugin({
    filename: 'styles.css',
    disable: !isProd,
  }))

  if (isProd) {
    plugins.push(new UglifyJSPlugin({
      cache: true,
      parallel: true,
      extractComments: true,
    }))
  }

  if (isProd) {
    plugins.push(new CompressionPlugin({
      algorithm: 'gzip',
      asset: '[path].gz[query]',
      cache: true,
      test: /\.jsx?$|\.css$|\.html$/,
    }))
  }

  return plugins
}

module.exports = {
  entry: [
    'babel-polyfill',
    './src/client',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/contractor-connection',
  },
  devtool: !isProd ? 'source-map' : 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: getPlugins(),
  resolve: {
    modules: [ 'node_modules', path.resolve(__dirname, 'src/client') ],
    extensions: [ '.css', '.js', '.jsx' ],
  },
}
