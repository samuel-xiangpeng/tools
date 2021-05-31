function _filter(arr, callback) {
    //返回为true的条件项
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i],i,arr)){
            result.push(arr[i])
        }
    }
    return result
}