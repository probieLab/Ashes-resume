const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './src/dom_tree/animation_item.js',
        print: './src/animation_timeline/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'My resume'
        })
    ],
    devtool: 'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    output: {
        filename: '[name].bundule.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}