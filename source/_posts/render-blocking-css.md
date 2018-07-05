---
title: render-blocking-css
date: 2016-08-22 18:26:13
tags: 前端性能
---

[内容来自Google Developers](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css?hl=en)

> 上节提到关键渲染路径，渲染页面需要等待构建完成DOM树和CSSOM树。CSS是阻塞渲染资源(渲染页面的关键资源)，浏览器在未构建完CSSOM树之前是不会进行页面渲染的。

* 媒体查询(media queries): 可以用来说明CSS resources是否为阻塞渲染资源

```html
<link href="style.css" rel="stylesheet">
<link href="style.css" rel="stylesheet" media="all">
<link href="print.css" rel="stylesheet" media="print">
<link href="other.css" rel="stylesheet" media="(min-width: 40em)">
```

* 第一条和第二条等价
* 第三条只会在文档被打印（打印预览效果）时，进行渲染，使用覆盖media="all"样式来实现
* 第四条会根据页面宽度来判断是否生效
* 不论是否声明了media query，所有样式文件都会被下载

> 阻塞资源(css、javascritp)只会阻塞浏览器渲染首屏页面, “渲染阻塞”只与浏览器是否会停止渲染页面而去加载“阻塞资源”相关。对于非阻塞资源，尽管对浏览器来说资源本身优先级比较低，这些非阻塞资源仍然会被下载到浏览器端。


