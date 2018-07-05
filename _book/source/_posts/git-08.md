---
title: Git常用命令（8）- 打标签
date: 2016-02-25 20:37:07
tags: Git
---
#### 本节内容
```sh 
列出已有标签
新建附注标签
新建轻量级标签
分享标签
```

#### 列出已有标签
```sh 
# 结果按字母排序
$ git tag

# 支持正则搜索
# 匹配所有v1.1相关标签
$ git tag -l 'v1.1*'

```

#### 新建标签
```sh 
Git使用标签有两种类型：
轻量级(lightweight): 相当于软链接吧（个人理解）；它是个指向特定提交对象的引用   
含附注(annotated): 硬链接；实际存储在仓库中的一个对象，有自身的校验和信息


# 新建含附注(annotated)标签
-------------------------------------------------------
# -a: annotated
# -m: 添加标签提示信息（和commit的-m一样）
# 不加-m的话会进入vim编辑页面，:q退出的话取消新建
$ git tag -a v1.1 -m 'my version 1.4'

# 查看标签tag
$ git show v1.1
# 显示标签的版本信息
# 显示打标签的提交对象
-------------------------------------------------------

# 新建轻量级标签
-------------------------------------------------------
# 不用加任何参数
$ git tag v1.2

# 查看标签信息
$ git show v1.2
# 只会显示提交对象摘要
-------------------------------------------------------
```

<!-- more -->

#### 分享标签

```sh 
1 默认情况下，git push 不会把标签传到服务器
2 分享标签git push origin [tagname]

# 推送指定标签
$ git push origin v1.2
    Counting objects: 50, done.
    Compressing objects: 100% (38/38), done.
    Writing objects: 100% (44/44), 4.56 KiB, done.
    Total 44 (delta 18), reused 8 (delta 1)
    To git@github.com:schacon/simplegit.git
    * [new tag]         v1.5 -> v1.5


# 一次推送所有标签
$ git push origin --tags
    Counting objects: 50, done.
    Compressing objects: 100% (38/38), done.
    Writing objects: 100% (44/44), 4.56 KiB, done.
    Total 44 (delta 18), reused 8 (delta 1)
    To git@github.com:schacon/simplegit.git
     * [new tag]         v0.1 -> v0.1
     * [new tag]         v1.2 -> v1.2
     * [new tag]         v1.4 -> v1.4
     * [new tag]         v1.4-lw -> v1.4-lw
     * [new tag]         v1.5 -> v1.5
```

