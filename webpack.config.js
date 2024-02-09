const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

console.log(__dirname);
console.log(path.resolve(__dirname, 'dist'));

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  plugins: [new HtmlWebpackPlugin()],
};