/*
 * @Description: In User Settings Edit
 * @Author: zhaiyba@yonyou.com
 * @Date: 2019-04-11 16:56:07
 * @LastEditTime: 2019-08-23 14:34:58
 * @LastEditors: zhaiyba@yonyou.com
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./base.js')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = merge(config, {
    devtool: 'cheap-eval-source-map',
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