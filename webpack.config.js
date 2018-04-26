const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const paths = { 
	DIST: path.resolve(__dirname, 'dist'),
	JS: path.resolve(__dirname, 'src/js'),
	SRC: path.resolve(__dirname, 'src')
}

module.exports = {
	entry: ['whatwg-fetch', path.join(paths.JS, 'index.js')],
	output: {
		path: paths.DIST,
		filename: 'bundle.js'
	},
	plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin('bundle.css'),
    new UglifyJsPlugin()
  ],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src/js'),
				use: [
					'babel-loader'
				]
			},
			{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      }
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		stats: "errors-only"
	}
}