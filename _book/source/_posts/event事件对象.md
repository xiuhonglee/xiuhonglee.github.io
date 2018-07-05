---
title: event事件对象
date: 2017-01-18 16:50:33
tags: javascript
---

#### 本章小结
```
pageX clientX offsetX的区别
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>clientX || clientY</title>
  <style>
    html,div {
      margin: 0;
      padding: 0;
    }
    .wrapper {
      width: 5000px;
      height: 700px;
      background: #ccc;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <div class="wrapper"></div>
</body>
<script>
  let dom = document.querySelectorAll('.wrapper')
  dom[0].addEventListener('click', function(event) {
    
     console.log('event.pageX', event.pageX)
     console.log('event.pageY', event.pageY)

     console.log('event.clientX', event.clientX)
     console.log('event.clientY', event.clientY)

     console.log('event.offsetX', event.offsetX)
     console.log('event.offsetY', event.offsetY)

  }, false)
</script>
</html>

```