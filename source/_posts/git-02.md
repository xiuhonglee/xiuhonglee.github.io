---
title: Git常用命令（2）
date: 2016-02-14 08:49:46
tags: Git
---

![](/uploads/git-life-style.png)

#### 本节内容
```sh
检查当前文件状态
跟踪新文件
暂存已修改文件
忽略某些文件
```

#### 检查当前文件状态
```sh 
$ git status
On branch master
nothing to commit, working directory clean

# 示例信息
已跟踪文件未被更改过
没有未跟踪的新文件
当前所在分支为master
```

<!--more-->

> 创建新文件 README，保存退出后运行 git status

```sh
$ vim README
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

        README

nothing added to commit but untracked files present (use "git add" to track)

# 示例信息
README出现在Untracked files下
Git在之前的快照（提交中）没有README这个文件
除非手动跟踪README，git不会自动跟踪文件
```

#### 跟踪新文件
```sh 
$ git add README
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   README

# 示例信息
只要是在Changes to be committed下面，就说明是已暂存状态
如果此时提交，文件此时的版本将被留存在历史记录中
git add后面可以指明要跟踪文件或目录路径。
如果是目录，就说明要递归跟踪该目录下的所有文件
```

> git add 是个多功能命令，根据目标文件的状态不同，此命令的效果也不同：可以用它开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态

#### 忽略某些文件

> 对于一些自动生成的日志文件、编译过程中创建的临时文件，不需要git进行跟踪。创建.gitignore，列出要忽略的文件模式(可用正则)。

```sh
# 此为注释 – 将被 Git 忽略
# 忽略所有 .a 结尾的文件
*.a
# 但 lib.a 除外
!lib.a
# 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
/TODO
# 忽略 build/ 目录下的所有文件
build/
# 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
doc/*.txt
# ignore all .txt files in the doc/ directory
doc/**/*.txt
```
