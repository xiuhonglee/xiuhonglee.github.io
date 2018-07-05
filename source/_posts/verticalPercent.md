---
title: Vertical Percentages in CSS
date: 2016-07-22 18:49:22
tags: css
---

> 问题描述：定位DOM元素时，遇到用margin的百分值来对其进行定位，不明白这里的百分比相对于哪个DOM来计算

**下面是垂直方向上的百分比计算规则**
1. padding/margin的top/bottom的百分比取值相对于其包含块的！！！宽度！！！
2. height（包括min/max）的百分比取值相对于包含块的！！！高度！！！
3. position元素的top/bottom相对于包含块的！！！高度！！！
4. 百分比在border width上使用无效

#### MDN上对margin-top的描述
![](http://s16.mogucdn.com/p1/160721/upload_ie4tkmdfgiytqmtfhezdambqgqyde_1844x702.png)

#### 参考
1. [Vertical Percentages in CSS](https://www.impressivewebs.com/vertical-percentages-css/)
2. [MDN margin-top](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)
3. [CSS VALUES-查阅css属性值的网站](http://cssvalues.com/#margin%20)
4. [DEMO margin值](https://jsfiddle.net/xiuhong/otqdzq1a/)
