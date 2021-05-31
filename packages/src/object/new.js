export function _new(fn, ...args) {
    const obj = {}
    obj.__proto__ = fn.prototype
    //更改构造函数中this的指向
    const result = fn.call(obj, ...args)
    return result instanceof Object ? result : obj
}