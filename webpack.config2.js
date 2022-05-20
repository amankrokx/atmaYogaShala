const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    about: './src/about.js', 
    contacts: './src/contacts.js'
  },
  output: {
    filename: '[name].[hash:20].js',
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
    new HtmlWebpackPlugin({
        template: './src/about.html',
        inject: true,
        chunks: ['about'],
        filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/contacts.html',
        inject: true,
        chunks: ['contacts'],
        filename: 'contacts.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
        chunks: ['index'],
        filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[id].[contenthash].css"
    })
  ],
  mode: 'production',
  devServer: {
    devMiddleware: {
      index: true,
      publicPath: './public',
      writeToDisk: true,
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin({})
    ]
}
};