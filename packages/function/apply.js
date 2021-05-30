function _apply(callback, obj, arg){
    if (obj===undefined || obj===null) {
        obj = globalThis
    }
    obj.__proto__.callback = callback
    let result = obj.callback(...arg)
    delete obj.__proto__.callback
    return result
}