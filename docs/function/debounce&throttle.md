# 函数节流和防抖

> <font color='red'>函数节流(throttle)</font>和<font color='red'>防抖(debounce)</font>在我的理解就是，这两个函数都是对代码优化的手段，用来处理一些高频率触发的事件，例如<font color='blue'>浏览器滚动条滚动事件</font>，<font color='blue'>用户频繁点击按钮</font>等。<font color='blue'>函数节流</font>就是函数可能多次执行，但是我们只让它在指定的时间内执行一次。<font color='blue'>函数防抖</font>就是函数多次执行，只执行最后一次。🤠

## 函数节流

### 介绍

### 示例

### 代码实现


## 函数防抖

### 介绍

1. 语法: _debounce(callback, wait)
2. 功能: 创建一个防抖动函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 callback

### 示例

```javascript
function a() {
    console.log("滚动了🤓")
};
window.onscroll = _debounce(a, 3000)
```

### 代码实现

>实现思路：设置一个<code>lock锁</code>，初次执行打开，后面设置关闭，只有在规定时间结束后函数执行才再次打开。
```javascript
// 函数防抖
function _debounce(callback,wait){
    let lock = true;
    return ()=>{
        if(!lock == true){
            return ;
        }
        lock = false;
        setTimeout(()=>{
            lock = true
            callback()
        },wait)
    }
}
```