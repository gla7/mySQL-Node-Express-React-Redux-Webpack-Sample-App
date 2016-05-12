var webpack = require('webpack');

module.exports = {
	entry: [
		'./client/client.js',
		],
	output: {
		path: require('path').resolve('./dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}