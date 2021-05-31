# 数组去重
<br/>
<code>_unique(arr)</code>

>数组去重就是把数组中重复的去掉，只保留一个重复的在数组中。

* 去重样例

```javascript
[1, 2, 3, 1, 2, 3] ==> [1, 2, 3] 
```

#### 参数

arr [Array]: 需要去重的数组对象

#### 示例

```javascript
let a = [1, 1, 1, 1, 1, 1, 23, 2]
let b = _unique(a)
consoel.log(b)
```

> 结果：[1, 23, 2]

#### 代码实现

<code>1. 使用Set集合方式实现，因为集合中是不允许存在重复的元素的</code>

```javascript
function _unique(arr){
    let newArr = new Set(arr)
    return [...newArr]
}
```

<code>2. 使用forEach + includes循环遍历去实现</code>

```javascript
function _unique(arr){
    let newArr = []
    arr.forEach((item, index, arr) => {
        if(!newArr.includes(item)){
            newArr.push(item)
        }
    })
    return newArr
}
```

<code>3. 使用基本for循环遍历实现</code>

```javascript
function _unique(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(newArr.length === 0){
            newArr.push(arr[i]);
            continue;
        }
        let count = 0
        for(let j = 0; j < newArr.length; j ++){
            if(arr[i] === newArr[j]){
                count ++
            }
        }
        if(count === 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}
```


<code>4. 使用sort排序后然后俩俩对比实现</code>

```javascript
function _unique(arr) {
    let result = arr.sort((a, b) => {
        return a - b
    })
    for(let i = 0; i < result.length - 1; i++){
        if(result[i] === result[i+1]){
            result.splice(i,1)
        }
    }
    return result
}
```




