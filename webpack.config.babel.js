import { startCase } from 'lodash'

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const parts = require('./webpack.parts')

const sites = [
  'civil_nuclear',
  'environmental_solutions',
  'next_gen',
  'oil_and_gas',
  'renewable_energy',
  'smart_grid'
]

const entries = {}

sites.forEach((site) => {
  entries[site] = [
    'babel-polyfill',
    'whatwg-fetch',
    path.resolve(__dirname, `src/js/entries/${site}.js`)
  ]
})

const pages = sites.map((site) => {
  return new HtmlWebpackPlugin({
    template: './src/html/index.html',
    filename: `${site}.html`,
    toolkit_name: site,
    title: `${startCase(site)} Toolkit Search`,
    chunks: [site]
  })
})

const commonConfig = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([{
      from: './sites/index.html',
      to: 'index.html'
    }]),
    ...pages
  ]
}

const productionConfig = merge([
  parts.minifyJavaScript(),
  parts.extractSCSS(),
  parts.minifyCSS()
])

const developmentConfig = merge([
  {
    devtool: 'inline-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  },
  parts.loadSCSS()
])

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, {mode})
  }

  return merge(commonConfig, developmentConfig, {mode})
}
