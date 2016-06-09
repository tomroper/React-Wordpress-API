var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        main: './src/main.jsx',
    },
    output: {
        filename: '[name].js',
        publicPath: '/build/',
        path: path.join(__dirname, 'build/')
    },
    devtool: '#source-map',


    devServer: {
      watch:true,
      inline: true,
      host: '0.0.0.0',
      port: '3000',
      stats: { colors: true },
      watchOptions: {
            aggregateTimeout: 300,
            poll: 5000
    },
      historyApiFallback: true
    },
    module: {
         loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style', 'css', 'sass']
            },
            { test: /\.png$/, loader: "url-loader?limit=100000" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
}
