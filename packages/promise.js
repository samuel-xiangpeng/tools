const PENDING = "pending";
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function promise(executor) {
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

        // 执行异步的回调函数
        if (self.callback) {
            self.callback.forEach(item => {
                item.onResolved(data)
            });
        }
    }
    function reject(data) {
        self.promsieState = REJECTED;
        self.promiseResult = data;

        // 执行异步的回调函数
        if (self.callback) {
            self.callback.forEach(item => {
                item.onRejected(data)
            });
        }
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

promise.prototype.then = function (onResolved, onRejected) {
    return new promise((resolve, reject) => {
        if (this.promsieState === RESOLVED) {
            let result = onResolved(this.promiseResult)
            /*
            对前一个onResolved函数返回值进行判断
            1. 可能返回一个新的promsie，那么我们就要对新的promsie的返回值进行判断
            2. 不是promsie,那么就进行resolve
            */
           if (result instanceof promise){
               result.then((v)=>{
                   resolve(v)
               },(r)=>{
                   reject(r)
               })
            }
            resolve(result)
        }
        if (this.promsieState === REJECTED) {
            let result = onRejected(this.promiseResult)
            if (result instanceof promise){
                result.then((v)=>{
                    resolve(v)
                },(r)=>{
                    reject(r)
                })
             }
             resolve(result)
        }
        if (this.promsieState === PENDING) {
            // console.log('pending')
            this.callback.push({
                onResolved, onRejected
            })
        }
    })
}