---
title: AMD和CMD规范
date: 2016-02-15 13:51:21
tags: 模块化
---
#### 本节内容
```sh
AMD规范介绍
CMD规范介绍
AMD和CMD比较
```

#### AMD规范介绍 
[AMD中文WIKI](https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88)

> CommonJS主要是为JS在后端的变现制定的，但并不适合前端（浏览器端）的异步特点；
AMD (Asynchronous Module Definition : 异步模块定义规范 )它主要是为前端JS的表现指定的规范。AMD就只有一个接口：`define(id? dependencies?, factory)`

<!-- more -->

```javascript
// 添加依赖
define(['dep1','dep2'],function(dep1,dep2){
    // TODO
});

// 若没有依赖
define(function(){
    var exports = {};
    exports.method = function(){...};
    return exports;
});

```

> RequireJS就是实现了AMD规范的呢。


#### CMD规范介绍

> CMD (Common Module Definition，通用模块定义)模块定义规范，和AMD规范一样都是针对浏览器端模块化开发的规范；理解CMD，需要和AMD进行对比来理解

下面是Sea.js 推荐的 CMD 模块书写格式 ([参考官网](http://seajs.org/docs/#quick-start))
```javascript
// 模块定义 
define(id?, deps?, factory)

// 所有模块都通过 define 来定义
define(function(require, exports, module) {

  // 通过 require 引入依赖
  var $ = require('jquery');
  var Spinning = require('./spinning');

  // 通过 exports 对外提供接口
  exports.doSomething = ...

  // 或者通过 module.exports 提供整个接口
  module.exports = ...

});
```

#### AMD和CMD比较 
[参考](https://github.com/seajs/seajs/issues/277)
[这个也不错](http://div.io/topic/430)

![盗图](/uploads/amd_cmd.png)

* CMD 模块依赖声明方式
```javascript
define(function (require) {
    var a = require('./a');
    var b = require('./b');
    // more code ..
})
// CMD依赖是就近声明，通过内部的require方法进行声明。
// 但因为是异步模块，加载器需要提前加载这些模块，
// 所以模块真正使用前需要提取模块里面所有的依赖。
// CMD的这种依赖声明格式只能通过静态分析方式实现，
// 这也正是CMD的弊端所在。
```
 
* AMD 模块依赖声明方式
```javascript
define(['./a', './b'], function (a, b) {
    // more code ..
})

// AMD依赖是提前声明。这种方式的优势就是依赖无需通过静态分析
// 这对加载器和自动化分析工具都是有利的
```

目前理解比较大的区别是：SeaJS对模块的态度是*懒执行*，而RequireJS对模块的态度是*预执行*




















