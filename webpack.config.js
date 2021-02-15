const path = require('path')
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
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
			}, {
				test: /\.tsx$/,
				exclude: /(node_modules|bower_components)/,
				use: "babel-loader"
			},
			{
				test: /\.ts$/,
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
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
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
	// plugins: [new HtmlWebpackPlugin({
	// 	title: "Development Mode",
	// 	filename: "public/index.html"
	// })]
}

// module.exports = (env, argv) => {
// 	let dev_config;
// 	if(argv.mode === "development"){
// 		config.watch = true;
// 		const devServer = {
// 			contentBase: path.join(__dirname, 'dist'),
// 			compress: true,
// 			port: 9000,
// 		};

// 		dev_config = {
// 			...config,
// 			devServer
// 		}
// 	}

// 	return dev_config;
// }

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
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
			}, {
				test: /\.tsx$/,
				exclude: /(node_modules|bower_components)/,
				use: "babel-loader"
			},
			{
				test: /\.ts$/,
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
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
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
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
	}
	
	
	// plugins: [new HtmlWebpackPlugin({
	// 	title: "Development Mode",
	// 	filename: "public/index.html"
	// })]
}