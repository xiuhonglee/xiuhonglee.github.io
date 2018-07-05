---
title: Chrome开发者工具-network面板
date: 2016-08-03 08:17:50
tags: Chrome Developer Tools
---

##### 内容来自[Google Developers](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/resource-loading?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3)

> 使用Network面板来评估站点网络性能

![](http://s17.mogucdn.com/p2/160802/upload_38kd0gf4c2kg42d5ll7cba0c6hjkb_1400x713.png)

* Network面板记录了每个页面与网络交互的信息，包括详细的时间线数据，HTTP请求和响应头部，cookies等。

##### Network面板介绍
> Network面板有5个部分组成  

1. **Controls**：控制面板外观&功能
2. **Filters**：筛选请求资源列表内容，可按住`cmd`进行多选
3. **Overview**：显示加载资源的时间线，垂直堆叠的时间线表示资源在同步加载
4. **Requests Table**：列出了所有被页面加载的资源信息。列表默认按加载的时间顺序排序；单击列表中的资源名可查看详细信息&邮件列表标题可以显示/隐藏标题
5. **Summary**：摘要页面加载资源数目&加载资源大小(kb)&加载时间(s)  

![](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/imgs/panes.png)
>页面请求资源列表(Requests Table)默认显示下列信息。也可右键点击标题进行显示/隐藏  

* **Name**：资源名
* **Status**：Http状态码
* **Type**：请求资源的MINI类型
* **Initiator**：触发请求的进程/实体。取值如下：
    * **Parser**：Chrome解析器发起的请求
    * **Redirect**：HTTP重定向发起的请求
    * **Script**：脚本发起的请求
    * **Other**：其它进程发起的请求。比如用户通过链接请求跳转页面或用户在地址栏输入URL请求目标页
* **Size**： 请求资源大小。包括响应头(response headers)+请求体(response body)
* **Time**: 资源响应时间 = 从浏览器开始发起请求 **到** 浏览器接受到资源的最后一个字节所耗费的时间

* **Timeline**：展示资源请求的时间瀑布流。单击可查看资源加载的详细信息


##### 记录Network交互行为
> Network默认记录页面的网络请求等行为信息。开启/关闭此功能的快捷键`cmd` + `e`

##### 获取Network交互过程中的页面截图
>Network可以捕获资源加载过程中的页面截图/幻灯片(Filmstrip)。通过点击面板中的`camera`来开启/关闭此功能  

* 重载页面获取页面截图，页面截图(screenshot)在`overview`区域  

![](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/imgs/filmstrip.png)
**Tips**：当鼠标悬浮在截图上面，Timeline区域会显示一条垂直度黄线，这条线标注页面片段(screenshot)加载进来的时间。  

![](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/imgs/filmstrip-timeline-overlay.png)
**Tips**：双击截图可放大截图查看截图状态  

![](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/imgs/filmstrip-zoom.png)

##### 查看DOMContentLoaded和load事件
>Network面板会高亮两个事件[DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)和[load](https://developer.mozilla.org/en-US/docs/Web/Events/load)

DOMContentLoaded事件信息在面板中有两处都用蓝色标记标注。一处在`overview`用蓝色垂直线标注；另一处在`Summary`中用蓝色粗体问题标注。  

![](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/imgs/domcontentloaded.png)
loaded事件用红色标注，一共有三处。两处在`overview`和`summary`中，另一处在`Requests Table`中  

![](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/imgs/load.png)

#####  查看页面请求资源的详细信息
> 单击资源名查看更多信息，一般包含下面四个基本信息  

* **Headers**：请求资源的HTTP头部信息
* **Preview**：预览请求资源。JSON/image/text resources
* **Response**：HTTP响应数据（或为空）
* **Timing**：资源加载时间线（后有详述）  

![](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/imgs/network-headers.png)


###### 资源加载时间线
>单击资源详情里的Timing选项(或鼠标悬浮)查看资源加载各环节(**granular breakdown of request lifecycle**)所耗费的时间  

下面是资源加载耗时点
* 排队等待时间(Queuing)
* 阻塞时间(stalled)
* 请求/响应时间(Request/Response)：个人理解为发送的准备时间，不是过程(during)时间
* Request的发送时间
* 等待时间(等待首字节的时间)
* 内容加载时间(Content Download)  

![](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/imgs/timing-tab.png)

[Timeline详解](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/understanding-resource-timing)


##### 查看页面请求资源之间的唤起和依赖关系

* 按住`shift` & 鼠标悬浮在资源条目上可以查看资源加载之间的相互依赖关系
* 绿色底色标注表示资源的发起者(initiators)或依赖者(dependencies)
* 如果有多个绿色底色标注的资源，则表示资源的发起者或依赖者有多个
![](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/imgs/initiators-dependencies.png)

##### 对请求资源列表筛选

* 可通过资源列表上的title选择显示/隐藏（比如：显示All/XHR/JS/CSS...）,也可以按住cmd(mac)或ctrl(windows或Linux)进行多选
* 可通过筛选框进行文本匹配进行筛选(比如：搜索关键字,baidu；来匹配资源名字中包含baidu的资源项)
* chrome提供了强大的关键字筛选器（比如：large-than:20k;将会筛选出资源大小超过20k的资源向）
* 列举几个chrome提供的常见的关键字筛选
    * **domain**：根据域名进行筛选
    * **larger-than**：根据资源大小进行筛选
    * **mime-type**：根据资源MINI类型进行筛选
    * **status-code**：根据状态码进行筛选

![](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/imgs/larger-than.png)



