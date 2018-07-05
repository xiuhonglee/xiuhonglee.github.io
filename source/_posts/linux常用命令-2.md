---
title: linux常用命令(2)
date: 2016-04-13 10:01:22
tags: Linux 
---
#### 本节内容
```sh 
Linux定时执行任务
Linux关闭进程
```

#### 设置editor打开方式 
```sh 
$ EDITOR=vim; export EDITOR
```

#### Linux定时执行任务
```sh
# 命令格式 at[参数][时间] 

# 命令功能：在一个指定的时间执行一个指定任务，只能执行一次

# 需要开启atd进程
$ ps -ef | grep atd  查看

# mac下开启服务
$ sudo launchctl unload -F /System/Library/LaunchDaemons/com.apple.atrun.plist
$ sudo launchctl load -F /System/Library/LaunchDaemons/com.apple.atrun.plist

# 示例
$ at 13:00
>  ls 
> <EOT>

# 详细用法如下
$ man at 
```

#### crontab
```sh 
# mac下启动、关闭cron服务
$ launchctl load -w /System/Library/LaunchDaemons/com.vix.cron.plist
$ launchctl unload -w /System/Library/LaunchDaemons/com.vix.cron.plist

###  使用方法，step by step  ###
1. 设置crontab -e 默认打开浏览器，推荐用nano，vim可能会报错
$ EDITOR=nano; export=EDITOR
2. 编写任务crontab job
$ crontab -e  // 这条命令会用nano打开编辑框，下面是每分钟执行下指定目录的脚本任务（一定要用绝对路径，脚本里也是）
* * * * * /Users/xiuhong/xh_github/monitoring/gruntPhantomas/task.sh
3. 保存退出即可，crontab会自动运行

### 下面这个是我的脚本，一定要用绝对路径！！！包括命令也是  ###
#!/bin/sh
PATH=/usr/local/bin:/usr/local/sbin:~/bin:/usr/bin:/bin:/usr/sbin:/sbin
cd /Users/xiuhong/xh_github/monitoring/gruntPhantomas
/usr/local/bin/grunt 
```

#### Linux关闭进程

需求：node进程在后台开启，如何通过shell关闭
```sh 
# 查看当前进程
$ lsof -Pi | grep LISTEN
mongod     8662 jacob    6u  IPv4 0x17ceae4e0970fbe9      0t0  TCP localhost:27017 (LISTEN)
mongod     8662 jacob    7u  IPv4 0x17ceae4e0f9c24b1      0t0  TCP localhost:28017 (LISTEN)
……

# 也可以这样查找
$ netstat -nlp | grep :8341
    
# 终止与node相关的服务
$ killall node 

```

![](/uploads/linux2-kill.png)

