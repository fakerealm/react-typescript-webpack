const path = require('path')

module.exports = {
  entry: "./build/app.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
  	rules: [{
  		test: /\.m?js$/,
  		exclude: /(node_modules|bower_components)/,
  		use: {
  			loader: 'babel-loader',
  			options: {
  				presets: ['@babel/preset-env'],
				plugins: ["babel-plugin-loop-optimizer"]
  			}
  		}
  	},{
		  test: /\.css$/,
		  exclude: /(node_modules|bower_components)/,
		  use: ["css-loader", "style-loader"]
	  }]
  }

}
