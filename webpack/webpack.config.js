
// Define node build in module for path.
const PATH = require('path');
// Define css plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Define Html plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/scripts/index.js", // Define entry point or input point
	output: {
		filename: "bundle.js", // define your output file
		path: PATH.resolve(__dirname, "dist"), // create a output folder
	},
	mode: "development", // Define development / production mode
	/** Development Server */
	devServer: {
		port: 2222,
		open: true,
		compress: true,
	},
	module: {
		rules: [
			{
				/** Each loader is object */

				// Babel Loader
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					/** Option configuration if has */
					options: {
						presets: ["@babel/preset-env"],
						/**
						 * If you have any plugin to use with loader define it here
						 * plugins:[
						 *         @babel/plugin-transform-react-jsx-self,
						 *         @babel/plugin-transform-react-jsx-self,
						 * ]
						 */
					},
				},
			},
			{
				// Css loader
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.html$/i,
				use: "html-loader",
			},
		],
	},
	plugins: [
		// Create Instance of plugin
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
};

 
 

