---
title: 性能监控——berserkjs
date: 2016-04-07 14:00:31
tags: 性能监控
---
#### 本节内容
```sh 
berserkJS介绍
环境搭建
berserkJS实例
```

#### berserkJS介绍  
<cite style="background: #f5f5d5;padding:10px;">页面性能分析与测试自动化工具。基于QT开发（QT内置了webkit内容，作为浏览器环境，下面会有介绍），它提供了封装的接口供JavaScript调用，这些接口用来和webkit进行通信（有点类似h5与native通信的模式）。脚本相当于注入到了webkit浏览器中获取性能数据。
</cite>[Github详细介绍](https://github.com/tapir-dream/berserkJS)

#### 环境搭建
berserkJS依赖QT平台，所以要先在本地搭建QT环境。下面以Mac OS为例。
<span>一&nbsp;&nbsp;&nbsp;&nbsp;搭建QT环境</span>
（a）去QT官网下载Mac下的SDK，大小700M+ <a style="color: blue;font-weight: bold;text-decoration: none" href="http://www.qt.io/download-open-source/#section-2">☞下载地址</a>
（b）下载安装QT creator，大小70M+，地址同上~ 
（c）双击安装，安装的时候需要一些配置，参考这里&nbsp;&nbsp;&nbsp;&nbsp;[☞戳我](http://blog.csdn.net/libaineu2004/article/details/46234079)
（d）环境安装会遇到些问题，不要着急，一步步排查尝试。
<span>二&nbsp;&nbsp;&nbsp;&nbsp;下载berserkJS</span>
（a）项目地址在这里[☞戳我](https://github.com/tapir-dream/berserkJS)
（b）项目里有个doc/index.htm，里面有详细的接口文档
（c）编译出可执行的*.app；这一步很重要，用QT creator打开src/berserkjs.pro，点击运行
![](/uploads/berserkjs.png)
（d）如果构建顺利，会在src目录下找到berserkJS.app目录，这个就是构建好的应用。它和mac下的应用程序一样，进入到src/berserkJS.app/Contents/MacOS找到一个berserkjs可执行文件。这个可执行文件可以复制到任何位置，双击就可以运行。
![](/uploads/berserkjs-2.png)
<!-- more -->
（e）执行成功会弹出下面这个框（简朴、朴素）
![](/uploads/berserkjs-3.png)

#### berserkJS实例
下面代码用来获取天猫首页性能数据
```javascript  
 (function() {
    // 检测时间 25000 MS
    var DETECT_TIME_OUT = 25000;
    // 报告类型
    var typeList = {
        doc: 'doc',
        js: 'js',
        css: 'css',
        img: 'img',
        cpu: 'cpu',
        dom: 'dom',
        repaint: 'repaint',
        firstPaintFinished: 'firstPaintFinished',
        firstScreenFinished: 'firstScreenFinished'
    };

    // 初始化报告对象
    var report = {};
    report['name'] = '天猫首页';
    report['url'] = '';
    report[typeList.firstPaintFinished] = {
        data: {}
    };
    report[typeList.firstScreenFinished] = {
        data: {}
    };
    report[typeList.repaint] = {
        data: []
    };
    report[typeList.doc] = {
        data: []
    };
    report[typeList.js] = {
        data: []
    };
    report[typeList.css] = {
        data: []
    };
    report[typeList.img] = {
        data: []
    };
    report[typeList.cpu] = {
        data: []
    };
    report[typeList.dom] = {
        data: {}
    };

    var repaintInterval;
    var w = App.webview;

    var eventHandle = {
        // 取数据
        getNetworkData: function() {
            // 收集 cpu 占用每 200 ms 收集一次
            dataCollection.cpu();
            // 收集25秒用户首页数据
            setTimeout(function() {
                // 关闭网络监听
                w.netListener(false);
                // 获取 url
                report['url'] = w.execScript(function() {
                    return location.href;
                });
                // 收集doc
                // 收集js
                // 收集css
                // 收集 img
                dataCollection.doc();
                dataCollection.js();
                dataCollection.css();
                dataCollection.img();
                dataCollection.dom();
                // 发送报告
                action.sendReport();
                App.close();
            }, DETECT_TIME_OUT);

        },

        firstScreenFinished: function(timeout, url) {
            report[typeList.firstScreenFinished].data = {
                timeout: timeout
            };
        },

        // 首次渲染监听
        firstPaintFinished: function(timeout, url) {
            report[typeList.firstPaintFinished].data = {
                timeout: timeout
            };
            // 首次渲染后开始计算每次重绘间隔
            repaintInterval = new Date().getTime();
        },

        repaint: function(rect) {
            if (!repaintInterval) {
                return;
            }
            var timeout = new Date().getTime() - repaintInterval;
            var area = rect.width * rect.height;
            report[typeList.repaint].data.push({
                timeout: timeout,
                area: area
            });
            repaintInterval = new Date().getTime();
        }
    };

    var action = {
        sendReport: function() {
            // 将数据POST到远程页面
            //App.httpRequest(url, 'data=' + encodeURIComponent(JSON.stringify(report)));
            console.log(JSON.stringify(report, undefined, 2));

            // 文件保存在berserjs可执行文件的目录下
            App.writeFile(App.path + 'xiuhong.txt', JSON.stringify(report, undefined, 2));
        }
    };

    var dataCollection = {
        cpu: function() {
            var max = 100;
            var addUp = 0;
            var timeId = setInterval(function() {
                if (addUp == max) {
                    clearInterval(timeId);
                }
                report[typeList.cpu].data.push({
                    'cpu': App.cpu()
                });
            }, 150);
        },
        doc: function() {
            var arr = App.selector.doc().get();
            for (var i = 0, c = arr.length; i < c; ++i) {
                report[typeList.doc].data.push({
                    url: encodeURI(arr[i].url),
                    ResponseSize: arr[i].ResponseSize,
                    ResponseDuration: arr[i].ResponseDuration,
                    ResponseDNSLookupDuration: arr[i].ResponseDNSLookupDuration,
                    ResponseWaitingDuration: arr[i].ResponseWaitingDuration,
                    ResponseDownloadDuration: arr[i].ResponseDownloadDuration
                });
            }
        },
        css: function() {
            var arr = App.selector.css().get();
            for (var i = 0, c = arr.length; i < c; ++i) {
                report[typeList.css].data.push({
                    url: encodeURI(arr[i].url),
                    ResponseSize: arr[i].ResponseSize,
                    ResponseDuration: arr[i].ResponseDuration,
                    ResponseDNSLookupDuration: arr[i].ResponseDNSLookupDuration,
                    ResponseWaitingDuration: arr[i].ResponseWaitingDuration,
                    ResponseDownloadDuration: arr[i].ResponseDownloadDuration
                });
            }
        },
        js: function() {
            var arr = App.selector.js().get();
            for (var i = 0, c = arr.length; i < c; ++i) {
                report[typeList.js].data.push({
                    url: encodeURI(arr[i].url),
                    ResponseSize: arr[i].ResponseSize,
                    ResponseDuration: arr[i].ResponseDuration,
                    ResponseDNSLookupDuration: arr[i].ResponseDNSLookupDuration,
                    ResponseWaitingDuration: arr[i].ResponseWaitingDuration,
                    ResponseDownloadDuration: arr[i].ResponseDownloadDuration
                });
            }
        },
        img: function() {
            var arr = App.selector.img().get();
            for (var i = 0, c = arr.length; i < c; ++i) {
                report[typeList.img].data.push({
                    url: encodeURI(arr[i].url),
                    ResponseSize: arr[i].ResponseSize,
                    ResponseDuration: arr[i].ResponseDuration,
                    ResponseDNSLookupDuration: arr[i].ResponseDNSLookupDuration,
                    ResponseWaitingDuration: arr[i].ResponseWaitingDuration,
                    ResponseDownloadDuration: arr[i].ResponseDownloadDuration,
                    width: arr[i].width,
                    height: arr[i].height
                });
            }
        },
        dom: function() {
            report[typeList.dom].data = {
                count: w.execScript(function() {
                    return document.getElementsByTagName('*').length;
                })
            }
        }
    }
    w.setViewport({
        width: 1024,
        height: 768
    });
    w.netListener(true);
    eventHandle.getNetworkData();
    w.addEventListener('repaint', eventHandle.repaint);
    w.addEventListener('firstPaintFinished', eventHandle.firstPaintFinished);
    w.addEventListener('firstScreenFinished', eventHandle.firstScreenFinished);
    w.open('https://www.tmall.com/?from=tianmao.com');
})();
```
![](/uploads/berserkjs-4.png)


#### 总结
1. 可以参考文档写出更多的测试脚本（功能也够用了）
2. 可以将性能数据写入数据库，实现自动化监控☞[参考这里](http://www.oschina.net/question/12_77375) ，毕竟对Qt上的开发不太熟悉。尝试了几番，始终没法集成到自动化的监控中去。
3. 最近发现一个比较活跃的社区：phantomas，两年前的项目，最近比较活跃（https://github.com/macbre/phantomas）， 刚好最近在用node搭建自动化监控系统，决定试下这个。





