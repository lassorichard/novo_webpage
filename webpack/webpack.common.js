const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../source/js/main.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      minify: false,
      scriptLoading: 'defer',
      filename: 'index.html',
      template: Path.resolve(__dirname, '../source/index.html'),
    }),
    new HtmlWebpackPlugin({
      minify: false,
      scriptLoading: 'defer',
      filename: 'event.html',
      template: Path.resolve(__dirname, '../source/event.html'),
    }),
    new HtmlWebpackPlugin({
      minify: false,
      scriptLoading: 'defer',
      filename: 'media.html',
      template: Path.resolve(__dirname, '../source/media.html'),
    }),
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../source'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
};
