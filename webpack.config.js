var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
	{
		mode: 'development',
		entry: './src.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'jsmask.min.js'
		}
	},
	{
		mode: 'production',
		entry: './src.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'jsmask.min.js'
		},
		optimization: {
			minimize: true,
			minimizer: [new UglifyJsPlugin({
				include: /\.min\.js$/
			})]
		}
	},
];