- [Note](#Note)
  - [HTML\&CSS Tutorial02(`26/10/2023`)](#html-css-tutorial02-26102023)
    - [css基本选择器](#css基本选择器)
    - [Text属性](#Text属性)
    - [引入CSS的三种方式](#引入CSS的三种方式)
    - [单位](#单位)
    - [元素模式](#元素模式)
    - [常用背景属性](#常用背景属性)
    - [样式冲突的优先级](#样式冲突的优先级)
    - [文字样式会继承父标签属性](#文字样式会继承父标签属性)
    - [块级元素居中](#块级元素居中)
    - [练习](#练习)


# Note

## HTML&CSS Tutorial02(`26/10/2023`)

### css基本选择器
- ID选择器: 只适用于指定的element
- Class类选择器：可以复用，可以给所有有同样样式需求的element加属性
- Tag标签类选择器：会对全局产生影响，谨慎使用，一般设定一些全局样式或者搭配别的选择器使用
```html
#id {
  font-size: 14px;
}
.class {
  font-size: 14px;
}
tag {
  font-size: 14px;
}
<p class="content" id="content-p">content</p>
```
- 优先级排序：inline-style(少用) > ID > Class > Tag
- 其他的selector
```html
*{}                          //all 正则选择器

p::after {                   //在p标签content之后插入内容
  content:"after"
}
p::before {                  //在p标签content之前插入内容
  content:"after"
}
div:nth-child(2n+1) {        //n: 第n个child，2n：所有双数child，2n+1：所有单数child
}

div:nth-last-child(n) {      //选择倒数第n个
}
[href="..."] {}              //attribute
p,span {}                    //多标签同时应用
.class1 .class2 {}           //选中包含class1里面的class2（children class2）
例：
<div class="class1">
  <div class="class2"></div> //应用在这里
</div>
<div class="class2"></div>
div > p {}                   // 选择div（父）标签下所有p标签（child）
div + p {}                   // div后第一个p
div ~ p {}                   // div之后所有p
:hover {}
:active {}
:focus {}
:disable {}
```


### Text属性
- font-famlily
- font-size
- color
- text-align
- line-height
- text-decoration

### 引入CSS的三种方式
- inline-style
```html
<h1 style="color:red">content</h1>
```
- 内部样式
```html
<head>
  <style>
    h1 {
    }
  </style>
</head>
```
- 外部样式
```html
<head>
  <link href="/style.css" rel="stylesheet" type="text/css">
</head>
```


### 单位
- block的宽高，字体单位
```html
  px  rem（推荐使用，有浏览器解析优势）
  em, vw, vh, %
```
- 颜色单位
```html
  rgb, rgba, #xxxxxx
```


### 元素模式
- 块级元素
```html
  block: div
```
- 行内元素
```html
  inline: p
```
- 行内块元素
```
  inline-block: img
```


### 常用背景属性
- background
- background-color
- background-img: url('path')
- background-position
- background-repeat


### 样式冲突的优先级
- 优先级排序：inline-style(少用) > ID > Class > Tag > preudo > 选择符
- ！ important第一优先级，尽量避免使用


### 文字样式会继承父标签属性


### 块级元素居中
- parent div：width已知, child div
```html
<style>
    .class1  {
        position: relative;
        width: 200px;
        height: 200px;
        background-color: antiquewhite;
        /* padding-top: 50px; */                //方法1：运用padding组合
    }
    .class2 {
        position: absolute;
        width: 100px;
        height: 100px;
        /* top: 50px; */                        //方法2：运用绝对定位的absolute的属性调整box位置
        /* left: 50px; */
        bottom: 50px;
        right: 50px;
        background-color: brown;
        /* margin: auto; */

    }
</style>
```


### 练习
- 居中登录框
```html
  任务要求：
  创建一个登录页面，其中包含一个居中的登录框。
  登录框有一个半透明的背景，内有用户名和密码输入字段、登录按钮。
  请使用 CSS 居中技巧，同时实现背景属性的设置。
```
- 导航栏布局 任务要求
```html
  创建一个水平导航栏，其中包含几个导航链接。
  导航栏应具有固定高度和底边框，导航链接之间应均匀分布。
  使用 CSS 来设置导航栏样式，并确保文字垂直居中。
```
- display例子： https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- 练习代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        .Login {
            width: 100vw;
            height: 100vh;
            /* 弹性布局 */
            display: flex;
            justify-content: center;
            align-items: center;

        }
        .Login-box {
            width: 500px;
            height: 500px;
            border-radius: 50px;
            display: flex;
            /* 按行竖直排列 */
            flex-direction: column;
            align-items: center;
            background-color: rgba(255, 155, 155, 0.7);
            
        }
        .Login-box > h1 {
            font-size: 36px;
            margin: 50px 0;
            color: white;
        }
        .Login-box > input {
            margin-bottom: 20px;
            width: 400px;
            height: 40px;
            /* 设置弧度 */
            border-radius: 10px;
            border: none;
            outline: none;
            font-size: 18px;
            padding-left: 10px;

        }
        .Login-box>button {
            margin-top: 50px;
            width: 140px;
            height: 45px;
            font-size: 20px;
            border-radius: 10px;
            border: none;
            background-color: rgb(247, 234, 218);
        }
    </style>
</head>
<body>
    <div class="Login">
        <div class="Login-box">
            <h1>Login</h1>
            <input type="text" placeholder="User Name"/>
            <input type="password" placeholder="Password"/>
            <button type="submit">Login</button>
        </div>
    </div>
</body>
</html>
```
