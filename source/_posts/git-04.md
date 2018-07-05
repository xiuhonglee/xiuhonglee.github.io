---
title: Git常用命令（4）
date: 2016-02-16 17:43:52
tags: Git
---
#### 本节内容
```sh
查看提交历史
```

#### 查看提交历史
```sh
<!-- 主要命令 -->
# SHA-1校验和 / 提交时间 / 作者 / 邮件 / 提交时间
$ git log 

# 显示每次提交的内容差异，-n显示最近n次提交
$ git log -p -n 

# 提交摘要，仅显示简要的增改行数统计
$ git log --stat

# 高度可自定义 
$ git log --pretty=oneline

```

<!-- more -->

##### git log --pretty
```sh 
$ git log --pretty=format:"%h - %an, %ar : %s"

选项   说明
%h  提交对象的简短哈希字串
%an 作者（author）的名字
%ae 作者的电子邮件地址
%ad 作者修订日期（可以用 -date= 选项定制格式）
%ar 作者修订日期，按多久以前的方式显示
%cn 提交者(committer)的名字
%ce 提交者的电子邮件地址
%cd 提交日期
%cr 提交日期，按多久以前的方式显示
%s  提交说明

```