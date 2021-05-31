const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [{
			test: /\.(ts|tsx)$/,
			exclude: /(node_modules|bower_components)/,
			use: [{loader: "babel-loader"}, {loader: "ts-loader"}]
		}]
	}
});