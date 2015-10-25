var vue = require('vue-loader')
var webpack = require('webpack')
module.exports = {
  entry: {
    app: './app/app.js'
  },
  output: {
    path: './app/build',
    publicPath: "app/build/",
    filename: 'bundle.js'
  },
  target: 'electron', // let the webpack support electron e.g.(ignore 'ipc'/'remote'...)
  module: {
    loaders: [{
      test: /\.vue/,
      loader: 'vue'
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    }, {
      test: /\.(gif|png|jpg)$/,
      loader: 'file-loader'
    }, {
      test: /\.woff|.woff2$/,
      loader: "file-loader"
    }, {
      test: /\.ttf|eot|svg$/,
      loader: "file-loader"
    }, {
      test: /\.js$/,
      exclude: /node_modules\//,
      loader: 'babel?optional[]=runtime&loose=all'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({})
  ]
}
if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
