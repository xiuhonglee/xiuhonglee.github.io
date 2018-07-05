---
title: gulp常用插件（1）
date: 2016-04-08 14:37:14
tags: Gulp
---
#### 本节内容
```sh 
自启动Node服务插件
同一个项目使用Gulp和Grunt
```

#### 自启动Node服务
<cite style="background: #f5f5d5;padding:10px;">刚开始学习node时，每次修改完app.js，都去手动敲$ node app.js重启node Server，在stackoverflow上发现了gulp-develop-server这个插件
</cite>

* 特点：task可以监听app.js文件变化，自动重启Node Server☞[插件地址](https://github.com/narirou/gulp-develop-server)
* 监听文件变化需要结合gulp-livereload这个插件使用
* server.restart == server.changed
* 下面是示例
```javascript
var gulp = require('gulp'),
    server = require('gulp-develop-server'),
    livereload = require('gulp-livereload');

var options = {
    path: './app.js'
};

var serverFiles = [
    './app.js'
];

gulp.task('server:start', function() {
    server.listen(options, livereload.listen);
});

// If server scripts change, restart the server and then livereload.
gulp.task('default', ['server:start'], function() {

    function restart(file) {
        server.changed(function(error) {
            if (!error) livereload.changed(file.path);
        });
    }

    gulp.watch(serverFiles).on('change', restart);
});
```

<!-- more -->

#### 同一个项目使用Gulp和Grunt
<cite style="background: #f5f5d5;padding:10px;">有这样一个需求，要在项目中使用grunt-phantomas这个插件做自动化监控，可是项目当初使用的Gulp。难道为要为了使用这个插件弃用Gulp？果然：我遇到的每个问题已经有100个人（何止）也遇到过，找到了解决方案，就是（gulp-grunt，This classifies gulp-grunt as gulpfriendly, not a gulpplugin.）☞[地址](https://www.npmjs.com/package/gulp-grunt)
</cite>

##### 步骤一
```sh 
$ npm install gulp-grunt --save-dev
```
> gulp和grunt可以共用package.json，它们的插件可以放在一起

##### 步骤二
新建Gruntfile.js文件，gulpfile.js和Gruntfile.js里写各自的task即可。

##### 步骤三
```javascript 
// Gruntfile.js里的uglify task
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
            },
            build: {
                src: 'public/js/index.js',
                dest: 'build/index.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('uglify');
};

// Gulpfile.js里的uglify task
var gulp = require('gulp');
require('gulp-grunt')(gulp); // 重点是这句，建立了gulp-grunt的连接机制
gulp.task('grunt-uglify'); // 然后就可以调用grunt的task

```

























