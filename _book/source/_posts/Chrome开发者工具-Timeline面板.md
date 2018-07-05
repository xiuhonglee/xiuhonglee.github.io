---
title: Chrome开发者工具-Timeline面板
date: 2016-08-05 15:40:42
tags: Chrome Developer Tools
---
##### 内容来自[☞ Google Developers](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/timeline-tool?hl=en)

> Timeline面板来记录&分析网络交互行为，能够很好地分析网络应用的性能表现  

![](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/imgs/timeline-panel.png)

<!-- more -->

##### 1. Timeline面板介绍
* ☞ 控制(controls): 开启/关闭一次记录行为，选择记录哪条信息
* ☞ 预览(overview): 页面性能分析报告
* ☞ 可视化(flame chart)：CPU消耗状况可视化
    * ☞ 此处有三条垂直线，蓝色代表DOMContentLoaded 事件；绿色代表首次渲染的时刻；红线代表load事件
* ☞ 详情(Detail): 当选中某一事件后，此会显示事件详情信息；当没有事件被选中的时候，改区域显示选中的时间帧(time frame)详情
![](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/imgs/timeline-annotated.png)

##### 2. Overview面板
> 此区域有三个图表构成  

* ☞ FPS(frames per second): 帧刷新频率/秒；绿色条越高表示FPS值越高；上方的红色区块表示long frames(?),觉得没啥用（jank）
* ☞ CPU：CPU资源占用率；面积图表示不同的事件占用的CPU资源
* ☞ NET：没一种颜色代表一种资源类型。线条越长，说明加载资源的时间越长；线条的浅色部分表示等待时间(wating  time:请求发起的时刻到首字节被加载)；线条的深色部分表示资源的网络传输时间(transfer time: 首字节加载时刻到末字节加载的时刻)；线条的颜色：**HTML**：蓝色；：**script**：黄色；**stylesheet**紫色；**Media**绿色；**其它mix资源**：灰色
![](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/imgs/overview-annotated.jpg)

##### 3. 发起一次记录(Make a recording)
> 打开Timeline面板重载页面，Timeline面板会自动记录重载页面信息(shortcut:cmd+e)

**Tips:**
* ☞ 保持记录时间短: 更方便进行分析
* ☞ 避免不必要的操作行为：避免如鼠标点击、
网络载入(network load)等这些多余的动作；比如你想记录点击login按钮后的事件耗时，就不要滚动页面、加载图片等行为
* ☞ 禁用浏览器缓存：Disable the browser cache
* ☞ 禁用扩展插件：Chrome的扩展插件会干扰(extraneous)对页面加载时间的分析

##### 4. 查看记录详情
> 在图标区(flame chart)选中事件，详情区域显示更多的事件耗时信息

![](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/imgs/details-pane.png)
> Summary这项tab是所有事件类型的父级面板。其它tab只对特定的事件类型有效.点击查看[Timeline相关事件类型](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/performance-reference#common-timeline-event-properties)


##### 4. 捕获recording期间的页面截图
> 页面载入时，Timeline面板可获取recording页面截图.control面板默认关闭Screenshots选项，需要手动开启.  

![](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/imgs/timeline-filmstrip.png)
> 将鼠标悬浮在Screenshots上可放大查看，控制鼠标在Screenshots上左右滑动可现实模拟页面加载的动画效果

##### 5. 查看JavaScript信息

> 在Timeline记录之前开启control面板中的JS Profile选项，Flame图表中会显示每一个被调用Function信息

![](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/imgs/js-profile.png)

##### 6. 查看painting信息
> 开启control面板中的Paint选项可以获取Paint事件信息.点击Paint Event，可以在overview区域看到新增Paint Profiler选项板，点击可查看详情，柱状图显示。  

![](https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/imgs/paint-profiler.png)

##### 7. 放大Timeline区域
> 可以在overview区域拖动标尺选中Timeline片段，Flame Chart区域会放大显示对应区段；也可通过控制键a、s、w、d来微调选中区域

![](
https://developers.google.com/web/tools/chrome-devtools/profile/evaluate-performance/imgs/zoom.png)
