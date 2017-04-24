var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: __dirname,

	entry: './react/index.jsx',

    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ],

	module: {
		rules: [
			{
				test: /.jsx?$/,
				use: 'babel-loader',
				include: path.join(__dirname, 'react')
			},
			{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
				// test: /\.scss$/,
				// use: [
				// 	{
				// 		loader: 'style-loader',
				// 		options: {
				// 			sourceMap: true
				// 		}
				// 	},
				// 	{
				// 		loader: 'css-loader?localIdentName=[name]__[local]__[hash:base64:5]',
				// 		options: {
				// 			modules: true,
				// 			importLoaders: 1,
				// 			sourceMap: true
				// 		}
				// 	}, 
				// 	{
				// 		loader: 'sass-loader',
				// 		options: {
				// 			sourceMap: true,
				// 			// data: '@import "' + path.resolve(__dirname, 'static/css/style.scss') + '";',
				// 			includePaths: [path.resolve(__dirname, 'static/')]
				// 		}
				// 	}
				// ]
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'file-loader'
			}
		]
	},

	resolve: {
		modules: ['node_modules', 'static', 'react'],
		extensions: ['.js', '.jsx', '.json', '.scss']
	}
};
