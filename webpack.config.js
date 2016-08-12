

// Use any JavaScript you want. It¡¯s just a node.js module

var path = require('path');

module.exports = {
    entry: {
        BootStrap:__dirname + '/src/BootStrap_Componet/app.js',
        Github:__dirname + '/src/Github_Profile/app.js',
        Quiz:__dirname+'/src/Quiz/index.js'
    },
    output: {
        path: './build',
        filename: '[name]_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
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
        ]
    }
};
