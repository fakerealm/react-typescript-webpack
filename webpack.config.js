const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const forkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const typescriptBaseConfig = {
	test: /\.(ts|tsx)$/,
	exclude: /(node_modules|bower_components)/,
};

const typescriptProductionConfig = {
	...typescriptBaseConfig,
	use: [{
		loader: "babel-loader"
	}, {
		loader: "ts-loader"
	}]
}

const typescriptDevelopmentConfig = {
	...typescriptBaseConfig,
	use: {
		loader: "babel-loader",
		options: {
			presets: ["@babel/preset-typescript"]
		}
	}

};


const config = {
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
		new HtmlWebpackPlugin({
			template: "public/template.html"
		}),
		new CleanWebpackPlugin(),
		new HotModuleReplacementPlugin()
	],

}


module.exports = (env, argv) => {
	if (argv.mode === "development") {
		config.module.rules.push(typescriptDevelopmentConfig);
		config.plugins.push(new forkTsCheckerWebpackPlugin);
	}

	if (argv.mode === "production") config.module.rules.push(typescriptProductionConfig);

	return config;
}
