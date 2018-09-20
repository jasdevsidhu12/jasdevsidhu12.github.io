const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve('src/app/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'src',
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
        stats: 'minimal'
    },
    module: {
        rules: [{
            test: /.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react', 'stage-2']
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
        }]
    }
};