---
title: javascript加号运算符
date: 2016-05-10 18:08:54
tags: javascript
---
```sh 
JavaScript中的加号运算符
使用场景
```

#### JavaScript中的加号运算符

> 通常，在JavaScript中的“+”运算符用来进行数字运算和字符串连接。但是，它也可作为一元运算符通过调用操作对象的valueOf()或toString()方法来使用。

#### 使用场景
1.获取时间戳
> The Date object has handy implementations for valueOf() and toString()

```javascript
new Date().valueOf()
// 1369472124400 (milliseconds timestamp)

new Date().toString()
// "Sat May 25 2013 10:55:17 GMT+0200"
```

<!-- more -->

如果使用+运算符，或默认调用Date()的valueOf()方法来获取时间戳
```javascript
+new Date()
// 1369472124400

+new Date() === new Date().valueOf()
// true
```

2.转换数字
```javascript
+true   // 1
+null   // 0
+""     // 0
+"2.0"  // 2
+"2.5"  // 2.5 
```
这种方法比pareseInt(x, 10)更严格些
```javascript
+"3asdf"                // NaN
parseInt("3asdf", 10)   // 3
```

3.重新原型valueOf来自定义“+”

```javascript
var myCoercion;
var WeirdCoercion = function(increment) {
    this.increment = increment;
};

WeirdCoercion.prototype.valueOf = function() {
    return 10 + this.increment;
};

myCoercion = new WeirdCoercion(5);

// that's what we wanted to achieve
+myCoercion     // 15
20 + myCoercion // 35
```

原文链接： ☞ [戳这里](http://frontendplay.com/2013/05/25/plus-sign-javascript/)
