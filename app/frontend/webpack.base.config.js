// var path = require("path")
// var webpack = require('webpack')
// 
// module.exports = {
//   context: __dirname,
// 
//   // entry: {
//   //   // Add as many entry points as you have container-react-components here
//   //   Main: './react/index.jsx',
//   //   vendors: ['react'],
//   // },
//   entry: './react/index.jsx',
// 
//   output: {
//       path: path.resolve('./static/bundles/local/'),
//       filename: "[name]-[hash].js"
//   },
// 
//   externals: [
//   ], // add all vendor libs
// 
//   plugins: [
//     new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
//   ], // add all common plugins here
// 
//   module: {
//     loaders: [] // add all common loaders here
//   },
// 
//   resolve: {
//     modulesDirectories: ['node_modules', 'bower_components'],
//     extensions: ['', '.js', '.jsx']
//   },
// }


var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: __dirname,

	entry: './react/index.jsx',
    // entry: {
    //     // Add as many entry points as you have container-react-components here
    //     Main: './react/index.jsx',
    //     vendors: ['react'],
    // },

	plugins: [],

	module: {
		rules: [
			{
				test: /.jsx?$/,
				use: 'babel-loader',
				include: path.join(__dirname, 'react')
			},
			// {
			// 	test: /\.scss$/,
			// 	use: [
			// 		{
			// 			loader: 'style-loader',
			// 			options: {
			// 				sourceMap: true
			// 			}
			// 		},
			// 		{
			// 			loader: 'css-loader?localIdentName=[name]__[local]__[hash:base64:5]',
			// 			options: {
			// 				modules: true,
			// 				importLoaders: 1,
			// 				sourceMap: true
			// 			}
			// 		}, 
			// 		{
			// 			loader: 'sass-loader',
			// 			options: {
			// 				sourceMap: true,
			// 				data: '@import "' + path.resolve(__dirname, 'src/common/style.scss') + '";',
			// 				includePaths: [path.resolve(__dirname, 'src/')]
			// 			}
			// 		}
			// 	]
			// },
			// {
			// 	test: /\.(png|jpg)$/,
			// 	loader: 'file-loader'
			// }
		]
	},

	resolve: {
		modules: ['node_modules', 'src'],
		extensions: ['.js', '.jsx', '.json', '.scss']
	}
};
