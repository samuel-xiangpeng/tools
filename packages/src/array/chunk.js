export function _chunk(arr, size) {
    let newArr = []
    let count = 0;
    let sizeArr = []
    let R = arr.slice(size * (arr.length / size) - 1)
    for (let i = 0; i < arr.length; i++) {
        count++
        sizeArr.push(arr[i])
        if (count === size) {
            count = 0
            newArr.push(sizeArr)
            sizeArr = []
        }
        if (i >= size * (arr.length / size) - 1) {
            newArr.push(R)
            break;
        }
    }
    return newArr
}