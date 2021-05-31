const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "../", 'dist'),
		filename: 'app.bundle.js'
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					}
				}
			},
			{
				test: /\.css$/,
				exclude: /(node_modules|bower_components)/,
				use: ["css-loader", "style-loader"]
			}, {
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpg|gif|jpeg|mp4)$/i,
				type: "asset/resource"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/template.html"
		}),
		new CleanWebpackPlugin(),
		new HotModuleReplacementPlugin()
	],
}