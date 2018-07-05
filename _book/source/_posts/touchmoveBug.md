---
title: 移动端下touchmove event bug
date: 2016-07-22 18:49:34
tags: javascript
---

### 移动端下touchmove event bug
问题描述：**touchmove** event 在移动端有一个严重bug.如果没有加下面一段代码，`touchemove event`只会触发一次.但如果在`toucestart event`上添加`preventDefault`添加`preventDefault()`即可解决.

```javascript
element.addEventListener("touchstart", function(e) {
    onStart(e);
}, false);

function onStart(touchEvent) {
    if (navigator.userAgent.match(/Android/i)) {
        touchEvent.preventDefault();
    }
}
```

#### 参考
1.[stackoverflow上问题描述](http://stackoverflow.com/questions/11204460/the-touchmove-event-on-android-system-transformer-prime)  
2.[This bug is documented here](https://code.google.com/p/android/issues/detail?id=5491)
