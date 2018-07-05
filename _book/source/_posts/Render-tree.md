layout: render-tree
title: 构建渲染树
date: 2016-08-11 07:43:15
tags: 前端性能
---
[内容来自Google Developer](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=en)

#### 本节内容

> 当浏览器布局可视元素时，会将CSSOM和DOM树链接成为渲染树，最终以像素形式绘制到屏幕上。优化渲染性能的关键在于优化这些渲染的每个阶段。浏览器构建的DOM和CSSOM是两个独立的树形结构。一个负责承载内容，一个负责描述样式，这两部分是如何合并阮然到页面的呢？ 

- 第一步：构建渲染树。浏览器捕获屏幕中的每一个可视DOM，并为每一个结点添加CSSOM样式信息，最终合并成为一个“渲染树”。

![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/render-tree-construction.png)

- 构建渲染树，具体步骤：
- 从DOM树的root结点开始遍历每一个可视结点。
    - 有些结点本身为非可视结点（如script、meta等标签），因为这些标签最终并不会呈现到页面上，浏览器在构建渲染树的过程中会忽略这些标签。
    - 有些结点通过css隐藏的(display:none)的结点，同样会被浏览器忽略。
- 对每一个可视元素结点匹配对应CSSOM规则。
- 最终层显内容与样式（计算样式）结合的渲染树。
> 提示：对于元素(visibility: hidden)和元素(display:none)，前者会被渲染为一个空白内容区(仍占位)，后者不会被渲染。

- 第二步：布局。 上面虽然计算得到了渲染树文本、样式信息。在渲染阶段，还需要知道元素在容器设备([viewport](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/set-the-viewport))中的确切位置——这将进入“布局”阶段，也称为“重排”。

> 为了得到每个元素确切的大小和位置，浏览器需要从root结点遍历并计算出页面元素的几何大小、位置。以下面为例：
```html
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Critial Path: Hello world!</title>
  </head>
  <body>
    <div style="width: 50%">
      <div style="width: 50%">Hello world!</div>
    </div>
  </body>
</html>
```
 
- 页面包含两个嵌套的div元素，外层占屏幕宽50%，内容占外层div宽度50%（也就是占屏幕宽的25%）。

![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/layout-viewport.png)

- 布局阶段将产生一个个“盒模型”——包含元素相对屏幕(viewport)的精确位置、大小信息：所有的相对尺寸最终会被转化为屏幕上的像素单位（也是相对单位）。

- 最后：绘制（光栅化-rasterizing）。现在已经知道哪些元素可见，以及可见元素的计算样式、几何信息。浏览器将根据这些信息将节点以像素的形式绘制到页面上。

> 上面的每一个步骤，浏览器在底层做了很多处理。Chrome Developer Tool可以捕获到上面每个阶段的耗时，下面是布局阶段耗时（上面hello world示例）。

![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/layout-timeline.png)

- Chrome Developer Tools Timeline的layout事件会记录渲染树构建、确定元素位置、计算元素占位大小耗时。
- 布局完成，"Paint Setup"和"Paint"事件会将渲染树以像素的形式呈现到显示器。
- 构建渲染树、布局、渲染都需要耗费时间。随着构建文档大小的增加，耗时也随之增加。另外，渲染复杂样式如(box shadow)要比简单样式(solid color)耗费更多的性能。

> 回顾浏览器接收到整个文档的处理流程

- 处理HTML，构建DOM树
- 处理CSS， 构建CSSOM树
- 将DOM和CSSOM树合并为渲染树(render tree)
- 根据渲染树进行布局、计算每个节点(Node)几何信息
- 将节点渲染的显示器

> 上面的示例虽简单，浏览器做的很多底层工作。如果DOM树或CSSOM树被改动，浏览器会重复上面的所有操作，这就是重绘(re-rendered)的代价。

优化渲染路径上的1-5个步骤，可以更快速渲染出页面内容，而且可以减少页面初始化完成后的屏幕刷新(fps)间隔时间——也就是使显示器达到更大的刷新频率。
