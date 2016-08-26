import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false, //display a list of all the files bundled
    entry: [
        'webpack-hot-middleware/client?reload=true', //update code without full reload in the browser
        './src/index' //app entry point - must be last in this list
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', // does nothing, as bundle.js is generated in memory - but, a valid path must exists
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //replace modules without a full browser refresh
        new webpack.NoErrorsPlugin() //keep errors from breaking hot-reloading
    ],
    module: { //tell webpack what file types to handle
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] }, //handle JS and use babel to transpile
            { test: /(\.css)$/, loaders: ['style', 'css'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    }
};