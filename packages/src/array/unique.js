// function _unique(arr) {
//     let newArr = new Set(arr)
//     return [...newArr]
// }

export function _unique(arr) {
    let result = arr.sort((a, b) => {
        return a - b
    })
    for (let i = 0; i < result.length - 1; i++) {
        if (result[i] === result[i + 1]) {
            result.splice(i, 1)
        }
    }
    return result
}