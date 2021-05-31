const webpackDevConfig = require("./webpack/webpack.dev");
const webpackProdConfig = require("./webpack/webpack.prod");

module.exports = (env, argv) => {
	if (argv.mode === "development") return webpackDevConfig;

	else if(argv.mode === "production") return webpackProdConfig;
}
