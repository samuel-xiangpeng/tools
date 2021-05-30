# call&apply&bnd

> api说明

#### 😶 call()
<strong>语法:</strong> call(fn, obj, ...args)<br/>
<strong>功能:</strong> 执行fn, 使this为obj, 并将后面的n个参数传给fn(功能等同于函数对象的call方法)
#### 😶 apply()
<strong>语法:</strong> apply(fn, obj, args)<br/>
<strong>功能:</strong> 执行fn, 使this为obj, 并将args数组中的元素传给fn(功能等同于函数对象的apply方法)
#### 😶 bind()
<strong>语法:</strong> bind(fn, obj, ...args)<br/>
<strong>功能:</strong> 给fn绑定this为obj, 并指定参数为后面的n个参数 (功能等同于函数对象的bind方法)

<hr/>

## call实现

```javascript
function _call(callback, obj, ...arg){
    if (obj===undefined || obj===null) {
        obj = globalThis
    }
    obj.__proto__.temp = callback
    let result = obj.temp(...arg)
    delete obj.__proto__.temp
    return result
}
```

## apply实现

```javascript
function _apply(callback, obj, arg){
    if (obj===undefined || obj===null) {
        obj = globalThis
    }
    obj.__proto__.callback = callback
    let result = obj.callback(...arg)
    delete obj.__proto__.callback
    return result
}
```

## bind实现

```javascript
function _bind(callback, obj, ...arg1){
    return (...arg2)=>{
        if (obj===undefined || obj===null) {
            obj = globalThis
        }
        _call(callback, obj, ...arg1, ...arg2)
    }
}
```