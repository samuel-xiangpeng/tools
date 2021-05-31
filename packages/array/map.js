function _map(arr, callback) {
    let result = []
    for (i = 0; i < arr.length; i++) {
        let a = callback(arr[i], i, arr)
        result[i] = a
    }
    return result
}