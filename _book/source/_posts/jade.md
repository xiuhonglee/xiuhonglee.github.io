---
title: Jade模板引擎 
date: 2016-02-11 17:11:39
tags: 模板引擎
---

![jade logo](/uploads/jade.jpeg)

> 因为学习Node，用到了Jade模板引擎，花点时间整理了下；Node Template Engine，当然使用也不限于Node。类似的模板引擎还有doT/smarty/FreeMarker，都是为了节省代码量，数据和html融合在一起，还说不出哪个好用；不过Jade靠代码缩进来区别标签层级容易报错，使用时小心。

[官网：offcial](http://jade-lang.com/command-line/)

#### 常用命令

##### 安装

```sh
    sudo npm install jade -global 
```

##### 编译jade文件
```sh
    jade index.jade 
    jade -P index.jade (-P:格式化输出)
```

##### 实时编译
```sh
jade -P -w index.jade (-w:watch,实时监控文件输出)
```

#### 常用语法

[官网：reference](http://jade-lang.com/reference/)
<!--more-->

##### 属性（Attributes）
```html
<!-- 常规 -->
a(class='button', href='google.com') Google
<a href="google.com" class="button">Google</a>

<!-- 定义变量 -->
- var authenticated = true
body(class=authenticated ? 'authed' : 'anon')
<body class="authed"></body>

<!-- 转义 -->
div(escaped="<code>")
<div escaped="&lt;code&gt;"></div>

<!-- 非转义:不推荐使用 -->
div(unescaped!="<code>")
<div unescaped="<code>"></div>

<!-- Boolean Attributes -->
input(type='checkbox', checked)
<input type="checkbox" checked="checked"/>

input(type='checkbox', checked=true)
<input type="checkbox" checked="checked"/>

input(type='checkbox', checked=false)
<input type="checkbox"/>

<!-- Style Attributes -->
a(style={color: 'red', background: 'green'})
<a style="color:red;background:green"></a>

<!-- Class Attributes -->
- var classes = ['foo', 'bar', 'baz']
a(class=classes)
<a class="foo bar baz"></a>

a.button
<a class="button"></a>

.content
<div class="content"></div>

<!-- ID Literal -->
a#main-link
<a id="main-link"></a>

#content
<div id="content"></div>

```

##### 条件判断（case）

```html
- var friends = 10
case friends
  when 0
    p you have no friends
  when 1
    p you have a friend
  default
    p you have #{friends} friends

<p>you have 10 friends</p>

```

##### 加注释
```html
单行注释  =>  '//', 会在代码中保留
非缓冲注释 => '//- ' 注释文本不会在文本中保留

<!-- 块注释 -->
body
  //
    As much text as you want
    can go here.

<body>
  <!--
  As much text as you want
  can go here.
  -->
</body>

<!-- Conditional Comments -->
<!--[if IE 8]>
<html lang="en" class="lt-ie9">
<![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en">
<!--<![endif]-->
```

##### 条件判断（if-else）
* if-else
```javascript
- var user = { description: 'foo bar baz' }
- var authorised = false
#user
  if user.description
    h2 Description
    p.description= user.description
  else if authorised
    h2 Description
    p.description.
      User has no description,
      why not add one...
  else
    h1 Description
    p.description User has no description
```
* output
```html
output:
<div id="user">
  <h2>Description</h2>
  <p class="description">foo bar baz</p>
</div>
```
* unless 
```javascript
unless user.isAnonymous
  p You're logged in as #{user.name}

等价于

if !user.isAnonymous
  p You're logged in as #{user.name}
```

##### 继承(extends)

* 父文件（layout.jade）
```javascript
//- layout.jade
doctype html
html
  head
    block title
      title Default title
  body
    block content
```
* 继承文件（index.jade）
```javascript
//- index.jade
extends ./layout.jade

block title
  title Article Title

block content
  h1 My Article
```
* 结果输出
```html
//- output

<!doctype html>
<html>
  <head>
    <title>Article Title</title>
  </head>
  <body>
    <h1>My Article</h1>
  </body>
</html>

```

##### 过滤器
* 可以在jade模板中使用其他语法，如：coffee-script、babel、uglify-js、less、markdown
```javascript
:markdown
  # Markdown
  I often like including markdown documents.
script
  :coffee-script
    console.log 'This is coffee script'
```
* output
```html
<h1>Markdown</h1>
<p>I often like including markdown documents.</p>
<script>console.log('This is coffee script')</script>
```

##### 引用（includes）
* jade文件之间相互引用
```java
//- index.jade
doctype html
html
  include ./includes/head.jade
  body
    h1 My Site
    p Welcome to my super lame site.
    include ./includes/foot.jade
```

* includes/head.jade
```java
head
  title My Site
  script(src='/javascripts/jquery.js')
  script(src='/javascripts/app.js')
```

* includes/foot.jade
```java
#footer
  p Copyright (c) foobar
```

> 补充：类似可引入.css/.js文件 


##### 迭代（Iteration）
* each
```html
ul
  each val in [1, 2, 3]
    li= val

<!-- output -->
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

* each 迭代数组
```html
ul
  each val, index in ['zero', 'one', 'two']
    li= index + ': ' + val

<!-- output -->
<ul>
  <li>0: zero</li>
  <li>1: one</li>
  <li>2: two</li>
</ul>
```

* each 迭代对象
```html
ul
  each val, index in {1:'one',2:'two',3:'three'}
    li= index + ': ' + val

<!-- output -->
<ul>
  <li>1: one</li>
  <li>2: two</li>
  <li>3: three</li>
</ul>
```

* 还可以容错处理（空值情况）
```html
- var values = [];
ul
  each val in values.length ? values : ['There are no values']
    li= val

<!-- output -->
<ul>
  <li>There are no values</li>
</ul>
```

* while
```html
- var n = 0;
ul
  while n < 4
    li= n++
s
<!-- output -->
<ul>
  <li>0</li>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

##### Mixins
* Mixins 可用来定义可服用的代码块
```html
//- Declaration
mixin list
  ul
    li foo
    li bar
//- Use
+list
+list

<!-- output -->
<ul>
  <li>foo</li>
  <li>bar</li>
</ul>
<ul>
  <li>foo</li>
  <li>bar</li>
</ul>
```

* Mixins传递参数
```html
mixin pet(name)
  li.pet= name
ul
  +pet('cat')
  +pet('dog')
  +pet('pig')

<!-- output -->
<ul>
  <li class="pet">cat</li>
  <li class="pet">dog</li>
  <li class="pet">pig</li>
</ul>
```

* Mixins Blocks
```html
mixin article(title)
  .article
    .article-wrapper
      h1= title
      if block
        block
      else
        p No content provided

+article('Hello world')

+article('Hello world')
  p This is my
  p Amazing article

<!-- output -->
<div class="article">
  <div class="article-wrapper">
    <h1>Hello world</h1>
    <p>No content provided</p>
  </div>
</div>
<div class="article">
  <div class="article-wrapper">
    <h1>Hello world</h1>
    <p>This is my</p>
    <p>Amazing article</p>
  </div>
</div>
```

* Mixins Rest Arguments
```html
mixin list(id, ...items)
  ul(id=id)
    each item in items
      li= item
+list('my-list', 1, 2, 3, 4)

<!-- output -->
<ul id="my-list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
```

##### 混合的文本和标签
``` javascript
a 大段的文本会换行  
方案一：竖线加空格，独立成一行
    p 
        | 1.aa
        | 2.bb
        | 3.cc

方案二：紧贴p加点
    p. 
        1.aa
        2.bb
        3.cc

b 标签文本混合在一起
p. 
    1.aa<strong>22</strong>
    2.bb
    <span>333</span>
    3.cc    
    <a href="#" />
```

#### jade API
[官网：official](http://jade-lang.com/api/)

##### jade.compile

```javascript
/***
语法：jade.compile (source, options)
params:
    source <string>    源jade string
    options <options>  常见pretty:true增强可读性
    return <function>  该function接受变量渲染出html
***/

var jade = require('jade');

// Compile a function
var fn = jade.compile('div #{course}', options);

// Render the function
var html = fn({course: 'local value'});
// => '<div>local value</div>'

```

##### jade.compileFile

```javascript
/***
    语法：jade.compileFile (path, options)
    params 同上 
***/

var jade = require('jade');

// Compile a function
var fn = jade.compileFile('path to jade file', options);

// Render the function
var html = fn(locals);
// => '<string>of jade</string>'
```

##### jade.render
```javascript
/***
    语法：jade.render (source, options)
    注：这里的options可传入变量locals 
***/
var jade = require('jade');

var html = jade.render('div #{course}', {course: 'jade render'});
// => '<div>jade render</div>'
```

##### jade.renderFile
```javascript
/*** 语法：jade.renderFile (source, options) ***/
var jade = require('jade');
var html = jade.renderFile('path/to/file.jade', options);
```
