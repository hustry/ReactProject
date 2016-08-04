var webpack = require('webpack');


module.exports = {

    entry: './src/app.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.jade$/,
                loader: 'jade'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.png$/,
                loader: 'url-loader',
                query: {mimetype: "image/png"}
            }
            /*  or
             * {
             *   test:/\.png$/,
             *   loader:'url-loader?mimetype=image/png'
             * }
             * */

        ]
    }
};
