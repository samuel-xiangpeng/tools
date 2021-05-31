export function _find(arr, callback) {
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i]
        }
    }
    return undefined
}