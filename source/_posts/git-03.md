---
title: Git常用命令（3）
date: 2016-02-15 09:50:01
tags: Git 
---

![](/uploads/git-03-staged.png)

#### 本节内容
```sh
查看已暂存和未暂存的更新
提交更新
跳过使用暂存区域
移除文件
移动文件
```

#### 查看已暂存和未暂存的更新
```sh
$ git diff
# 此命令比较的是工作目录中当前文件和暂存区域快照之间的差异，
# 就是修改之后还没暂存起来的变化内容

$ git diff --cached (Git 1.6.1及高版本 ： --staged)
# --cached和--staged效果相同
# 此命令比较已暂存起来的文件和上次提交的快照之间的差异

```

> 注意：`$ git diff` 不过是显示还没有暂存起来的改动，而不是这次工作和上次提交之间的差异。若一下子暂存了所有更新过的文件后，运行`git diff`后却什么也没有

<!-- more -->

#### 提交更新
```sh 
$ git commit
# 提交更新前，确保修改 / 新建文件已经add过
# 这种方式将会启动文本编辑器以便输入本次提交的说明
#（默认启用shell的环境变量$EDITOR所指定的编辑器，一般为vim）

$ git commit -v
# -v参数会将修改差异的每一行都包含到注释中
# 保存退出时，git会自动去掉注释行（提醒作用而已）
```

```sh
$ git commit -m "Story 182: Fix benchmarks for speed"
[master 463dc4f] Story 182: Fix benchmarks for speed
 2 files changed, 3 insertions(+)
 create mode 100644 README

 # -m : 在一行命令中提交更新
 # 提交分支：master
 # 校验和：463dc4f
 # 改动信息：增删改信息
```

#### 跳过使用暂存区域
```sh
$ git commit -a -m 'added new benchmarks'
# -a : 可跳过git add
# Git会自动把所有已经跟踪过文件暂存起来并一起提交，从而跳过add
```

#### 移除文件   
```sh
$ rm grit.gemspec
# 从Git中移除某个文件，就必须要从已跟踪文件清单中移除（从暂存区中移除），然后提交

$ git rm grit.gemspec
# 记录此次移除文件的操作
# 强制删除选项 -f （不过没有用到过~~~）

$ git rm --cached readme.md
# 从暂存区域移除，移除跟踪；比如一大堆日志文件或编译文件.a
# 不再跟踪文件可在.gitignore文件中补上

$ git rm log/\*.log
# 可以用glob模式（正则）

$ git rm \*~
# 递归删除当前目录及其子目录中所有~结尾的文件
```

#### 移动文件
```sh
$ git mv README.txt README
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        renamed:    README.txt -> README

# 其中，运行git mv 相当于下面三条命令
$ mv README.txt README
$ git rm README.txt
$ git add README

```
























