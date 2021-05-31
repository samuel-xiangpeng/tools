# 自定义Promise

    1. Promise构造函数实现
    2. Promsie.then方法实现
    3. Promsie.catch方法实现

## 实现思路

1. 创建promise构造函数
2. 创建executor(执行器函数)，这个函数接收<code>resolve</code>和<code>reject</code>两个函数作为参数。
3. 定义promise的状态<code>promsieState</code>，初始值是：pending，只有resolve和reject这两个函数才可以改变promiseState的值，也就是promsie的状态值。
4. <code>实现</code>resolve和reject函数.
5. <code>实现executor执行器异步函数任然可以该改变promise的状态值</code>
6. <code>.then</code>方法的实现
7. <code>.then</code>方法在executor异步函数的时候任然可以实现。
8. <code>.then</code>链式调用实现
9. <code>.then</code>方法中的函数是异步执行的
10. <code>.catch</code>方法异常穿透实现

## 实现代码

```javascript
const PENDING = "pending";
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function _Promise(executor) {
    // promise状态
    this.promsieState = PENDING;
    // 存储resolve和reject函数结果
    this.promiseResult = null;
    // 存储异步的回调函数
    this.callback = []
    const self = this
    function resolve(data) {
        self.promsieState = RESOLVED;
        self.promiseResult = data;
        setTimeout(() => {
            // 执行异步的回调函数
            if (self.callback) {
                self.callback.forEach(item => {
                    item.onResolved(data)
                });
            }
        }, 0)
    }
    function reject(data) {
        self.promsieState = REJECTED;
        self.promiseResult = data;
        setTimeout(() => {
            // 执行异步的回调函数
            if (self.callback) {
                self.callback.forEach(item => {
                    item.onRejected(data)
                });
            }
        }, 0)
    }
    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

/*
    实现.then方法
*/

_Promise.prototype.then = function (onResolved, onRejected) {
    let self = this;
    // 如果.then没有传递onRejected函数，那么就指定onRejected函数
    if (typeof onRejected !== 'function') {
        onRejected = reason => { throw reason };
    }

    //如果.then第一个参数onResolved没有传递，那么就给你默认值
    if (typeof onResolved !== "function") {
        onResolved = value => value;
    }
    return new Promise((resolve, reject) => {
        function callback(type) {
            try {
                let result = type(self.promiseResult)
                /*
                对前一个onResolved函数返回值进行判断
                1. 可能返回一个新的promsie，那么我们就要对新的promsie的返回值进行判断
                2. 不是promsie,那么就进行resolve
                */
                if (result instanceof Promise) {
                    result.then((v) => {
                        resolve(v)
                    }, (r) => {
                        reject(r)
                    })
                }
                resolve(result)
            } catch (error) {
                reject(error)
            }
        }
        if (this.promsieState === RESOLVED) {
            setTimeout(() => {
                callback(onResolved)
            }, 0)
        }
        if (this.promsieState === REJECTED) {
            setTimeout(() => {
                callback(onRejected)
            }, 0)
        }
        if (this.promsieState === PENDING) {
            // console.log('pending')
            this.callback.push({
                onResolved: function () {
                    callback(onResolved)
                },
                onRejected: function () {
                    callback(onRejected)
                }
            })
        }
    })
}

/*
    实现promsie的catch方法
*/
Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
}
```