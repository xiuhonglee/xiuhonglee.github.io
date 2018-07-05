---
title: Git常用命令（5）
date: 2016-02-18 22:01:21
tags: Git
---
#### 本节内容
```sh 
撤消操作
回退未推送远程仓库
再次回退到新版本
```

#### 修改最后一次提交
```sh 
# 情况一： 所有文件都已提交，只是想修改提交信息
$ git commit --amend

# 情况二： 有文件未提交修改，可先提交，再使用--amend
$ git add test1.md 
$ git commit -m "add test1.md"
$ git add .test2.md 
$ git commit --amend 
```

#### 向后回退未推送远程仓库
```sh
# 本地代码库还没有push，add\commit 后想回退  
$ git reset  [—soft | —mixed | —hard ]  HEAD^ 

#-—soft：会保留源码，只回退到commit的某个版本，
# 不涉及index的回退，如果还需要提交，直接commit即可
# 觉得有点类似 $ git commit --amend

# --mixed：会保留源码，只将git commit 和index(add)信息回退到某个版本  

# --hard：源码也会回退到某个版本，commit和index也会回退（会改变本地代码）
```


#### 再次回退到新版本
```sh
# 查看提交历史版本信息
（包括回退掉的，比如$ git reset --hard HEAD^后，$ git log的信息不回包括reset掉的那个版本） 
$ git reflog

# 回退到指定
$ git reset —hard hash-value 
```

##### 已推送到远程版本回退
```sh 
$ git revert <commit hash>
# 需保证工作目录干净
# 用一次新的提交来覆盖旧的提交

# 别忘了push更新远程目录
git push

```
