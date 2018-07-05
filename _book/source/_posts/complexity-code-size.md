---
title: 编写可测试的JavaScript代码（二）
date: 2017-03-15 11:15:18
tags: 前端测试
---

![](https://s10.mogucdn.com/p2/170315/116560224_22ee0693bj8hk363lc47k056lklke_360x432.jpg)

#### 1. 背景
> 业务需求增加/变更，导致代码量上升，代码复杂度上升，代码出错的几率上升。解决方案：控制代码量。不一定是要减少整体代码量，但可以控制函数大小来降低代码复杂度。其中一个有效的方法是把指令(Command)和查询(Query)分离。指令类函数只做赋值类操作(Do Something)；查询函数返回结果(Return Somethig)。

#### 2. 复杂函数

##### 2.1 复杂函数

```javascript
function configure(values) {
  var fs = require('fs'),
    config = {
      docRoot: '/somewhere'
    },
    key,
    stat
  for (key in values) {
    config[key] = values[key];
  }
  try {
    stat = fs.statSync(config.docRoot);
    if (!stat.isDirectory()) {
      throw new Error('Is not valid');
    }
  } catch (e) {
    console.log("** " + config.docRoot +
      " does not exist or is not a directory!! **");
    return;
  }
  // ... check other values ...
  return config;
}

```

##### 2.2 针对复杂函数的测试

```javascript
describe("configure tests", function() {
    it("undef if docRoot does not exist", function() {
        expect(configure({
            docRoot: '/xxx'
        })).toBeUndefined();
    });
    it("not undef if docRoot does exist", function() {
        expect(configure({
            docRoot: '/tmp'
        })).not.toBeUndefined();
    });
    it("adds values to config hash", function() {
        var config = configure({
            docRoot: '/tmp',
            zany: 'crazy'
        });
        expect(config).not.toBeUndefined();
        expect(config.zany).toEqual('crazy');
        expect(config.docRoot).toEqual('/tmp');
    });
    it("verifies value1 good...", function() {});
    it("verifies value1 bad...", function() {});
    // ... many more validation tests with multiple expects...
});

```

> 上面的configure函数做了Command和Query两件事情。Command: 判断合法性；Query: return config。下面针对configure函数的测试就显得很臃肿。首先，每个检测合法性的断言句无法复用，当每次对config添加属性都要对新的属性添加测试用例(因为每个属性的合法性检测标准不一样)。而且，所有断言被包裹在一个describe下，无法单独对某个属性编写测试用例。

#### 3.复杂函数拆分

**Query部分**

```javascript
function configure(values) {
  var config = {
      docRoot: '/somewhere'
    },
    key;
  for (key in values) {
    config[key] = values[key];
  }
  return config;
}

```

**Command部分**

```javascript

// validateDocRoot
function validateDocRoot(config) {
  var fs = require('fs'), stat;
  stat = fs.statSync(config.docRoot);
  if (!stat.isDirectory()) {
    throw new Error('Is not valid');
  }
}

// validate something else
function validateSomethingElse(config) { ... }
```

> 测试用例

```javascript
describe("validate value1", function() {
  it("accepts the correct value", function() {
    // some expects
  });
  it("rejects the incorrect value", function() {
    // some expects
  });
});
```

> 经过上面的拆分，针对某个config属性的合法性测试就以相互分离，单独进行测试

































