---
layout: post
title:      JQ插件封装通用方法
date:        2019/11/12 16:00:00
index_img: /img/post-index-111203.jpg
banner_img: /img/post-index-111203.jpg
tags: 
    - 前端
categories: 
    - 技术
---

## 前言

**JQ插件** 在前端开发中还是很重要的，不仅能够增加代码的复用性，还能够降低项目的维护成本
以下是自己对插件封装的理解，纯属一家之言~。


## 正文

### jquery的插件机制

为了方便用户创建插件，jquery提供了jQuery.extend()和jQuery.fn.extend()方法。

看下官方对jQuery.extend()的解释：

描述: 将两个或更多对象的内容合并到第一个对象。

[![](/img/jq_extend_1.png)](https://ben-zhangbin.cn/)

解释：当我们提供两个或多个对象给$.extend()，对象的所有属性都添加到目标对象（target参数）。

需要特别注意的一点是：extend方法会改变原对象，所以通常情况下，如果我们想保留原对象，我们可以通过传递一个空对象作为目标对象：

var object = $.extend({}, object1, object2);

若设置了 deep 参数，对象和数组也会被合并进来，但是对象包裹的原始类型，比如String, Boolean, 和 Number是不会被合并进来的。

看了官方的解释，大家应该能够理解，extend方法在用户自定义插件的时候通常是把用户的插件参数覆盖默认参数。

再来看下官方对jQuery.fn.extend()的解释：

描述: 一个对象的内容合并到jQuery的原型，以提供新的jQuery实例方法。

顾名思义，就是用来扩展jquery现有的方法，这个是关键。

jQuery.fn.extend()方法继承了jQuery原型($.fn)对象，以提供jQuery原型新的方法，可以链式调用jQuery()函数。

贴一段简单的扩展方法，实现checkbox的选中：
```javascript
jQuery.fn.extend({
  check: function() {
    return this.each(function() { this.checked = true; });
  },
  uncheck: function() {
    return this.each(function() { this.checked = false; });
  }
});
 
// Use the newly created .check() method
$( "input[type='checkbox']" ).check();
```

前面看了两个关键的知识点，下面介绍一下封装插件的具体步骤。

### 封装步骤

##### 1. 隔离作用域，防止插件‘污染’
```javascript
;(function ($, window, document, undefined) {
	// 隔离作用域
	"use strict";

})(jQuery, window, document);
```

##### 2. 引用jquery的方式判断
针对模块化开发
```javascript
;(function (factory) {
    if (typeof define === "function" && (define.amd || define.cmd) && !jQuery) {
        // AMD或CMD
        define([ "jquery" ],factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                } else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        //Browser globals
        factory(jQuery, window, document);
    }
}(function($, window, document, undefined) {

}));
```

##### 3. 参数、回调和事件
```javascript
var defaults = {
	// 插件默认参数
}
var MyPlugin = function() {
	// 插件私有方法
	this.method = function() {},

	// 插件事件
	this.eventBind = function() {},

	//初始化
	this.init = function() {
		this.eventBind();
	},

	this.init();

};
// 关键
$.fn.MyPlugin = function(parameter,callback){
	if(typeof parameter == 'function'){//重载
		callback = parameter;
		parameter = {};
	}else{
		parameter = parameter || {};
		callback = callback || function(){};
	}
	var options = $.extend({},defaults,parameter);
	return this.each(function(){
		var myplugin = new MyPlugin(this, options);
		// 回调函数

		callback(myplugin);
	});
};

```

##### 4. 调用方法

```javascript
$('#test').MyPlugin(
	// 配置参数
	{},
	// 回调函数
	callback: function(that) {

	}
)
```

## 总结
以上步骤纯属个人总结，欢迎大佬留言改进。

—— BEN 2018.8