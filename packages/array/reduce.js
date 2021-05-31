function _reduce(arr, callback, initResult = null){
    //初始化result值
    let result = initResult;
    for(let i = 0; i < arr.length; i++){
        result += callback(result, arr[i])
    }
    return result
}