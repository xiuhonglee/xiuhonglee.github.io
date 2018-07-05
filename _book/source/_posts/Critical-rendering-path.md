---
title: 优化关键渲染路径
date: 2016-08-09 15:52:18
tags: 前端性能
---
内容来自[Google Developers](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=en)
#### 1. 优化关键渲染路径
> 优化关键渲染路径，是根据用户行为来确定浏览器展示内容的优先级；浏览器渲染页面在底层做了很多操作。优化页面性能，需要理解浏览器在接收到HTML、CSS和JavaScript之后如何对其进行解析、渲染的机制。


![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/progressive-rendering.png)


> 为了优化关键渲染路径，我们可以从缩短首字节渲染时间来入手。理解关键渲染路径也为开发性能优良的web应用奠定了基础。页面最为理想的渲染时刻应该是在每秒60帧的刷新频率结束的同一时刻。忽略这些，先快速了解下浏览器渲染出一张页面的流程。


##### 2. Topics
- Constructing the Object Model
- Render-tree construction, layout, and paint
- Render blocking CSS
- Adding interactivity with JavaScript
- Measuring the critical rendering path with Navigation Timing
- Analyzing critical rendering path performance
- Optimizing the critical rendering path
- PageSpeed rules and recommendations