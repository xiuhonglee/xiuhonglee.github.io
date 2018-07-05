---
title: jQuery.deferred
date: 2016-02-15 11:20:35
tags: jQuery
---

#### 本节内容
```sh
Deferred对象介绍
Promise对象介绍
接口方法介绍
```

#### Deferred对象介绍
1. Deferred代表了将要完成的某种操作
2. 它是jQuery对Promise接口的实现
3. jQuery的所有Ajax操作函数，默认返回的就是一个Deferred对象
4. promise的核心思想就是让非同步操作返回一个对象，其它后续操作在此对象上完成

#### Promise对象

> deferred.promise()在原来的Deferred对象上返回一个Deferred对象，即受限制的Promise对象，受限制的Promise对象将屏蔽与改变执行状态有关的方法（比如resolve方法和reject方法），从而使得执行状态不能被改变。

```javascript
// Example
Twitter = {
  search:function(query) {
    var dfd = $.Deferred();
    $.ajax({
     url:"http://search.twitter.com/search.json",
     data:{q:query},
     dataType:'jsonp',
     success:dfd.resolve
    });
    return dfd.promise();
  }
}
// 任意操作都可以用done()和fail()指定回调函数
Twitter.search().fail(cb1).done(cb2)
```

<!-- more -->

#### 接口方法介绍
* 1. deferred.always()
```javascript
// 创建Deferred对象
var deferred = $.Deferred();
// 不管状态变为resolved或rejected，都会触发的方法
deferred.always()

// Example:
$.get( "test.php" ).always(function() {
  alert( "$.get completed with success or error callback arguments" );
});
```

* 2. deferred.done()
```javascript
// deferred对象状态变为resolved时触发
deferred.done()

// Example
$.get( "test.php" ).done(function() {
  alert( "$.get succeeded" );
});
```


* 3. deferred.fail()
```javascript
// deferred对象状态变为rejected时触发
deferred.fail()

// Example
$.get( "test.php" )
  .done(function() {
    alert( "$.get succeeded" );
  })
  .fail(function() {
    alert( "$.get failed!" );
  });
```


* 4. deferred.progress() 和 deferred.notify() 
```javascript
// Example
function cb() {
    alert('progress')
}
var deferred = $.Deferred()
deferred.progress(cb)

// 每隔两秒执行一次回调（notify触发）
setInterval(function() {
    deferred.notify()
}, 2000)

// progress用来指定一个回调函数
// 当调用notify()方法时，该回调函数执行

```

* 5. deferred.then()
```javascript
// 指定回调函数，三个参数
// 第一个参数，resolve时调用的回调函数（相当于done）
// 第二个参数，reject时调用的回调函数（相当于fail）
// 第三个参数，progress方法调用的回调函数
deferred.then( doneFilter [, failFilter ] [, progressFilter ] )

// Example；done()/fail()
$.get( "test.php" ).then(
  function() {
    alert( "$.get succeeded" );
  }, function() {
    alert( "$.get failed!" );
  }
);

// 改变返回值（Filter the resolve/fail value）
var filterResolve = function() {
  var defer = $.Deferred(),
    filtered = defer.then(function( value ) {
      return value * 2;
    });
 
  defer.resolve( 5 );
  filtered.done(function( value ) {
    $( "p" ).html( "Value is ( 2*5 = ) 10: " + value );
  });
};
 
$( "button" ).on( "click", filterResolve );

// 改变返回值
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
 
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```

* 6. deferred.when()
```javascript
// when接受多个deferred对象，当它们全部运行成功后
// 才调用resolved状态的回调函数
// 只要有一个失败，就调用rejected状态的回调函数
// 返回一个单一的promise对象
$.when(
    $.ajax( "/main.php" ),
    $.ajax( "/modules.php" ),
    $.ajax( "/lists.php" )
).then(successFunc, failureFunc);

// when方法里要执行多少个操作，回调函数就有多少个参数
// 对应前面每一个操作的返回结果 
$.when(
    $.ajax( "/main.php" ),
    $.ajax( "/modules.php" ),
    $.ajax( "/lists.php" )
).then(function (resp1, resp2, resp3){
    console.log(resp1);
    console.log(resp2);
    console.log(resp3);
});

// when方法的参数可以不是deferred/promise对象
// 此时的参数直接作为回调函数的参数
d = $.Deferred()  
$.when(d, 'World').done(function (s1, s2){
    console.log(s1);
    console.log(s2);
})

d.resolve('Hello')  // outPut: hello world

```


    
















