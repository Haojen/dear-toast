# dear-toast
一个基于Vue的通用Toast组件

## Install 

  npm install dear-toast --save
  
## Import
  
  import Vue from 'vue'
  import DearToast from 'dear-toast'
  
  Vue.use(DearToast, [config options])
  
## Use

  第一种使用方式： this.$toast('hello')
  第二种使用方式： this.$toast({content: 'hello', [options]})
  
## Vue 注入时的配置

  ```Vue.use(DearToast, {
    prefix: ''，// 在vue中调用时的名字，默认值: `$toast`
    duration: 1400, // Toast 展现的时长, 默认值：`1400`
  })```
  
## 使用时的配置

  ```this.$toast({
    content: 'hello', // content 可以是纯字符串，也可以是完整的html
    duration: 1400, // 本次时长
    onShow: () => {}, // 展示时的回调
    onClose: () => {}, // 隐藏时的回调
  })```
  
  
  
