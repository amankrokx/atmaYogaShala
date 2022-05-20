const path = require('path');

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
  //devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [

  ],
  mode: 'production',
  devServer: {
    devMiddleware: {
      index: true,
      publicPath: './public',
      writeToDisk: false,
    },
  },
};