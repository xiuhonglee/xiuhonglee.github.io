---
title: Html判断IE浏览器版本
date: 2016-02-26 11:53:44
tags: HTML
---
#### 本节内容
```sh 
官方HTML hack方式
js判断IE版本
```

#### 官方HTML hack方式
```html 
<!--[if IE]>
// 全部IE版本可见
<![endif]-->

<!--[if IE 6]>
// IE6可见
<![endif]-->

<!--[if !IE]><!-->
 // 除IE外都可识别 
 <!--<![endif]-->

<!--[if lt IE 9]>
// 低于IE9的IE浏览器
<!--[else]>
// 加载CSS2
<![endif]-->

# 非IE浏览器里会被当做注释被无视
# IE会判断浏览器版本来确定要不要解析里面的DOM元素和文本内容

```

#### 条件运算符

项目 | 范例 | 说明
------------ | ------------- | ------------
! | [if !IE]  | Not operator；转换为布尔值
lt | [if lt IE9]  | 小于运算符
lte | [if lte IE9]  | 小于等于运算符
gt | [if gt IE6]  | 大于运算符
gte | [if gte IE6]  | 大于等于运算符
() | [if !(IE6)]  | 用来组合复杂运算
& | [if (gt IE 5)&(lt IE 7)]  | 且

<!-- more -->

#### js判断IE版本
```javascript
// 方法：
// 1 生成一个b标签，设置他的innerHTML为只有IE才能识别的注释
// 2 注释里有个空的标签
// 3 最后读取里面的元素i，判断是否为1

/*** 检测是否为IE ***/
var isIE = function(){
    var b = document.createElement('b')
    b.innerHTML = '<!--[if IE]><i></i><![endif]-->'
    return b.getElementsByTagName('i').length === 1
}

/*** 检测是否为IE6 ***/
var isIE6 = function(){
    var b = document.createElement('b')
    b.innerHTML = '<!--[if IE 6]><i></i><![endif]-->'
    return b.getElementsByTagName('i').length === 1
}

// 可以进一步抽象，版本号作为参数传入
var isIE = function(version){
    var b = document.createElement('b')
    b.innerHTML = '<!--[if IE ' + version + ']><i></i><![endif]-->'
    return b.getElementsByTagName('i').length === 1
}

// 可以直接调用
if(isIE(6)){
    // IE 6
}

if(isIE(9)){
    // IE 9
}

// 如果只想检测IE，不传参即可
var ie = isIE();

```

