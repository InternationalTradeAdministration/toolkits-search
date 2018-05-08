const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const paths = { 
	DIST: path.resolve(__dirname, '../../dist/environmental_solutions'),
	JS: path.resolve(__dirname, '../../src/js'),
	SRC: path.resolve(__dirname, '../../src')
}

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'whatwg-fetch', 
		path.join(paths.JS, 'index.js')
	],
	output: {
		path: paths.DIST,
		filename: 'bundle.js'
	},
	plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: paths.JS,
				use: [
					'babel-loader'
				]
			},
			{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        use: [{
              loader: "style-loader" 
          }, {
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }]
	     }
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		stats: 'errors-only',
		hot: true
	},
	mode: 'development'
}