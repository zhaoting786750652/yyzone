/*
 * @Description: In User Settings Edit
 * @Author: zhaiyba@yonyou.com
 * @Date: 2019-04-11 16:56:07
 * @LastEditTime: 2019-08-27 19:51:37
 * @LastEditors: zhaiyba@yonyou.com
 */
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var config = require('./base.js')
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
var ImageminPlugin = require('imagemin-webpack-plugin').default

config.plugins.push(
    new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        optipng: {
            optimizationLevel: 6,
        },
        pngquant: {
            quality: '95-100'
        }
    }),
)

module.exports = merge(config, {
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new ParallelUglifyPlugin({
                cacheDir: '.cache/',
                warnings: false,
                uglifyJS: {
                    output: {
                        comments: false,
                        beautify: false
                    },
                    compress: {
                        drop_console: true,
                        collapse_vars: true,
                        reduce_vars: true
                    }
                }
            }),
        ],
        runtimeChunk: {
            'name': 'manifest',
        },
        splitChunks: {
            chunks: 'all',
            cacheGroups:{
                vendor: {
                    name: 'vendor',
                    chunks: 'async',
                    minChunks: 2,
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true,
                }
            }
        },
    },
})