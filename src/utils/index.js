/*
 * @Author: zhaiyba@yonyou.com
 * @Date: 2019-08-23 15:40:35
 * @LastEditors: zhaiyba@yonyou.com
 * @LastEditTime: 2019-08-23 16:34:56
 * @Description: 工具类
 */

let Utils = {
    /**
     * @description: 获取当前语言
     * @param {type} 
     * @return: {String} 返回当前语言
     */
    getLanguage(){
        let navigator = window.navigator,
            lang = (navigator.userAgent.split("youZoneLanguage=")[1] || navigator.language).toLocaleLowerCase();
        if(/^en/.test(lang)){
            lang = "en";
        } else if(/^tw/.test(lang)){
            lang = 'zh_tw';
        } else{
            lang = 'zh_cn';
        }
        return lang
    },

    /**
     * @description: 可以按照指定长度和基数生成唯一的UUID
     * @param {int} len 生成长度 
     * @param {int} radix 基数
     * @return: {String} UUID
     * DEMO：uuid()、uuid(10)、uuid(10, 16)
     */   
    uuid(len, radix) {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        let uuid = [], i;
        radix = radix || chars.length;
    
        if(len){
            for(i = 0; i < len; i++){
                uuid[i] = chars[0 | Math.random()*radix];
            }
        } else{
            let r;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            for(i = 0; i < 36; i++){
                if (!uuid[i]){
                    r = 0 | Math.random()*16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    },
};

export default Utils;
