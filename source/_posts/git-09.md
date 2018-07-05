---
title: Git常用命令（9）-- 关于push/pull 默认行为
date: 2016-02-28 09:07:30
tags: Git
---
```sh 
git push的语法
多分支情况下git push 出现的报错信息分析
git pull默认行为
关于upstream和downstream
关于push.default
```

#### git push语法
```sh 
$ git push <远程主机名> <本地分支名>:<远程分支名> 
# 如果省略远程分支名，则表示将本地分支与之存在“追踪关系”的远程分支(通常两者同名)，
# 如果该远程分支不存在，则会被新建

$ git push origin master
# 上面命令表示，将本地的master分支推送到origin主机的master分支
# 如果后者不存在，则会被新建

# 如果省略本地分支名，则表示删除指定的远程分支
# 等同于推送一个空的本地分支到远程分支
$ git push origin :master
# 等同于
$ git push origin --delete master

# 如果当前分支与远程分支之间存在追踪关系
# 则本地分支和远程分支都可以省略
$ git push origin

# 如果当前分支只有一个追踪分支，那么主机名都可以省略
$ git push 

```

<!-- more -->

#### 多分支情况下git push出现的报错信息
```sh 
# 背景：
# 1 远程和本地有多条分支
# 2 使用git push （不带参数）推送本地分支数据
```

![](/uploads/git-09-push.png)


```sh 
分析：
# 1 红框内表示dev->dev分支推送成功
# 2 绿框内表示master->master分支推送失败
    原因是，本地分支版本落后于远程库版本

# 原因：git push时不带任何参数有两种推送方式
# simple方式：只推送当前分支
# matching方式：推送所有有对应关系的分支
# 显然上面git push出错是因为默认使用了matching方式推送
# 它不但把dev分支推送到了远程库，也尝试把master分支推送到远程库
# 由于本地master分支代码没有拉取合并（pull）过，所以push时报错

解决：
# 1 明确指定推送分支信息
$ git push origin dev:dev

# 2 设置推送方式
$ git config --global push.default simple （推荐）
# 或者
$ git config --global push.default matching
```

#### git pull默认行为
```sh 
$ git pull 
# 实际行为：$ git fetch && git merge
# fetch操作将会更新本地仓库的remote tracking,也就是refs/remotes中的代码，
# 并不会对对refs/heads中当前的代码早晨影响(通俗讲：就是这把代码从远程库取回，并不做合并) 
# merge操作开始尝试合并代码；分歧就在这里，如果当前有多个分支，git 应该把代码合并到哪个分支呢？ 

## 我们需要通过下面的代码指定当前分支的upstream
$ git branch --set-upstream-to=origin/<branch> develop  
<or>
$ git push --set-upstream origin develop 

```

> 实际上，如果我们没有指定upstream，git在merge时会访问git config中当前分支merge的默认配置  

![默认配置](/uploads/git-pull-01.png) 

> 总之，当我们的develope分支git pull时，如果没有指定upstream分支，git将根据我们的配置文件去  
merge origin/develope;如果指定了upstream分支，则会忽略config中的merge默认配置

#### 关于upstream和downstream

![](/uploads/git-pull-02.png)

初次提交本地分支，例如`git push origin develp`操作，并不会定义当前本地分支的upstream分支，可以通过`git push --set-upstream origin develop`，关联本地develop分支的upstream分支，更简洁的办法，加入`-u`参数，例如`git push -u origin develop`，这个操作在push的同时会指定当前分支upstream

#### 关于push.default

1. nothing - push操作无效，除非显式指定远程分支，例如git push origin develop

2. current - push当前分支到远程同名分支，如果远程同名分支不存在则**自动创建**同名分支。

3. upstream - push当前分支到它的upstream分支上（这一项其实用于经常从本地分支push/pull到同一远程仓库的情景，这种模式叫做central workflow）

4. simple - simple和upstream是相似的，只有一点不同，simple必须保证本地分支和它的远程 upstream分支同名，否则会拒绝push操作

5. matching - push所有本地和远程两端都存在的同名分支 
