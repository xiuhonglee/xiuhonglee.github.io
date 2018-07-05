---
title: linux常用命令(1)
date: 2016-02-25 09:45:05
tags: Linux 
---
#### 本节内容
```sh 
反向删除文件
配置环境变量(mac)
更改文件(夹)权限
```

#### 反向删除文件
```sh 
# 先了解一下Linux下强大的文本搜索工具
# 它能使用正则表达是搜索文本，并把匹配的行打印出来
$ grep [-acinv] [--color=auto] '搜索字符串' file-name

# 选项与参数：
# -a : 将binary文件以text文件的方式搜寻数据（并不明白）
# -c : 计算找到 '搜寻字符串'的次数
# -i : 忽略大小写
# -n : 输出行号
# -v : 反向选择（就是用这个参数来实现反向删除文件的）
# --color=auto : 对匹配到的关键词进行高亮显示（鸡肋）

# 实现反向删除；把除README.md之外的文件全部删除
$ rm `ls | grep -v 'README.md'`

```

<!-- more -->

#### 配置环境变量
```sh 
# 首先确定下自己用的是什么shell
$ echo $SHELL
# 我的shell为zsh  => /bin/zsh

# 找到 ~/.zshrc 配置文件进行添加PATH（我的配置）
……………………………………………………………………………………………………………………………………………………
export PATH="$PATH:$HOME/.rvm/bin" 
export PATH="/usr/local/Cellar/mongodb/3.2.0/bin":$PATH
export PATH="/Users/xiuhong/phantomjs/bin":$PATH
……………………………………………………………………………………………………………………………………………………

# 添加PATH的格式如下 
PATH=$PATH:<PATH 1>:<PATH 2>:<PATH 3>:------:<PATH N>

# 使配置马上生效
$ source .zshrc

# 查看配置
$ echo $PATH

```

#### 更改文件(夹)权限
```sh 
# 问题描述：每次保存文件时，总是提示输入sudo psw，估计是要root权限
# 解决方案：修改文件(夹)权限
# 对于目录来说，必须要给x（可执行权限）；这样才能能有进入(cd)到目录中
$ sudo chmod -R a+x folder-name
$ sudo chmod -R 777 folder/file-name

# 修改文件所有者
$ sudo chown username /path/to/directory

```
