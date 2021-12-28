const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ImageMinPlugin = require('image-min-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

const optimization = () => {
  const configObj = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    configObj.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return configObj
}

const plugins = () => {
  const basePlugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: `./css/${filename('css')}`
    }),
    // new CopyWebpackPlugin({
    //   patterns: [{
    //     from: path.resolve(__dirname, 'src/assets'),
    //     to: path.resolve(__dirname, 'dist/assets')
    //   }, ]
    // }),
  ]

  if (isProd) {
    basePlugins.push(
      new ImageMinPlugin({
        bail: false, // Ignore errors on corrupted images
        cache: true,
        imageminOptions: {
          // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them

          // Lossless optimization with custom option
          // Feel free to experiment with options for better result for you
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
            [
              "svgo",
              {
                plugins: [{
                  removeViewBox: false
                }]
              }
            ]
          ]
        }
      })
    )
  }

  return basePlugins
}


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
    filename: `./${filename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8000,
  },
  optimization: optimization(),
  plugins: plugins(),
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [{
        test: /\.s[ac]ss$/i,
        use: [{
            loader: MiniCSSExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/'
              },
            }
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html/i,
        use: {
          loader: 'html-loader',
          options: {
            sources: false
          }
        }
      },
      // {
      //   test: /\.(?:|gif|png|jpg|jpeg|svg)$/i,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: `./assets/img/${filename('[ext]')}`
      //     }
      //   }
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  }
}