// 数组扁平化

export function _flatten(arr) {
    return arr.reduce((result, item) => {
        if (item instanceof Array) {
            return result.concat(_flatten(item))
        }
        else {
            return result.concat(item)
        }
    }, [])
}

