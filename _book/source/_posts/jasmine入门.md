---
title: 前端单元测试框架-jasmine
date: 2016-03-01 14:29:50
tags: 前端测试
---
```sh 
jasmine介绍
jasmine快速入门
```

#### jasmine介绍
> 适合团队的测试框架  
行为驱动BBD(behavior-driven development)  
jasmine是一种JavaScript单元测试框架，不依赖其它JS框架，也不需要对DOM操作

#### jasmine快速入门

1. 下载Standalone版本的Jasmine，目前最新版本是2.4.1
下载地址:https://github.com/jasmine/jasmine/releases
![](/uploads/jasmine-01.png)

2. 将jasmine-standalone-2.4.1.zip解压，用Chrome打开SpecRunner.html，界面如下
![](/uploads/jasmine-02.png)

3. 下面我们自己写个单元测试

* myTest.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my test</title>
    <!-- 引入必要的文件 -->
    <link rel="shortcut icon" type="image/png" href="lib/jasmine-2.4.1/jasmine_favicon.png">
    <link rel="stylesheet" href="lib/jasmine-2.4.1/jasmine.css">
    <script src="lib/jasmine-2.4.1/jasmine.js"></script>
    <script src="lib/jasmine-2.4.1/jasmine-html.js"></script>
    <script src="lib/jasmine-2.4.1/boot.js"></script>
    <!-- 被测试文件 -->
    <script src="src/mytest.js"></script>
    <!-- 测试用例文件 -->
    <script src="spec/specTest.js"></script>
</head>
<body>
</body>
</html>

<!-- 
    # 这里几个类库文件作一下说明：
    # jasmine.css :  测试界面css样式  
    # jasmine.js  : 核心文件用于执行单元测试的类库  
    # jasmine-html.js : 用于显示单元测试结果的类库  
    # boot.js :  用于初始化单元测试所需的执行环境类库  
 -->
```

<!-- more -->

* mytest.js
```javascript
// add 
var add = function(a, b) {
    return a + b;
};
```

* specTest.js
```javascript
describe('Test add fn', function() {
    it('expect 7', function() {
        expect(add(3, 4)).toEqual(7);
    });
});
```

* 浏览器打开myTest.html，效果如下
![](/uploads/jasmine-03.png)
