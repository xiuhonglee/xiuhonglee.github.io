---
title: phantomas
date: 2016-04-26 21:24:17
tags: 性能监控
---
#### 本节内容
```sh 
phantomas介绍
Phantomas命令行下使用

```

#### Phantomas介绍
<p style="background:#f5f5d5;padding:10px;border-radius:3px">基于PhantomJS的web性能指标监控框架。这个名字有点意思☞[戳这里](https://en.wikipedia.org/wiki/Fant%C3%B4mas)；需要NodeJS环境、PhantomJS1.9+
</p>
##### 安装
```sh 
# 下条命令会预先安装最新版本的phantomjs，同时通过添加软链接
# 的方式在全局添加phantomas命令(将./bin/phantomas.js添加到PATH中)
$ npm install --global phantomas
```

##### 特点
* 模块方法：每一个性能指标由独立模块负责实现
* 事件驱动：这点类似NodeJS，可以在phantomJS这里查找☞[可监听事件名](https://github.com/ariya/phantomjs/wiki/API-Reference-WebPage#webpage-onInitialized)
* 可获取底层性能指标：如通过jQuery绑定的事件数目、高级选择器属性使用情况等
* 结果可以以JSON、CSV格式输出
* 方便集成到持续集成(CI)工具中（如：Jenkins）
* 有Node Module可供使用，方便集成到Node项目中（不过文档不怎么全）

#### Phantomas命令行下使用
```sh 
# 不过这样也只能在命令行下看结果
$ phantomas https://github.com/macbre/phantomas --verbose

# 想要把结果存到json
$ phantomas https://github.com/macbre/phantomas --verbose --reporter=json > result.json


```

