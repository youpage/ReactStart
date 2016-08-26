import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev'; //use webpack dev config
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, { //configure express, use compiled webpack.dev configuration
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler)); //configure express

app.get('*', function(req, res) { //what files will express serve?
  res.sendFile(path.join( __dirname, '../src/index.html')); //index.html for all(*) request
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
