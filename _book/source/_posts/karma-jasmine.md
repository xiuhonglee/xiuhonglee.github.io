---
title: karma集成jasmine框架
date: 2016-03-03 08:26:31
tags: 前端测试
---
#### 本节内容
```sh
karma介绍
karma配置文件
karma示例
```

```sh 
# karma构建在Node.js之上，以npm包形式安装
$ npm install karma --save-dev

# 安装插件，因为要集成jasmine
$ npm install karma-jasmine karma-chrome-launcher --save-dev

# 运行Karma
$ ./node_modules/karma/bin/karma start

# 可以安装命令行接口（全局安装）
$ npm install -g karma-cli

# 然后就可以这样运行
$ karma start
```

#### karma配置文件

```sh 
# 初始化配置文件，可自行配置
# 可以参考这个：http://html-js.com/article/The-front-end-of-the-front-road-automation-test-automation-test-road--the-karma-configuration

$ karma init 

# 生成配置文件后，也可以这么启动karma 
$ karma karma.conf.js

```

<!-- more -->

karma配置文件,官网(https://karma-runner.github.io/0.13/config/configuration-file.html)
```javascript
// Karma configuration
// Generated on Mon Feb 29 2016 16:23:28 GMT+0800 (CST)
module.exports = function(config) {
  config.set({

    // 用来解析定义在files和exclude里的相对路径的根目录
    // 如果basePath是一个相对路径，那么它会被解析为相对于配置文件的__dirname
    basePath: './',

    // 测试框架
    frameworks: ['jasmine'],

    // 被加载到浏览器的js文件（被测试文件、测试文件）
    files: ['public/js/src.js','public/js/test.js','test/srcSpec.js'],

    // 不会被加载到浏览器的js文件（过滤掉无用js）
    exclude: ['karma.conf.js'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // 用到的预处理器映射表
    // 默认值{’*/.coffee’: ‘coffee’}
    preprocessors: {},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // 文件改动 / 保存会自行执行测试
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

```

##### 大概介绍下karma的实现原理
```sh 
# karma是一个工具，用来创建一个web server，web server会到每一连接上的浏览器中执行测试代码
# 每一个浏览器的测试结果都会通过命令行展示出来
# karma主要设计用来做底层级的测试（单元测试）。高级测试，推荐protractor（没用过）~~
```


#### karma示例

项目结构
![](/uploads/karma-jasmine.png)
[测试项目地址](https://github.com/xiuhonglee/express-node)
```javascript 
// test.js 被测试文件
var add = function(a, b) {
    return a + b;
};

// src.js 被测试文件
function reverse(name) {
    return name.split("").reverse().join("");
}

// srcSpec.js 两个测试用例
describe("A suite of basic functions", function() {
    it("reverse word",function() {
        expect("DCBA").toEqual(reverse("ABCD"));
    });

    it("add fn",function() {
        expect(7).toEqual(add(3, 4));
    });
    
});
```

启动karma测试
![](/uploads/karma-jasmine02.png)


## 参考连接

1. [前端自动化测试之路——karma入门](http://www.html-js.com/article/Road-test-automation-entry-frontend-automation-test-front-end--Introduction-to-karma) 








