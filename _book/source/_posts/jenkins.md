---
title: 搭建Jenkins Server(安装Jenkins)
date: 2016-04-16 10:13:11
tags: Jenkins
---
#### 本节内容
```sh 
CentOS下安装Jenkins
```

#### 需求/信息
* 在远程Server上安装Jenkins，搭建CI环境
* 服务器在bandwagonhost(搬瓦工)购买的,安装速度够快~推荐
* Server OS: CentOS

#### CentOS安装Jenkins
[官网教程](wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo)
```sh
1. ssh连接远程主机（服务器），下面是Mac连接方式
[本地]$ ssh root@IpAddress -p 

2. 进入远程主机安装Jenkins
非root用户下面命令加sudo 
[远程主机]# wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo
[远程主机]# rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key
[远程主机]# yum install jenkins

3. 安装Java
# yum install java

4. 启动/停止/重启Jenkins
# service jenkins start/stop/restart
# chkconfig jenkins on(这句检查是否成功，如果没有报错就说明成功了)

5. 如果上面步骤没有报错，此时就可以通过IP访问到Jenkins界面了
[远程主机IP地址:端口] 127.0.0.1:8080

6. 安装目录: /usr/lib/jenkins
7. jenkins配置文件: /etc/sysconfig
```








