const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const paths = { 
	DIST: path.resolve(__dirname, '../../dist/oil_and_gas'),
	JS: path.resolve(__dirname, '../../src/js'),
	SRC: path.resolve(__dirname, '../../src')
}

module.exports = {
	devtool: 'source-map',
	entry: [
		'whatwg-fetch', 
		path.join(paths.JS, 'index.js')
	],
	output: {
		path: paths.DIST,
		filename: 'bundle.js'
	},
	plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.NamedModulesPlugin(),
    new UglifyJSPlugin({ sourceMap: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
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
	mode: 'production'
}