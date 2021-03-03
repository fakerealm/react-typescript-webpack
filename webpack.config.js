const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {HotModuleReplacementPlugin} = require("webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		hot: true
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
				test: /\.(ts|tsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: "babel-loader"
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
				test: /\.(png|jpg|gif)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192,
					}
				}, ],
				type: 'javascript/auto'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: "public/template.html"}),
		new CleanWebpackPlugin(),
		new HotModuleReplacementPlugin()
	],

}
