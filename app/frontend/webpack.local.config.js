
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
