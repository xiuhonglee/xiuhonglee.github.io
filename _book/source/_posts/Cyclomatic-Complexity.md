---
title: 编写可测试的JavaScript代码（三）
date: 2017-03-15 18:02:37
tags: 前端测试
---

#### 1. 圈复杂度

> 圈复杂度用来衡量代码独立路径数量。单元测试角度来衡量，就是测试所有代码（100%覆盖率）需要的最少单元测试数量。


```javascript
function sum(a, b) {
  if (typeof(a) !== typeof(b)) {
    throw new Error("Cannot sum different types!");
  } else {
    return a + b;
  }
}
```

> 上面函数圈复杂度为2。也就是说，要达到100%覆盖率需要2条单元测试来实现。

* Generating the cyclomatic complexity of your code is simple using a command-line tool such as jsmeter. However, determining what is optimal in terms of cyclomatic com‐ plexity is not so simple.

> 获取代码圈复杂度并不困难。