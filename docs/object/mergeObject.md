# 对象合并

<code>_mergeObject(...args)</code>

> 合并多个对象, 返回一个合并后对象(不改变原对象)

#### 参数

<code>...args [Number]: 接收多个对象参数</code>

<code>返回值：</code>一个新的合并后的对象

#### 示例样例

```javascript
{ a: [{ x: 2 }, { y: 4 }], b: 1}
{ a: { z: 3}, b: [2, 3], c: 'foo'}
合并后: { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
```

#### 代码实现

```javascript
function mergeObject(...objs) {
  const result = {}

  // 遍历objs
  objs.forEach(obj => {
    Object.keys(obj).forEach(key => {
      // 如果result还没有key值属性
      if (!result.hasOwnProperty(key)) {
        result[key] = obj[key]
      } else { // 否则 合并属性
        result[key] = [].concat(result[key], obj[key])
      }
    })
  })

  // 可以使用reduce来代替forEach手动添加
  return result
}
```