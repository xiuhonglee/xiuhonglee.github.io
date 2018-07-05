---
title: Git常用命令（6）
date: 2016-02-20 11:10:09
tags: Git
---
#### 本节内容
```sh
查看当前的远程库
添加远程仓库
从远程仓库抓取数据
推送数据到远程仓库
查看远程仓库信息
```

#### 查看当前的远程库
```sh
# 可以看到一个origin的远程库
$ git remote  

# verbose：详细
$ git remote -v 

```

#### 添加远程库
```sh 
# 自己的本地代码可以来自多个仓库
# 每个仓库默认的名字为orgin，
# 如果项目来自多个仓库，git会提醒使用不同的仓库名字
$ git remote add [shortname] [url]

# 当然可以修改仓库的名字
$ git remote rename [oldname] [newname]

# 也可以删除仓库
$ git remote rm [repositoryName]
```

<!-- more -->

#### 从远程仓库抓取数据
```sh 
# fetch只会将远程仓库的数据拉取到本地，并不会自动合并到本地分支
$ git fetch [remote-name]

# 只有确认准备好，才能手动合并
$ git merge [remote-name]
```

#### 推送数据到远程仓库
```sh 
$ git push [remote-name] [branch-name]
# 要想推送成功，必须保证
# 1 在所clone的服务器上有写权限（就是开通了权限）
# 2 同一时刻没有其他人推送数据

# warn: 如果在你推送数据前，已经有其他人推送了若干分支，你的推送会被驳回
# 就是说，必须先pull更新本地代码，再做提交
```

##### warn情况的报错信息
![](/uploads/git-06-push.png)
```sh 
1. Updates were rejected because the remote contains work that you do
hint: not have locally
翻译： 远程仓库有些数据(work)没有在本地缓存，就是说远程代码仓库版本比本地仓库新

2. This is usually caused by another repository pushing to the same ref
翻译：这是因为有其它仓库（比如其他人的本地仓库）和你提交到了同一个分支

3. You may want to first integrate the remote changes (e.g., 'git pull ...') before pushing again
翻译： 让你在提交前，先合并远程分支（同步远程仓库版本），然后再提交
```

#### 查看远程仓库信息
```sh 
# 我还不大常用，可能更高的需求会用到吧
$ git remote show [remote-name]

# 结果如下
$ git remote show origin
* remote origin
  URL: git://github.com/schacon/ticgit.git
  Remote branch merged with 'git pull' while on branch master
    master
  Tracked remote branches
    master
    ticgit

# 也可能长这样，信息量很足的！！！ 
$ git remote show origin
* remote origin
  URL: git@github.com:defunkt/github.git
  Remote branch merged with 'git pull' while on branch issues
    issues
  Remote branch merged with 'git pull' while on branch master
    master
  New remote branches (next fetch will store in remotes/origin)
    caching
  Stale tracking branches (use 'git remote prune')
    libwalker
    walker2
  Tracked remote branches
    acl
    apiv2
    dashboard2
    issues
    master
    postgres
  Local branch pushed with 'git push'
    master:master
```
