---
title: 前端自动化-gulp
date: 2016-02-28 13:43:08
tags: Gulp 
---
#### 本节内容
```sh 
手动创建项目框架
gulp常用API
```

#### 手动创建项目框架
```sh 
# 创建项目目录
$ mkdir your_project && cd your_project

# 创建package.json文件
# 会引导输入有关项目的一些信息（如：项目名称、版本、作者信息等）
$ npm init 
```

##### 以jade为例
```sh 
$ npm install jade --dev-save
```

##### 初始化package.json文件
```json
{
  "name": "gulpfile",
  "version": "1.0.0",
  "description": "learn gulp",
  "main": "gulpfile.js",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "xiuhong",
  "license": "ISC"
}
```

<!-- more -->

##### 项目目录结构

```sh

└── view
    ├── head.jade
    ├── index.jade
    └── layout.jade
├── node_modules/
├── package.json
└── gulpfile.js

```

##### gulpfile.js文件
```javascript
var gulp = require('gulp');
var jade = require('gulp-jade');

// 1 gulp.src(globs[, options])
gulp.task('build', function() { 
    gulp.src('view/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('build/minified_templates'));
});

```

#### gulp常用API
```sh 
# 1. gulp.src(globs[, options])
# 参数globs: 匹配模式，将返回一个stream被piped到其它插件中
# 上例中：gulp.src('view/*.jade')将匹配到view下的jade文件，
# 将*.jade文件通过pipe流到下一个插件(jade)被处理

# 2. gulp.dest(path[, options])
# 参数path:目标文件地址
# 上例中：gulp.dest('build/minified_templates')
# 将编译好的文件放到了build/minified_templates文件夹下

# 3. gulp.task(name[, deps], fn) (重点)
# 参数name: task的名字（不要使用空格）
# deps: arr依赖的任务名
# fn: 该函数定义任务所要执行的一些操作，通常是这中形式
# gulp.src().pipe(someplugin())
```

