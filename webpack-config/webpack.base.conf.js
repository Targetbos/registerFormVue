const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../build'),
  assets: 'assets/'
}

module.exports={
  externals:{
    paths: PATHS
  },
  entry:{
    index: [`${PATHS.src}/`,`${PATHS.src}/assets/scss/main.scss`]
  },
  resolve: {
    alias: {
    }
  }, 
  module:{
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    },{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loader: {
          scss: [
            "vue-style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {sourceMap: true}
          }, 
          {
            loader: "postcss-loader",
            options: {sourceMap: true, config: {path: 'postcss.config.js'}}
          },
          {
            loader: "sass-loader",
            options: {sourceMap: true}
          }]
          
          
        }
      }
    },{
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: `assets/fonts/`,
        publicPath: '../assets/fonts/'
      }
    },{
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      exclude: /fonts/,
      options: {
        name: '[name].[ext]',
        outputPath: `assets/images/`
      }
    },{
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
          }
        },
        {
          loader: "css-loader",
          options: {sourceMap: true}
        }, 
        {
          loader: "postcss-loader",
          options: {sourceMap: true, config: {path: 'postcss.config.js'}}
        },
        {
          loader: "sass-loader",
          options: {sourceMap: true}
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: `${PATHS.src}/assets/scss/utils/vars.scss`
          },
        }
      ]
    },
  ]
  },
  
  plugins:[
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: '[id].css',

    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.src}/assets/images`, to: `${PATHS.assets}images` },
        { from: `${PATHS.src}/assets/fonts`, to: `${PATHS.assets}fonts` },
        { from: `${PATHS.src}/static`, to: `` }
      ]
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pages/index.html`
    })
  ]
}