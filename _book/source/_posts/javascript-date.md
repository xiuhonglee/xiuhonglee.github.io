---
title: javascript-Date类型
date: 2016-03-03 21:24:26
tags: javascript
---

![](/uploads/javascript-date.jpg)

#### 本节内容
```sh 
ECMAScript Date类型
```

#### ECMAScript Date类型
> Date类型使用UTC(国际协调时间)1970年1月1日午夜(零时)开始经过的毫秒数来保存日期。  
Date类型保存的日期能够精确到1970年1月1日之前或之后285616年（>28万年，呵呵~~）

##### 创建一个日期对象
```javascript
var now = new Date();
// 不传参数的情况下，新创建的对象自动获得当前日期和时间
// 如果想根据特定的日期和时间创建日期对象，必须传入表示改日期的毫秒数
// (即从UTC时间1970年1月1日午夜起至改日期为止经过的毫秒数)

// 有两种方法可以简化这一过程Date.parse()和Date.UTC()
Date.parse()
```

<!-- more -->

#### Date.parse()
```javascript
1. Date.parse()方法接受一个表示该日期的字符串参数，然后尝试根据这个字符串返回相应的日期的毫秒数
2. ECMA-262没有定义 Date.parse()应该支持那种日期格式，因时间/地区而异

* "月/日/年",如 6/13/2004
* "英文月名 日 年",如January 12,2004
* "ISO 8610扩展格式",YYYY-MM-DDTHH:mm:ss.sssZ(例如：2016-03-21T00:00:00),
   只有兼容ECMAScript的实现支持这种格式

var someDate = new Date(Date.parse("May 25, 2004"));

3. 如果传入 Date.parse()方法的字符串不能表示日期，那么它返回NaN。实际上，
如果直接将表示日期的字符串传递给Date构造函数，也会在后台调用Date.parse()

var someDate = new Date("May 25, 2004"); // 与上面一句等价

```

#### Date.UTC()

```javascript
1. Date.UTC()也返回表示日期的毫秒数，但与 Date.parse()在构建值时使用不同的信息。
2. Date.UTC()的参数分别是年份、基于0的月份（一月是0，二月是1……）、月中的哪一天（1到31）、小时数（0到23）、分钟、
秒以及毫秒数。在这些参数中，只有前两个参数(年和月)是必需的。如果没有提供月中的天数，则假设天数为1；如果省略其他参数，则统统假设为0.

// GMT时间2000年1月1日午夜零时
// GMT: 格林尼治标准时间
var y2k = new Date(Date.UTC(2000, 0)); // 基于GMT创建

// GMT时间2016年3月21日下午5:55:55
var t_321 = new Date(Date.UTC(2016, 2, 21, 17, 55, 55)); // 基于GMT创建

// 如同模仿Date.parse()一样，Date构造函数也会模仿Date.UTC()，
// 但有一点明显不同：日期和时间都 **基于本地时区** 而非GMT来创建
// 不过，Date构造函数接收的参数仍然与Date.UTC()相同
var t_321 = new Date(2016, 2, 21, 17, 55, 55); // 与上面一句等价，基于本地时区，而非GMT创建

```


##### 不同浏览器下Date.UTC和new Date()的区别

chrome下的new Date()为GMT时间
![](/uploads/date-chrome01.png)

Firefox下的new Date()为本地时间
![](/uploads/date-ff01.png)

> 区别很明显，虽然new Date(Date.UTC(2016,2,31))都会比new Date()快8个小时，  
但chrome是在2016年3月31 00:00:00的基础上加8个小时  
而firefox是2016年3月31 00:00:00不变，new Date()却减了8个小时

总之，个人觉得还是不要用new Date(Data.UTC());
推荐使用new Date(Date.parse("3/21/2016"))


