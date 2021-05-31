# <a data-id='doc'>开始</a>

[在线文档](https://samuel-xiangpeng.github.io/tools/#/)

> An awesome project.🤣

## 项目总览

本项目只要是熟悉javascript的语法以及一些基本的api的使用，然后自己去实现，加深自己对api的理解。只要实现以下的api.

1. 函数方面（函数的节流和防抖）
2. 数组方面
    * 数组的基本api（forEach, map, filter, reduce, some, every）
    * 数组的去重算法
    * 数组的扁平化处理
    * 数组的分区
3. 对象方面
    * 对象的基本api（instanceof, intance）
4. 字符串方面
5. 自定义实现promise
6. 自定义实现消息订阅与发布

## 快速上手

<code>npm安装</code>

```javascript
npm install ytoolsjs
```

<code>yarn安装</code>

```javascript
yarn add ytoolsjs
```

<code>网页中引入并使用</code>

```javascript
<script src="./node_modules/ytoolsjs/dist/ytools.js"></script>
<script>
  new y._Promise((resolve, reject) => {
    resolve('测试')
  })
</script>
```

<code>模块化引入并使用</code>

```javascript
// 使用ESM引入
import {_Promise} from 'ytoolsjs'
new _Promise((resolve, reject) => {
    resolve('测试')
  })

// 使用commonjs引入
const {_Promise} = require('ytoolsjs')
new _Promise((resolve, reject) => {
    resolve('测试')
  })
```
