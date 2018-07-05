---
title: requestAnimationFrame
date: 2016-07-13 19:29:15
tags: 动画
---
#### 本节内容
```sh 
requestAnimationFrame介绍
requestAnimationFrame用法
cancelAnimationFrame介绍
综合示例-进度条动画
```

#### requestAnimationFrame介绍
**特点**
1. 浏览器提供的定时循环操作，类似setTimeout，用于按帧对网页重绘
2. 为网页上的各种动画效果（DOM动画、Canvas动画、SVG动画）提供统一的刷新机制

**优势**
1. 充分利用浏览器的刷新机制，节省系统资源（显示器有固定的刷新频率，美妙最多刷新 60/75次，requestAnimationFrame的基本思想就是与这个刷新频率保持同步，利用这个刷新进行页面重绘）
2. 一旦页面不处于浏览器的当前标签，就会自动停止刷新，节省资源


#### requestAnimationFrame用法
> requestAnimationFrame使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。
`requestID = window.requestAnimationFrame`

<!-- more -->

**兼容性**

```html
// 不支持的浏览器通过setTimeout降级处理
 window.requestAnimFrame = (function(){
    return window.requestAnimationFrame       || 
           window.webkitRequestAnimationFrame || 
           window.mozRequestAnimationFrame    || 
           window.oRequestAnimationFrame      || 
           window.msRequestAnimationFrame     || 
           function( callback ){
              window.setTimeout(callback, 1000 / 60); // 每秒钟刷新60次，来模拟requestAnimationFrame
          };
})();

```

**类似setTimeout进行递归调用即可**
```javascript
function repeatOften() {
  // Do whatever在这里进行操作
  requestAnimationFrame(repeatOften);
}
requestAnimationFrame(repeatOften);
```

#### cancelAnimationFrame介绍
> cancelAnimationFrame用于取消重绘

```javascript
// 参数为任务ID
window.cancelAnimationFrame(requestID);
```

#### 综合示例
```javascript
// 进度条示例
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>requestAnimation</title>
</head>
<style>

    #anim {
        width: 0;
        height: 50px;
        background-color: #83fcd8;
        border-radius: 25px;
        position: absolute;
        left: 0;
        top: 50%;
        position: absolute;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
        text-align: center;
        line-height: 50px;
    }

</style>
<body>
    <div id="wrapper">
        <div id="anim">0%</div>         
    </div>

    <button style="width:100px;height:35px;background-color: #fff;border-radius: 3px;box-shadow: 5px;">进度条</button>
</body>

<script>

    window.requestAnimationFrame = (function() { 
        return  window.requestAnimationFrame   ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    var start = null;
    var ele = document.getElementById("anim");
    var progress = 0;

    function step(timestamp) {
        progress += 1;
        ele.style.width = progress + "%";
        ele.innerHTML = progress + "%";
        if (progress < 100) {
            requestAnimationFrame(step);
        }
    }
    document.querySelector('button').addEventListener("click", function() {
        ele.style.width = 0;
        progress = 0;
        requestAnimationFrame(step);
    }, false);

</script>
</html>

```
