# vuecli3-supermall


## 技术介绍
* vue-router
  - 路由跳转
  - 导航守卫
* vuex
  - 购物车数据
  - 用户登录数据
  - token
  - 注意：vuex里的数据页面刷新后就不存在了，所以token和用户登录数据是通过借助 **sessionStorage** 保存的
* 事件总线
  - 主要用于组件之间的通信
  ```
  $emit() // 发送事件
  $on() // 接收事件
  $off() // 移除事件监听
  ```
* axios
* promise
* async/await
* less
* VueLazyLoad（图片懒加载）
* FastClick（解决移动端300ms的延迟）
* better-scroll(滚动)
* postcss-px-to-viewport(px->vw)
  
* 组件开发(公共组件和业务组件的划分)
  - 公共组件
    - 轮播图
    - 头部导航栏
    - 底部导航栏
    - 滚动组件
    - 提示信息(toast)
  - 业务组件
    - 返回顶部
    - 商品列表
    - 复选框
    - 底部导航栏
    - tab切换栏
* 插件化开发(toast)
* minxin(混入)
* ...


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
