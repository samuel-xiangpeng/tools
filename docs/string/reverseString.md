# 字符串倒叙

<code>_reverseString(str)</code>

#### 参数

<code>str [String]:需要进行倒叙的字符串</code>

<code>返回值: 倒叙后的新字符串</code>

#### 示例样例

```javascript
let str = 'I am good boy!'
console.log(_reverseString(str))
```

> 结果： !yob doog ma I

#### 代码实现

```javascript
function _reverseString(str) {
	return str.split('').reverse().join('')
}
```