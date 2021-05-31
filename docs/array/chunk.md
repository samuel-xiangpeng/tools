# 数组分块
<br/>
<code>_chunk(arr,size)</code>

> 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组

#### 分块样例
```javascript
[12, 21, 3, 45, 6] ==> size== 2 ==> [[12, 21],3, 45], [6]]  
```

#### 参数
arr [Array]: 需要进行分块的数组<br/>
size [Number] : 定义数组每一块的大小（每个小数组有几个元素）

#### 代码实现

<code>实现思路</code>
```javascript
1. 将数组先进行对分块区间size进行整除,求解出没法凑齐size规格的数组元素.
2. 使用slice将没法凑齐size规格的元素组成数组，在后面遍历数组的时候.
3. 当数组索引遍历到大于整除size最大时直接将这个凑不齐的push进数组，然后终止整个循环.
4. 设置一个size小规格的数组,当index大于size时就push这个到大的数组.
5. 然后清空size数组。最后执行结束返回大数组就可以了.
```

```javascript
function _chunk(arr, size) {
    let newArr = []
    let count = 0;
    let sizeArr = []
    let R = arr.slice(size * (arr.length / size) - 1)
    for (let i = 0; i < arr.length; i++) {
        count++
        sizeArr.push(arr[i])
        if (count === size) {
            count = 0
            newArr.push(sizeArr)
            sizeArr = []
        }
        if(i >= size * (arr.length / size) -1){
            newArr.push(R)
            break;
        }
    }
    return newArr
}
```