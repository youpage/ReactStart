import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false, //display a list of all the files bundled
    entry: [
        './src/index' //app entry point - must be last in this list
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', // does nothing, as bundle.js is generated in memory - but, a valid path must exists
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        // optimize the order the files are bundled in, for optimal minification
        new webpack.optimize.OccurenceOrderPlugin(),
        // ability to define variable used by various plugins  
        new webpack.DefinePlugin(GLOBALS),
        // extract css to a separate file
        new ExtractTextPlugin('styles.css'),
        // de-duplicate packages
        new webpack.optimize.DedupePlugin(),
        // minify js
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: { //tell webpack what file types to handle
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] }, //handle JS and use babel to transpile
            { test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap") },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
            { test: /\.ico$/, loader: 'file?name=[name].[ext]' },
            { test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]' }
        ]
    }
};