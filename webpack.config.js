const webpack = require('webpack');
const path = require('path');
require("babel-core/register");
require("babel-polyfill");

module.exports = {
    entry: ['babel-polyfill', path.resolve('src/app/index.jsx')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist',
        filename: 'bundle.min.js'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devtool: 'source-map',
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 8080,
        hot: true,
        inline: true,
        stats: 'minimal',
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react', 'stage-0']
                },
            },
            exclude: [/node_modules/]
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }],
            exclude: [/node_modules/]
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "file-loader?name=/public/icons/[name].[ext]",
            options: {
                outputPath: 'images',
              },
            exclude: [/node_modules/]
        }]
    }
};