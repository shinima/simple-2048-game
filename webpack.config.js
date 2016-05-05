var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: '#eval-source-map',

  entry: [
    'react-hot-loader/patch',
    __dirname + "/app/main.js"
  ],
  module: {
    loaders: [
      {
        test: /\.(css|styl)$/,
        loader: "style!css!stylus"
      },
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel']
      },
      {
        test: /\.pegjs/,
        loader: 'raw'
      }
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules/,
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: "build",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}
