export function _instanceof(obj, Fn) {
    let proto = obj.__proto__;
    let prototype = Fn.prototype;
    //proto存在就执行
    while (proto) {
        if (proto === prototype) {
            return true
        }
        proto = proto.__proto__
    }
    return false
}