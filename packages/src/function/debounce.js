// 函数防抖
export function _debounce(callback, wait = 0) {
    let time = null;
    return () => {
        if (time) {
            clearTimeout(time)
        }
        time = setTimeout(callback, wait)
    }
}