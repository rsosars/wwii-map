const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	plugins: [new HtmlWebpackPlugin({
		template: "./src/static/template.html"
	})],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				],
				exclude: /node_modules/,
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: false,
		port: 3000
	}
});