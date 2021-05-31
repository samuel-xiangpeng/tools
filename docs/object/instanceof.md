# 自定义instanceof

<code>_instanceof(obj, Fn)</code>

> 判断对象是否是在该函数类型的原型链构造函数上

#### 参数

<code>obj [Object]:</code> 实例对象<br/>
<code>Fn [Function] :</code> 构造函数

<code>返回值</code>Boolean值(true/false)

#### 代码实现
```javascript
function intanceof(obj, Fn) {
    let proto = obj.__proto__;
    let prototype = Fn.prototype;
    //proto存在就执行
    while(proto) {
        if(proto === prototype){
            return true
        }
        proto = proto.__proto__
    }
    return false
}
```

#### 测试

```javascript
function Person(name, age) {
   this.name = name
   this.age = age
}
const p = new Person('tom', 12)

console.log(aUtils.myInstanceOf(p, Object), p instanceof Object)
console.log(aUtils.myInstanceOf(p, Person), p instanceof Person)
console.log(aUtils.myInstanceOf(p, Function), p instanceof Function)
```