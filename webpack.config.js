const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    about: './src/about.js', 
    contacts: './src/contacts.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template:'./src/index.html', // relative to project root 
      chunks: ['index'],
      filename:'index.html'         // relative to build folder
  })
  ],
  mode: 'development',
  devServer: {
    devMiddleware: {
      index: true,
      publicPath: './public',
      writeToDisk: true,
    },
  },

};