# Note

## HTML&CSS Tutorial02

### css 基本选择器
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
*{}//all 正则选择器
p::after {                  //在p标签content之后插入内容
  content:"after"
}
p::before {                 //在p标签content之前插入内容
  content:"after"
}
div:nth-child(2n+1) {       //n: 第n个child，2n：所有双数child，2n+1：所有单数child
}

div:nth-last-child(n) {     //选择倒数第n个
}
[href="..."] {}             //attribute
p,span {}                   //多标签同时应用
.class1.class2 {}           //选中包含class1里面的class2（children class2）
例：
<div class="class1">
  <class="class2"></div>    //应用在这里
</div>
<div class="class2"></div>
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
