---
title: Git常用命令（7）- 远程分支
date: 2016-02-24 19:10:22
tags: Git 
---
#### 本节内容
```sh 
关联远程仓库分支
$ git branch --set-upstream-to=origin/<branch> dev
```

#### 关联远程仓库分支

```sh 
# 当从远程仓库clone的时候，git会自动把本地的master和远程的master对应起来
# 并且远程仓库的的默认名称是origin
# 推送分支，添加上分支的名称，就能把分支推送到远程对应的分支上

# 默认
$ git push origin master 

# 如果远程没有该分支会自动添加
$ git push origin dev  

# 但如果远程存在dev分支，且本地仓库是从origin clone来的，那么需要自己建立分支；如下
# 这个命令会省去一个麻烦，就是它会自动添加本地分支和远程分支关系；
$ git checkout -b dev origin/dev # 已经关联远程分支

# 如果自己建立分支dev，修改代码后提交到远程dev分支
$ git chekout -b dev 
###  make some change ###
```

<!-- more -->

```sh 
$ git push
# 会提示：There is no tracking information for the current branch.
Please specify which branch you want to merge with.
……
If you wish to set tracking information for this branch you can do so with:
    git branch --set-upstream-to=origin/<branch> dev
# 说是你的本地分支dev没有和远程的dev分支关联起来，关联分支的命令也告诉你了 

$ git branch --set-upstrea-to=origin/dev dev
# 关联分支之后，还需要git pull一下远程分支代码进行合并

$ git pull 
# 这个命令会弹出vim编辑界面，是告诉你远程的dev分支要和你本地的dev进行合并
# 这里提醒输入合并信息，如果 :q 退出，则会取消合并

$ git push 
# 然后push就可以推送本地分支dev代码到远端分支dev了

```

