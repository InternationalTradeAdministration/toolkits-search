const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require(
  'optimize-css-assets-webpack-plugin'
)
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const cssnano = require('cssnano')

exports.minifyJavaScript = () => ({
  optimization: {
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true })]
  }
})

exports.loadSCSS = () => (
  {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ]
                }
              }
            },
            { loader: 'sass-loader' }
          ]
        }
      ]
    }
  }
)

exports.extractSCSS = () => {
  const plugin = new MiniCssExtractPlugin({
    filename: '[name].css'
  })
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ]
                }
              }
            },
            { loader: 'sass-loader' }
          ]
        }
      ]
    },
    plugins: [plugin]
  }
}

exports.minifyCSS = () => ({
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      },
      canPrint: false
    })
  ]
})
