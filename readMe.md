## 说明
友空间内部使用的文件上传组件,文件来源于文库
# Author
zhaoting

## demo
npm install @yzone/yy-file-select

``` javascript
<template>
<file-select v-model="showModal" @on-ok="handleOk" host="http://web.api.chaoke.com:6062" lang="zh_cn">
</file-select>
</template>
import FileSelect from '@yzone/yy-file-select'

components: {FileSelect},
methods:{
  handleOk(res){

  }
}
```

host 表示当前环境文件接口域名，不传默认 http://web.api.chaoke.com:6062

lang 表示当前环境语言, 中文--zh_cn, 繁体--zh_tw, 英文--en

@on-ok 是确定按钮回调方法

showModal 是否展示



