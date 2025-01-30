const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'none',
  entry: './src/js/index.js',
  devServer: {
    static: './docs',
  },
  plugins: [
      
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/index.html'
        })
    ],
    output: {
      filename: 'js/main.js',
      path: path.resolve(__dirname, 'docs'),
    },
  
};