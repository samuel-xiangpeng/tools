export function _throttle(fn, wait = 0) {
    let lock = true;
    return () => {
        if (!lock == true) {
            return;
        }
        lock = false;
        setTimeout(() => {
            lock = true
            fn()
        }, wait)
    }
}