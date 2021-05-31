const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

const { HotModuleReplacementPlugin } = require("webpack");
const forkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		port: 3000,
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		hot: true
	},
	module: {
		rules: [{
			test: /\.(ts|tsx)$/,
			exclude: /(node_modules|bower_components)/,
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-typescript"]
			}
		}],
	},
	plugins: [
		new HotModuleReplacementPlugin(),
		new forkTsCheckerWebpackPlugin()
	]

});