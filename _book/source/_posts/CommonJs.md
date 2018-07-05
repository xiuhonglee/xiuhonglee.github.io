---
title: CommonJs规范
date: 2016-02-15 13:23:50
tags: 模块化
---
#### 本节内容
```sh 
模块化规范介绍
CommonJS标准
```

#### 模块化规范介绍

> CommonJS的目标是定义一套普通应用程序使用的API，弥补JavaScript标准库过少的缺点。NodeJS就是一个CommonJS的一个实现；CommonJS是一种规范，NodeJS是这种规范的实现

1. 模块化规范，主要是为了统一模块化的编写方式
2. Javascript本身没有内置的模块系统（ES6引入了模块系统）

<!-- more -->

#### CommonJS标准

1. CommonJS有一个全局性的方法require()，主要用于加载模块，加载后，就可以调用模块的方法；
```javascript
// 引入模块
var math = require('math')
// 调用math模块方法
math.add(2,3)
```

2. CommonJS通过全局变量exports来导入模块的方法。导入的方法，便是这个模块的API
```javascript
// math.js
exports.add = function() {
    var sum = 0, i = 0, args = arguments, l = args.length;
    while (i < l) {
        sum += args[i++];
    }
    return sum;
};
```

3. CommonJS规范中的require是同步的，模块系统同步读取模块文件内容，并编译执行得到模块接口。在服务器端(如Node)文件都是本地获取，对性能没有什么影响。但在浏览器端，请求文件要异步获取，于是针对浏览器就有了新标准的出现，如AMD（Asynchronous Module Definition异步模块定义）规范。最终AMD从CommonJS社区中独立出来。

