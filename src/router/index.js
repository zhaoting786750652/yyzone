/*
 * @Description: 路由文件
 * @Author: zhaiyba@yonyou.com
 * @Date: 2019-08-07 14:47:04
 * @LastEditTime: 2019-08-23 14:49:22
 * @LastEditors: zhaiyba@yonyou.com
 */
import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/index.vue'),
    },
    // {
    //     path: '/detail',
    //     name: 'Detail',
    //     component: () => import('../views/detail.vue'),
    // }
  ];

export default routes;