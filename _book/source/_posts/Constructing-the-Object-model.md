---
title: 构建页面对象模型
date: 2016-08-09 22:18:54
tags: 前端性能
---

[内容来自Google Developer](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model?hl=en)

> 浏览器在渲染页面之前，需要构建DOM树和CSSOM树。  

### 1. 本节内容
```javascript
# Document Object Model (DOM)
# CSS Object Model (CSSOM)

```

简要

- 字节 → 字符 → 标记(tokens) → 节点 → 对象模型
- HTML被解析为DOM(Document Object Model),CSS被解析为CSSOM(CSS Object Model)
- 可以通过Chrome DevTools Timeline来检测浏览器构建DOM树和CSSOM树的流程


### 2. Document Object Model(DOM)
```html
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="style.css" rel="stylesheet">
    <title>Critical Path</title>
  </head>
  <body>
    <p>Hello <span>web performance</span> students!</p>
    <div><img src="awesome-photo.jpg"></div>
  </body>
</html>

```

> 上例，一段简单的HTML文档包含一段text文本和一张图片。下面来分析浏览器是如何渲染出一张页面的。

![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/full-process.png)

- **转化**：浏览器将从硬盘/网络读到的字节来按照编码规则(如UTF-8)转化为字符串
- **语义化**：浏览器根据W3C HTML5标准规范将字符串进行语义化解析。- 比如，将"&lt;html&gt;"转化为"<html>"
- **语法分析**：浏览器把语义化标签转化为对象，并为它添加属性和规则
- **构建DOM树**：HTML语言定义了不同标签之间的关系（有些标签含有嵌套关系），最终这些标签被创建为一个树形结构的对象，此树形结构包含了标签之前最初的的父-子关系：HTML是body的父级元素，body元素又是p标签的父级元素等等

![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/dom-tree.png)

> 浏览器的整个解析过程最终输出一个文档对象模型(Document Object Model)，浏览器将基于此DOM继续后续的页面构建。浏览器每次接收到HTML之后都要重复上面的操作，整个过程会消耗时间，特别处理大量HTML时。

![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/dom-timeline.png)

- [Chrome Developer Tools 文档](https://developers.google.com/web/tools/chrome-devtools/)
- [Chrome Developer Tools视频教程](http://discover-devtools.codeschool.com/chapters/1/challenges/1?locale=en)

> 如果你打开Chrome DevTools利用timeline来查看页面加载情况，会发现构建DOM的时间（如上例）大概有5ms，像大多数应用那样会加载更多的HTML，构建DOM的时间会更长些。对于包含繁重的HTML页面，构建DOM的耗时会很容易成为保证页面动画流畅的瓶颈。

- 浏览器构建的DOM对象只是捕获了文档标签的属性和标签之间的层级/并列关系，页面的元素的布局、样式渲染还需要构建CSSOM(CSS Object Model)。


### 3. CSS Object Model (CSSOM)

> 上面示例的HTML遇到link标签，会去加载css文件，内容如下：  

```css
body { font-size: 16px }
p { font-weight: bold }
span { color: red }
p span { display: none }
img { float: right }
```

> 同解析HTML一样，浏览器会将CSS解析为CSSDOM，流程与HTML解析过程类似

![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/cssom-construction.png)

- 最终解析出来的CSSOM如下

![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/cssom-tree.png)

> 为何构建树形结构？是因为浏览器计算元素的最终样式时，是从父级元素样式开始计算，逐级层叠添加到DOM元素上    

- 如上例，body下span标签里的文本字体大小会继承body；P标签下的span标签会继承p标签样式而不显示；除了上面自定义的样式外，浏览器本身自带默认样式，这些样式最为顶层样式最终也会层叠在目标标签上。

- 那构建CSSOM树的时候，浏览器耗时如何？通过Timeline里的“Recalculate Style”事件可以查看。不想DOM解析那样，这里并没有给出"CSS Parsing"，除了构建CSSDOM之外，浏览器还需要计算叠加父级样式后元素的最终样式。

![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/cssom-timeline.png)

> 页面8个HTML元素，耗时~0.6ms。页面如何渲染出来，毕竟DOM和CSSOM是两个独立对象模型，浏览器是如何将DOM和CSSOM组合在一起，最终渲染出页面的？[NEXT](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=en) 






