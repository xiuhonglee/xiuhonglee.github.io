---
title: jasmine-基础语法
date: 2016-03-03 07:50:00
tags: 前端测试
---
#### 本节内容
```sh 
jasmine基础语法
```

> jasmine有四个核心概念：分组(Suites)、用例(Specs)、期望(Expectations)、匹配(Matchers)

**示例**
```javascript 
describe("A suite", function() { // 测试组 （可一组测试用例） 
    var a;

    it("A spec", function() { // 测试用例
        a = true;
        expect(a).toBe(true); // 期望匹配
    });

    describe("a suite", function() { // 测试组内分组
        it("a spec", function() { // 测试用例
            expect(a).toBe(true); // 期望匹配
        });
    });

});

// 1 Suites可以理解为一组测试用例，使用全局的Jamine函数describe创建
// 2 Specs可以理解为一个测试用例，使用全局函数的it创建
// 3 Expectations由expect函数创建，和Matcher一起联用，设置测试的预期值

```







