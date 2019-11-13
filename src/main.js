/*
 * @Author: zhaiyba@yonyou.com
 * @Date: 2019-08-07 14:28:35
 * @LastEditors: zhaiyba@yonyou.com
 * @LastEditTime: 2019-08-23 17:27:35
 * @Description: 主入口文件
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/';
import store from "./store/"
import VueI18n from 'vue-i18n';
import axios from './config/http';

import App from './App';
import './assets/styles/common';
import lang from './assets/lang/';
import utils from './utils/';

// Vue.prototype.$http = axios;
Vue.prototype.Utils = utils


// 设置路由
Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

// 设置多语言
Vue.use(VueI18n);
let locale = utils.getLanguage();
const i18n = new VueI18n({
    locale,
    messages: lang,
});
document.querySelector('html').setAttribute('lang', locale);

new Vue({
    store,
    router,
    i18n,
    render: h => h(App),
}).$mount('#app');