// 函数防抖
function _debounce(fn,time){
    let lock = true;
    return ()=>{
        if(!lock == true){
            return ;
        }
        lock = false;
        setTimeout(()=>{
            lock = true
            fn()
        },time)
    }
}