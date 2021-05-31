function _forEach(arr, callback) {
    // forEach函数没有返回值
    for(let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr)
    }
}
