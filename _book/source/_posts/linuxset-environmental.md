---
title: linux设置全局命令
date: 2016-08-28 12:27:38
tags: Linux
---
[原文：How To Read and Set Environmental and Shell Variables on a Linux VPS](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps)

> 需求：想自定义一些shell命令可以在全局应用。每次提交代码，git add . & git commit -m 'xxx'，是否可使用一个命令实现上面的需求。

##### 1. 介绍

When interacting with your server through a shell session, there are many pieces of information that your shell compiles to determine its behavior and access to resources. Some of these settings are contained within configuration settings and others are determined by user input.

One way that the shell keeps track of all of these settings and details is through an area it maintains called the environment. The environment is an area that the shell builds every time that it starts a session that contains variables that define system properties.

In this guide, we will discuss how to interact with the environment and read or set environmental and shell variables interactively and through configuration files. We will be using an Ubuntu 12.04 VPS as an example, but these details should be relevant on any Linux system.










