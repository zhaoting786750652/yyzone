## 说明
* webpack4 + vue + vue-router + vuex + axios 进行快速开发的一个DEMO
* 支持多语言
* 适配方式是 vw + rem方案，设计稿为750，业务里直接书写px即可，自动转化为rem;

## 开发环境
1. npm install
2. npm run dev
3. 浏览器访问：http://localhost:8080/#/

## 测试环境
1. npm run test-build


## 预发布环境
1. npm run prev-build

## 生产环境
1. npm run prod-build

## 目录结构说明
```
.
├── .babelrc                                    # babel配置文件
├── package.json
├── postcss.config.js
├── readMe.md
├── src
│   ├── App.vue                                 # 入口
│   ├── assets                                  # 静态资源目录(此目录下的文件参与打包、业务)
│   │   ├── font                                # 字体
│   │   ├── images                              # 图片
│   │   ├── lang                                # 多语言目录
│   │   │   ├── en.js                           # 英文
│   │   │   ├── index.js                        
│   │   │   ├── zh_cn.js                        # 简体中文
│   │   │   └── zh_tw.js                        # 繁体中文
│   │   └── styles                              # 全局样式
│   │       ├── common.css                      # 全局公共样式
│   │       └── global.less                     # 全局less变量
│   ├── components                              # 组件目录
│   │   ├── business                            # 业务组件目录
│   │   └── common                              # 公共组件目录
│   ├── config
│   │   ├── config.js                           # 域名配置
│   │   └── http.js                             # axios拦截器
│   ├── main.js                                 # 主入口文件
│   ├── router                                  # 路由配置目录
│   │   └── index.js
│   ├── static                                  # 不参与业务的静态文件目录(打包的时候，整个目录直接复制到打包后的目录，此目录一般存放第三方文件）
│   │   ├── SDK                                 
│   │   │   └── esn.min.js                      # 友空间bridge SDK
│   │   └── styles
│   │       └── normalize.css                   # 全局重置样式
│   ├── store                                   # 状态管理目录
│   │   └── index.js
│   ├── template                                # 模板文件
│   │   └── index.html
│   ├── utils                                   # 工具目录
│   │   └── index.js
│   └── views                                   # 路由文件
│       ├── detail.vue
│       └── index.vue
└── webpack                                     # webpack配置目录
    ├── base.js
    ├── dev.js
    ├── preview.js
    ├── production.js
    └── test.js
```

## 异步请求
* API: https://github.com/axios/axios
* 调用方式: 
```
this.$http.get('[phpApi]/announce/getInfo', {
    params: {
        id: 190
    }
}).then(response => {
    console.log(response)}
).catch(error => {
    console.log(error)
});
```
* 其中'[phpApi]/announce/getInfo'中的[phpApi],在src/config/http.js中进行了封装，会对应去读取src/config/config.js中对应环境下的phpApi的值

## 调用友空间原生bridge
* sdk文件已全局引入，直接调用bridge即可；
* 调用方式：https://open.diwork.com/#/docs/md2docs/open-api-doc?id=xietong&section=1
* 调用DEMO：https://openapi-daily.yyuap.com/h5-demo