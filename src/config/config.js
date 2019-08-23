/*
 * @Author: zhaiyba@yonyou.com
 * @Date: 2019-08-07 16:23:30
 * @LastEditors: zhaiyba@yonyou.com
 * @LastEditTime: 2019-08-23 14:51:04
 * @Description: 接口配置文件
 */
module.exports = {
    development: {
        phpApi: 'http://h5.api.chaoke.com:6062',
        javaApi: 'http://123.103.9.204:6058',
    },
    test: {
        phpApi: 'http://h5.api.chaoke.com:6062',
        javaApi: 'http://123.103.9.204:6058',
    },
    prevProduction: {
        phpApi: 'https://h5-api.esn.ren',
        javaApi: 'https://ezone.esn.ren',
    },
    production: {
        phpApi: 'https://h5-api.yonyoucloud.com',
        javaApi: 'https://ezone.yonyoucloud.com',
    }
}