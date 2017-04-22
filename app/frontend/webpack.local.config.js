// var path = require("path")
// var webpack = require('webpack')
// var BundleTracker = require('webpack-bundle-tracker')
// var config = require('./webpack.base.config.js')
// 
// var ip = 'localhost'
// 
// config.devtool = "#eval-source-map"
// 
// config.entry = {
//   Main: [
//     'webpack-dev-server/client?http://' + ip + ':3000',
//     'webpack/hot/only-dev-server',
//     './react/index.jsx'
//   ],
// }
// 
// config.output.publicPath = 'http://' + ip + ':3000' + '/assets/bundles/'
// 
// config.plugins = config.plugins.concat([
//   new webpack.HotModuleReplacementPlugin(),
//   new webpack.NoErrorsPlugin(),
//   new BundleTracker({filename: './webpack-stats-local.json'}),
//   new webpack.DefinePlugin({
//     'process.env': {
//       'NODE_ENV': JSON.stringify('local'),
//     //   'BASE_API_URL': JSON.stringify('https://'+ ip +':8000/api/v1/'),
//   }}),
// ])
// 
// config.module.loaders.push(
//   { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }
// )
// 
// module.exports = config



var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var baseConfig = require('./webpack.base.config');

baseConfig.output = {
	path: path.resolve('./static/bundles/local/'),
	filename: 'bundle.js'
};

var ip = 'localhost'

// baseConfig.debug = true;
baseConfig.devtool = 'source-map';
baseConfig.output.publicPath = 'http://' + ip + ':3000' + '/assets/bundles/';
baseConfig.devServer = {
    publicPath: baseConfig.output.publicPath,
    inline: true,
    historyApiFallback: true,
    hot: true, // must be set for React HMR to work!
    port: 3000
};

baseConfig.entry = [
    'react-hot-loader/patch',
	'webpack-dev-server/client?http://localhost:3000',
	'webpack/hot/only-dev-server',
	'./react/index.jsx'
];

baseConfig.plugins = baseConfig.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({path: __dirname, filename: './webpack-stats-local.json'}),
    // new ExtractTextPlugin('styles.css'),
]);

module.exports = baseConfig;
