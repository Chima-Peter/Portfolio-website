const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html',
          inject: true,
          chunks: ['index'],
        }),
      ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]
    },
};
