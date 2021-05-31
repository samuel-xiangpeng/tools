# 数组扁平化

<code>flatten(arr)</code>

> 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中

#### 扁平化样例
```javascript
[1, 2, 3, [2, [12]]] ==> [1, 2, 3, 2, 12]
```

#### 参数
<code>arr [Array]：需要扁平化的数组</code>.

<font color='blue'>返回</font>: 返回扁平化的一维数组。

#### 代码实现

```javascript
function _flatten(arr){
    return arr.reduce((result, item) => {
        if(item instanceof Array){
            return result.concat(_flatten(item))
        }
        else {
            return result.concat(item)
        }
    },[])
}
```

```javascript
function flatten2 (array) {
  let arr = [].concat(...array)
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
 
```
