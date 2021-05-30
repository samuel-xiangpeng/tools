const PENDING = "pending";
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function Promise(executor) {
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

Promise.prototype.then = function (onResolved, onRejected) {
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

/*
    实现promise的resolve方法
*/
Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then((v) => {
                resolve(v)
            },
                (r) => {
                    reject(r)
                }
            )
        }
        resolve(value)
    })
}

/*
    实现promise的reject方法
*/
Promise.reject = function (value) {
    return new Promise((resolve, reject) => {
        reject(value)
    })
}