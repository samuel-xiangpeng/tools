
import {_call} from './call'
export function _bind(callback, obj, ...arg1) {
    return (...arg2) => {
        if (obj === undefined || obj === null) {
            obj = globalThis
        }
        _call(callback, obj, ...arg1, ...arg2)
    }
}