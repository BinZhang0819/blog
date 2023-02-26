---
layout: post
title:  JS执行过程
date: 2023年2月26日16:24:35
index_img: /img/post-index-111202.jpg
banner_img: /img/post-index-111202.jpg
tags: 
    - 知识
categories: 
    - 技术
---

## 1. 常见术语
* GO:全局对象
* AO：函数执行前产生的一个对象
* VO：变量对象，一般指向AO或GO
* ECS:上下文执行栈
* GECS:全局上下文执行栈
* FECS：函数上下文执行栈

## 2.全局代码的执行过程
这是一段全局代码
```javascript
var name="why";
console.log(num1);
var num1=20;
var num2=30;
var result=num1+num2
console.log(result);
```
1. 在代码编译之前，会创建一个`GlobalObject`对象，这个对象包括一些全局的其他对象，并创建一个`window`属性指向这个对象本身。
2. 在全局代码编译的时候，遇到普通变量会放入到 `GlobalObject` 这个对象中，赋值为`undefined`
3. 全局代码执行时，会先创建一个`Global Execution Stack` 全局执行栈，里面包括两个部分
4. `Variable Object`:在全局执行栈中，这个对象是指向的`GlobalObject`
执行代码
执行的代码，遇到变量要取值时，会先从`VO`找对应的值，从上往下依次执行
5. 第二行输出时，要取num1的值，去`VO`找的时候，因为还没执行到后面，所以此时的值是`undefined`
![img](img/runtime/27730857-4b30f8580a2d33ee.png)

## 3. 全局代码的执行过程(函数)
函数和普通变量是不一样，如果在声明之前提前调用，还是会正常执行结果，而普通变量则是`undefined`
```javascript
var name="why";
foo()
function foo(){
  console.log(m);
  var m=10;
  var n=20;
  console.log("foo");
}
```
1. 在编译代码之前，会创建一个全局`GO`对象，放入相关属性。
2. 在编译代码的时候，将`name`放入到`GO`对象中，设置其值为`undefined`。然后将`foo`放入到`GO`中，发现`foo`是一个函数，所以会在内存中开辟一片空间，来保存这个函数，这个内存空间包含两个部分，一个是父级作用域，一个是函数执行体。然后将`GO.foo`的值设置为这片空间的内存地址。

    ```javascript
    var GO={
        name:undefined,
        foo:'0x001'
    }
    ```
3. 在执行全局代码的时候，会创建一个`GES全局执行栈`，然后将`GES`放入到`ECS`上下文执行栈中。
    *  `GES`包括两个部分

        > `VO(Variable Object)`:此时它指向的是`GO`

        > 执行代码

4. 执行全局代码，执行第一行时，将`VO.name`的值设置 为`"why"`。
5. 执行第二行时，去取`foo`的值，然后从`VO`中找，返回一个内存地址。但是发现这个`foo`函数会执行。函数执行的时候会自动创建一个函数上下文执行栈`FES(Functional Execution Stack)`,`FES`包括两个部分：

    * `VO(Variable Object)`：`AO(Activation Object)`

        >  AO: 在函数编译前会创建一个`AO`对象，它在编译的时候，会将`m`、`n`放入到这个对象内部，然后设置其值为`undefined`

        ```javascript
        var AO={
            m:undefined,
            n:undefined
        }
        ```
    *  执行代码
6. 在执行foo函数的时候,先输出m,从VO中查找，输出undefined，然后会将m、n变量设置为具体的值。

    ```javascript
    var AO={
        m:10,
        n:20
    }
    ```
7. 执行完foo函数后，这个函数上下文执行栈会移出上下文栈，然后销毁，如果AO对象没有任何引用的话，后面也会被销毁。

## 4. 作用域链
```javascript
var name="why";
foo()
function foo(){
  console.log(m);
  var m=10;
  var n=20;
  console.log(name);
}
```
当我们查找变量时，是**沿着作用域链进行查找的**。所以输出的值是`"why"`

**因为函数会存在嵌套，如果还是没找到，会继续往上一层进行查找，一层一层往上找，直到全局作用域中，如果还是没有找到，则会报错。**

上面在`VO`查找的时候，发现没有`name`，然后再往父级作用域中查找`GO`，发现有`name`，则返回对应`name`对应的值

其实函数执行栈包含的两部分：
* 第一部分不仅仅包含 VO，还包含作用域链：这个作用域链是由当前的VO和ParentScope

    > 父级作用域其实在编译的时候就已经确定好的，所以foo父级作用域是GO

    > 所以作用域链是VO+GO

## 5. 全局代码执行的过程（函数嵌套）
```javascript
var name="why";
foo()
function foo(){
  console.log(m);
  var m=10;
  var n=20;
  function bar(){
    console.log(name);
  }
  bar()
}
```
如果一个函数嵌套另外一个函数，另外一个函数刚开始是不需要被执行的时候，是不会被编译的，只会被预编译。
例如`bar`函数执行时，也会自动创建函数上下文执行栈`FES`，里面包含两个部分：

* 第一部分
    * VO: `AO`
        * AO: `arguments`
    * scope-chain: `VO+ParentSope`
    * this: 是在运行时进行绑定的
* 第二部分
    * 执行代码

执行第8行代码的时候,输出`name`的值，会先从当前的`VO`中查找`name`，发现不存在，去父级作用域`(foo)`的`VO`中查找，发现还是不存在，就是去父级作用域`(foo)`的父级作用域`(GO)`中去查找,发现有`name`的值，是`"why"`，所以将其输出`"why"`。
![img](/img/runtime/27730857-052be4cb21762fea.png)

## 6. 函数调用函数的执行过程
```javascript
var message="Hello Global";
function foo(){
  console.log(message);
}
function bar(){
  var message="Hello bar";
  foo();
}
bar();
```

打印的结果是 `hello Global`
* 函数的作用域是在编译的时候就已经确定了。
* 函数的作用域跟它定义的位置有关系，跟调用的位置是没有关系的。
![img](/img/runtime/27730857-048ebee62dada000.png)

## 7. 变量环境（Variable Enviroment）和环境记录（Environment Record）
**上面的规范是基于早期ECMA的版本规范：**
* VO、GO、AO 这是ECMAScript5以前的规范
    * 每个执行上下文（GEC、FEC）会被关联到一个变量对象中（Variable Object），在源代码中声明的变量和声明的函数都会作为属性放入到VO中。对于函数来说，参数也会放入到VO中。

**在最新的ECMASCript规范中，对于一些词汇作了一些修改：**
* 变量环境(VE)和环境记录(ER)(不一定用对象实现，也可以用map实现)
    * 每个执行上下文都会被关联到一个变量环境中，在执行代码中，声明的变量和声明的函数都会作为环境记录添加到变量环境中
    * 对于函数而言，参数也会作为环境记录加入到变量环境中。

通过上面的变化，我们可以知道，VO变为变量环境(VE)。

## 8. 总结
![img](/img/runtime/27730857-222a95c7fd81823c.png)