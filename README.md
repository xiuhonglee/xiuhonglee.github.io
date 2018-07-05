##### 搭建步骤

###### 1.申请GitHub Pages空间 [教程](https://pages.github.com/)
```
补充：
    1.默认空间访问地址（url）:http://username.github.io 
    2.可绑定自己的域名地址（可选）
```


###### 2.博客框架Hexo [官网](https://hexo.io/) 
```
******[主要命令](https://hexo.io/docs/commands.html)******

# 安装命令行工具
$ npm install -g hexo-cli

# 初始化网站项目
$ hexo init [folder]

# 生成静态文件
$ hexo generate

# 测试用,启动本地服务器测试，默认http://localhost:4000/
$ hexo server

# 部署网站
$ hexo deploy 
    补充：在部署之前，设置好_config.yml(下面有说明)
```

###### 3.Hexo配置文件_config.yml
```
主要配置项
...
1.访问站点地址URL
    # 站点访问地址(需修改)
    url: http://xiuhonglee.com 

    # baseUrl(默认)
    root: /
...

2.部署deploy配置

...
deploy:

  # 提交方式
  type: git

  # 提交地址(github仓库地址)
  repo: https://github.com/xiuhonglee/xiuhonglee.github.io.git

  # 提交分支
  branch: master

  # 提交说明，相当于commit message
  message: xxx
...

```

###### 主题NexT配置 (可自行选择主题进行配置)

> 本站使用NexT主题，[参考](https://github.com/iissnan/hexo-theme-next)


###### 未完成
1.多说评论
