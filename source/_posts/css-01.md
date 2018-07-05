---
title: css技巧（01）
date: 2016-03-08 20:32:06
tags: CSS
---
#### 本节内容
```sh 
垂直对齐
使用:not()添加去除不需要的边框
两个span元素垂直居中
```

#### 垂直对齐
> 在容器中将文本或元素垂直对齐；使用CSS3的Transform属性

```css
.verticalcenter {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}
```

#### 使用:not()添加/去除导航上不需要的边框
```css

/*** 普通写法 ***/
.nav li { 
     border-right: 1px solid #666; 
}

nav li:last-child {
     border-right: none; 
}

/*** 使用not ***/
.nav li:not(:last-child) {
    border-right: 1px solid #666;
}
```

#### 两个span元素垂直居中

- html
```html
<div class="position">
    <span class="yours">Your current position：</span>
    <span class="name">New York</span>
</div>
```

- css
```css
.position {
    height:70px;
    background-color:gray;
}
.position span {
    line-height:70px;
    vertical-align: middle;
    display: inline-block;
}
.position .name {
    font-size:28px;
    vertical-align: middle;
    display: inline-block;
}
```




