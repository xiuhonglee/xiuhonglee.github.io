---
title: MongoDB
date: 2016-02-12 12:19:16
tags: MongoDB
---
> 学习Node，接触MongoDB不是很熟练，日后慢慢补充; 

#### 安装MongoDB（Mac）
[官网教程](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
```sh
# 安装
$ brew install mongodb

# 全局配置(.zshrc)
export PATH=<mongodb-install-directory>/bin:$PATH

# 启动mongodb服务
$ mongod

# 进入mongodb shell 
$ mogodb

```

#### 启动/关闭MongoDB服务 
```sh
    # 启动服务
    $ mongod

    # 关闭服务
        方法1 
        $ use admin 
        $ db.shutdownServer()

        方法2
        $ kill <mongod proces ID>
```

<!--more-->

#### 创建数据库

```sh   
    # 如果数据库不存在，则创建数据库，否则切换到指定数据库。
    use DATABASE_NAME （imooc）

    # 查看数据库
    show dbsshow dbs

    # 插入数据
    db.imooc.insert({"name":"菜鸟教程"})

    # 删除数据库
    db.dropDatabase()

```

#### 插入文档
* 文档的数据结构和JSON基本一样，所有存储在集合中的数据都是BSON格式，BSON是一种类json的一种二进制形式的存储格式,简称Binary JSON

```sh
    # MongoDB 使用 insert() 或 save() 方法向集合中插入文档
    db.COLLECTION_NAME.insert(document)
```

#### 删除记录

```sh
    # 删除表中数据
    db.movies.remove({});
    # 删除表
    db.movies.drop();
    # 查询表长度
    db.movies.find({}).count();
```