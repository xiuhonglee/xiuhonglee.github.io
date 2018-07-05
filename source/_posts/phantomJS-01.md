---
title: phantomJS入门
date: 2016-02-29 13:48:43
tags: 性能监控
---
#### 本节内容
```sh 
phantomJS介绍
phantomJS安装
phantomJS入门
```

#### phantomJS介绍
1. PhantomJS是一个基于webkit的javaScript API
2. 它使用QtWebKit作为它核心浏览器功能
3. 使用webKit来编译解释执行JavaScript代码
4. 任何可以基于webkit浏览器做的事情，它都可以做到
5. 提供了诸如CSS选择器、支持Web标准、DOM操作、JSON、HTML5、Canvas等
6. 同事提供了处理文件I/O的操作，可以向操作系统读写文件
7. 用途广泛：网络监控、网页截屏、无需浏览器的Web测试、页面访问自动化
```sh 
PhantomJS官方地址：http://phantomjs.org/

PhantomJS官方API：http://phantomjs.org/api/

PhantomJS官方示例：http://phantomjs.org/examples/

PhantomJS GitHub：https://github.com/ariya/phantomjs/

```

#### phantomJS安装
```sh 
# 1 下载phantomJS安装包
# 2 解压进入bin目录，获取路径
# 3 将bin路径添加到环境变量中
```

![](/uploads/phantomJS.png)
- 如何添加环境变量，请[点我](http://xiuhonglee.com/2016/02/25/linux%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/)

#### phantomJS入门

```javascript
// hello.js文件
"use strict";
console.log('Hello, world!');
phantom.exit(); // 必需！否则无法退出phantomJS
```

** 运行 **
```sh 
# 安装包里有examples/hello.js文件
$ phantomJS hello.js
# The output is: Hello, world!
```

<!-- more -->

```javascript
// screenshot.js
var page = require('webpage').create();
page.open('https://www.baidu.com/', function(status) {
    console.log("Status: " + status);
    if(status === "success") {
        page.render('baidu.png');
    }
    phantom.exit();
});
```

** 运行 ** 
```sh 
$ phantomJS screenshot.js
# 百度首页截图(baidu.png)会保存在当前目录
```

其它应用：
>  **访问页面时间 **: phantomJS可以计算访问页面时间(也和本机网络环境有关)  
** 代码评估(Code Evaluation)**: 抓取页面信息  
** 网络请求/响应信息 **: 请求、响应数据json格式输出