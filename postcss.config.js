/*
 * @Description: postcss配置文件
 * @Author: zhaiyba@yonyou.com
 * @Date: 2019-08-13 15:54:58
 * @LastEditTime: 2019-08-23 14:47:43
 * @LastEditors: zhaiyba@yonyou.com
 */
module.exports = {
    plugins: [
        require('autoprefixer'),
        // require('postcss-px2rem')({remUnit: 100}),
    ]
};