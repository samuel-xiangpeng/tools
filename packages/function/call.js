function _call(callback, obj, ...arg){
    if (obj===undefined || obj===null) {
        obj = globalThis
    }
    obj.__proto__.temp = callback
    let result = obj.temp(...arg)
    delete obj.__proto__.temp
    return result
}