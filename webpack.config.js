const path = require('path')

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
				}
			]
		}
}

module.exports = (env, argv) => {
	if(argv.mode === "development"){
		config.watch = true;
	}

	return config;
}
