---
title: Git常用命令（0） - 配置篇
date: 2016-02-24 19:25:14
tags: Git
---
#### 本节内容
```sh 
Git高效配置
```

#### Git高效配置

##### Git别名配置
```sh 
$ git config --global alias.co checkout
$ git config --global alias.ci commit
$ git config --global alias.st status
$ git config --global alias.br branch
$ git config --global alias.hist 'log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short'

# 或在.gitconfig文件中进行配置

[alias]
  co = checkout
  ci = commit
  st = status
  br = branch
  hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short

```