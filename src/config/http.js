/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 13:56:24
 * @LastEditTime: 2019-08-23 15:51:07
 * @LastEditors: zhaiyba@yonyou.com
 */
import axios from 'axios';
import Config from './config';

/**
 * @description: 获取后台接口的绝对路径
 * @param {String} url 
 * @return: 
 */
function getUrl(url = ''){
    let env = Config[__ENV__];
    if(!/[http|https]:\/\//gi.test(url)){
        url = url.replace(/^\[(\w+)\]?/g, (reg, key) => {
            return env[key] || '';
        });
    }
    return url;
}

async function getConfig(config){
    config.url = getUrl(config.url)
    return new Promise((reslove, reject) => {
        reslove(config)
    })
}

axios.interceptors.request.use(
    async config => {
        return await getConfig(config)
    },
    error => {
        return Promise.reject(error)
    }
)
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject("err")
    }
)
export default axios