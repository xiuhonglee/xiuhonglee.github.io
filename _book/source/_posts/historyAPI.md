---
title: Html5 History API
date: 2017-01-04 10:09:28
tags: javascript
---
#### 本节内容
```sh 
# History是什么
# History怎么用-语法
# History如何用-应用场景
```

#### 1. History是什么
* 操纵浏览器的历史记录
* Html5新特性
* 可与Ajax结合实现页面无刷新更新 & 前进/后退

#### 2. History怎么用
##### 2.1 属性

```javascript
// 当前窗口访问了三个网址，那么history对象包括三项(history.length === 3)
window.history.length === history.length

// 返回一个表示历史堆栈`顶部`的状态的值
history.state

```

##### 2.2方法

**改变浏览器访问地址**
```javascript
// 回退
history.back() <=> history.go(-1)

// 前进
history.forward() <=> history.go(1)

// 刷新当前页面
history.go(0)

```

**新特性**
* history.pushState()
* history.replaceState() // 和pushState的唯一区别在于replace
```javascript
/**
 * @param state: 一个与指定网址相关的状态对象，popstate事件触发时，该对象会传入回调函数。如果不需要这个对象，此处可以填null
 * title: 新页面的标题，但是所有浏览器目前都忽略这个值，因此这里可以填null
 * url: 新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址；不过url不能跨域，否则报错
 */
history.pushState(state, title, url) // 格式

/**
 * 示例
 * 1. 页面并不会刷新
 * 2. 只会改变地址栏信息
 * 3. 回退操作也只是改回地址栏信息，同样不会刷新页面
 */
var stateObj = { scoff: 2 }
window.history.pushState(stateObj, 'new page', 'any_url.html')

```

##### 2.3 事件
* popstate事件

> 同一个文档的浏览历史（history对象）出现变化时，就会触发popstate事件；触发条件，用户点击前进/后退按钮 | js操作history.go()、history.back()、history.forward()时触发

```javascript
window.addEventListener('popstate', function(event) {
  console.log('location: ' + document.location);
  console.log('state: ' + JSON.stringify(event.state));
});
```

#### 3. History如何用
* 与ajax配合使用
> Ajax可以实现页面的无刷新操作，但是无法前进与后退；History可以解决这个问题

[☞场景: 网络示例](http://www.zhangxinxu.com/study/201306/ajax-page-html5-history-api.html?area=zhabei)


#### 4. 参考
[1. MDN API](https://developer.mozilla.org/zh-CN/docs/Web/API/History#See_also)
[2. history对象](http://javascript.ruanyifeng.com/bom/history.html)
[3. ajax与HTML5 history pushState/replaceState实例](http://www.zhangxinxu.com/wordpress/2013/06/html5-history-api-pushstate-replacestate-ajax/)