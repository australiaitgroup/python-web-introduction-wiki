- [Note](#Note)
  - [HTML \& CSS Part 2 (`22/10/2023`)](#html--css-part-2-22102023)
    - [CSS导入方法](#CSS导入方法)
    - [一些快捷打法](#一些快捷打法)
    - [CSS3基本选择器](#CSS3基本选择器)
      - [标签选择器](#标签选择器)
      - [类选择器](#类选择器)
      - [ID选择器](#ID选择器)
    - [基础选择器之通配符选择器](#基础选择器之通配符选择器)
    - [CSS字体属性之复合属性](#CSS字体属性之复合属性)
    - [CSS文本外观之行间距](#CSS文本外观之行间距)
    - [HTML中引入CSS样式](#HTML中引入CSS样式)
      - [行内样式](#行内样式)
      - [内部样式表](#内部样式表)
      - [外部样式表](#外部样式表)
    - [复合选择器之后代选择器](#复合选择器之后代选择器)
    - [复合选择器之子元素选择器](#复合选择器之子元素选择器)
    - [复合选择器之并集选择器](#复合选择器之并集选择器)
    - [复合选择器之链接伪类选择器](#复合选择器之链接伪类选择器)
      - [focus伪类选择器](#focus伪类选择器)
    - [显示模式之行内块元素(特殊情况)](#显示模式之行内块元素(特殊情况))
    - [元素显示模式转换](#元素显示模式转换)
    
<hr>     

<p align='center'><img src='../images/html css.png' width='30%' height='30%' /></p>

<hr>   
      

# Note


## HTML & CSS Part 2 (`22/10/2023`)


### CSS的概念
- Cascading Style Sheet 级联样式表
- 表现HTML 或 XHTML 文件样式的计算机语言<br>
- 包括对字体、颜色、编剧、高度、宽度、背景图片、网页定位等设定


### CSS导入方法
- 内部样式：html中直接添加
```html
<head>
<style>
      /* 选择器 {样式} */
      /* 给谁改样式 { 改什么样式} */
      /* key value */
</style>
</head>
```
- 外部


### 一些快捷打法
- 注释： ctrl + /
- 多个tag快速打出： tag + '*' + '你要的数量'
- 嵌套tags打法： tag + '>' + tag
- 平行tag打法： tag + '+' + tag
- tag里面带内容： tag + '{你想要的内容}'


### CSS3基本选择器
- 标签选择器:直接应用与HTML标签
- 类选择器：可在页面中多次使用（开发中使用最多）
- ID选择器：在同一个页面只能使用一次
- ID选择器 > 类选择器 > 标签选择器


#### 标签选择器
- 标签选择器 ，就是把标签名作为选择器
- 选择器的作用就是把需要的标签选出来
```html
p{
        color: green;
      }
      div{
        color: pink;
        font-size: 30px;
      }
```


#### 类选择器
- 目标较多时，可选用class来调整特定目标的样式
- 同一个class可应用在一个或多个标签，开发最常用
- 注意class前面加'.'以选用这个class
```html
<head>
<style>
      /* 类选择器口诀: 样式点定义  结构类(class)调用  
        同一个class可应用在一个或多个标签 开发最常用 
        要语义化 比如header,nav,sidebar,search,main-navigation*/
      /* 根据文字提示给标签文本添加颜色 */
      .red {
        color: red;
      }
      
      .green {
        color: green;
      }

      .pink {
        color: pink;
      }
    </style>
  </head>
  <body>
    <ul>
      <li class="red">hello world red</li>
      <li class="red">hello world red</li>
      <li>hello world </li>
      <li class="green">hello world green</li>
      <li class="pink">hello world pink</li>
    </ul>
    <div class="red">hi world red</div>
  </body>
```
- 一点小tips：颜色的代码可在google搜'color picker'
- 快速class生成，快捷键：
```html
<!-- .box*3 -->
```
- 公共部分的class可以统一设置，特别需要的再另外增加class的细节<br>
好处：节省代码，统一修改
```html
<head>
<style>
      /* 节省代码，统一修改 */
      /* 根据文字提示给元素加背景颜色，宽高 */
     .box {
      width: 100px;
      height: 100px;
      border: 1px solid #000;
     }
     .red {
      background-color: red;
     }
     .blue {
      background-color: blue;
     }
    </style>
</head>
<body>
    <!-- .box*3 -->
   <div class="box red">red hello world</div>
   <div class="box blue">blue hello world</div>
   <div class="box red">red hello world</div>
</body>
```


#### ID选择器
- 样式#定义, 结构id调用, 只能调用一次, 别人切勿使用
- id优先级>class,id难以重用和拓展
```html
<head>
<style>
    #green {
      color: green;
    }
    .green {
      color: lightgreen;
    }
    .red {
      color: red;
    }
    </style>
  </head>
  <body>
    <div id="green" class="red">coffee</div>
    <div class="green">tea</div>
  </body>
```


### 基础选择器之通配符选择器
- 通配符：'*' 能影响所有因素，但优先级很低，很容易被其他格式覆盖
```html
  <head>
  <style>
  /* * 把 html  body  div  span  li 等等的标签都改为红色 */
      * {
        color: red;
      }
      li {
        color: blue;
      }
      .green {
        color: green;
      }
    </style>
  </head>
  <body>
    <div>hello</div>
    <span class="green">world</span>
    <ul>
      <li>hello world</li>
    </ul>
  </body>
 ```


### CSS字体属性之复合属性
  - font-style：字体样式
  - font-weight：字体粗细
  - font-size：字体大小
  - font-family：字体
  - 各种字体样式可以写成复合样式（合并在一行写，中间空格隔开）
  - font-size和font-family是必须的，不然就会采用默认的样式
  ```html
  <head>
    <style>
      /* 想要div文字变倾斜 加粗 字号设置为16px 并且 字体Arial */
      /* font-size, font-family are required */
     #text {
      /* font-style: italic;
      font-weight: bold;
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif; */
      font: bold 16px italic Arial 
     }
    </style>
  </head>
  <body>
    <div id="text">join our community of pet lovers</div>
  </body>
  ```


### CSS文本外观之行间距
  - 文字水平居中对齐,加下划线，文字颜色
  ```html
  .header {
        text-align: center;
        text-decoration: underline;
        color: rgb(255, 0, 255);
      }
  ```
  - 取消默认的下划线
  ```html
  a {
        text-decoration: none;
      }
  ```
  - line height 包括上间距，下间距和文字本身高度
  ```html
  p {
        line-height: 26px;
      }
  /*一般整体行高26px，font字体20px，那上下边框高度就各是3px*/
  ```


### HTML中引入CSS样式

#### 行内样式
- 只控制一个标签，优先级非常高
```html
<style>
    p {
      color: red;
    }
    #red {
      color:red
    }
  </style>
  <body>
    <p>We're focused on bettering the lives of pets and pet parents alike!</p>
    <p>We're focused on bettering the lives of pets and pet parents alike!</p>
    <p style="color: pink; font-size: 20px;" class="red" id="red">We're focused on bettering the lives of pets and pet parents alike!</p>
  </body>
/*最后结果会还是pink因为inline-style有着最高的优先级*/
```

#### 内部样式表
- 只控制一个页面
- 优点：方便在同页面中修改样式
- 缺点：不利于在多页面间共享复用代码及维护，对内容与样式的分离也不够彻底
- viewport：指网页默认宽度
- content="width=device-width ：指网页宽度是屏幕同样宽度
- initial-scale=1.0：指初始缩放比例为1.0
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
/*初始网页结构里一般都有这一句，以表示初始网页结构状态*/
```

#### 外部样式表
- 通过导入外部样式，给div添加样式
```html
<link rel="stylesheet" href="style.css" type="text/css"/>
/*         文件路径       使用外部样式         文件类型*/
```


### 复合选择器之后代选择器
- 可缩小范围，给予特定的标签想要的样式
```html
<head>
    <style>
      /* ol->li pink,ol->a red, .nav->a yellow */
      ol li {
        color: pink;
      }                  /*只修改ol里的li*/
      ol li a {
        color: red;
      }                  /*只修改ol中的a标签*/
      .nav li a {
        color: yellow;
      }                  /*只修改class：'nav'中的带a标签的li*/
    </style>
  </head>

  <body>
    <ol>
      <li>I'm ol</li>
      <li>I'm ol</li>
      <li>I'm ol</li>
      <li><a href="#">I'm a</a></li>
    </ol>
    <ul>
      <li>I'm ul</li>
      <li>I'm ul</li>
      <li>I'm ul</li>
      <li><a href="#">I'm a</a></li>
    </ul>
    <ul class="nav">
      <li>I'm ul</li>
      <li>I'm ul</li>
      <li>I'm ul</li>
      <li><a href="#">I'm a</a></li>
      <li><a href="#">I'm a</a></li>
      <li><a href="#">I'm a</a></li>
      <li><a href="#">I'm a</a></li>
    </ul>
  </body>
```


### 复合选择器之子元素选择器
- 只对子元素第一层的元素应用样式，孙级的不管
```html
<head>
  <style>
    /*.nav a （child) -> color red */
   .nav > a {
    color: red;
   }
  </style>
</head>

<body>
  <div class="nav">
    <a href="">I'm the child</a>
    <p>
      <a href="">I'm the grandchildren</a>
    </p>
  </div>
</body>
```


### 复合选择器之并集选择器
```html
<head>
  <style>
    /* 把cat,dog,还有小猪一家改为粉色 */
   div,
   .pig li {
    color: pink;
   }
  </style>
</head>

<body>
 <div class="pink">cat</div>
 <p class="pink">dog</p>
 <span>george</span>
 <ul class="pig">
  <li>peppa pig</li>
  <li>mum</li>
  <li>dad</li>
 </ul>
</body>
```


### 复合选择器之链接伪类选择器
```html
<head>
  <style>
    /* 未访问过的链接 a:link */
    a:link {
      color: brown;
      text-decoration: none;
    }
    /* 访问过的链接 a:visited */
    a:visited {
      color: orange;
    }
    /* 鼠标经过的链接 a:hover */
    a:hover {
      color: skyblue;
    }
    /* 鼠标按下还没有弹起的链接 a:active */
    a:active {
      color: green;
    }
  </style>
</head>

<body>
  <a href="#">peppa pig</a>
  <a href="http://www.xxxxxxxx.com">website</a>
</body>
```

  
### focus伪类选择器
```html
<head>
  <style>
    /* // Select the input that has received focus,set background color:lightblue,color:red */
    input:focus {
      background-color: lightblue;
      color: red;
    }
  </style>
</head>

<body>
  <input type="text">
  <input type="text">
  <input type="text">
</body>
/*最终效果是输入框里点击，背景框颜色会变成天蓝色*/
```


### 显示模式之行内块元素(特殊情况)

| 块级元素block | 行内元素inline | 行内块元素inline-block |
| --- | --- | --- |
| 一行只能放一个 | 一行可以放多个 | 一行可以放多个 |
| 可以设置宽高 | 不可以直接设置宽高 | 可以设置宽高 |
| 默认宽度容器的100% | 默认宽度是本身的内容宽度 | 默认宽度是本身的内容宽度 |
| 可以包含任何标签 | 可容纳文本或其他行内元素 | / |

- 块级元素block
```html
一行只能放一个
可以设置宽高
默认宽度容器的100%
可以包含任何标签
```
- 行内元素inline
```html
一行可以放多个
不可以直接设置宽高
默认宽度是本身的内容宽度
可容纳文本或其他行内元素
```
- 行内块元素inline-block
```html
一行可以放多个
可以设置宽高
默认宽度是本身的内容宽度
```
```html
<head>
  <style>
    /* inline元素特点:设宽高无效，对margin和padding仅设置左右方向有效，上下无效
       a里面不能再放链接，a里面可以放块级元素
       inline-block元素特点  :宽高，行高，margin，padding都可以控制
       img input td
      */
      span, input {
        width: 200px;
        height: 200px;
      }
  </style>
</head>

<body>
  <span>hello world hello world hello world</span>           /*inline元素*/
  <strong>hello world hello world hello world</strong>       /*inline元素*/
  <table>                                                    /*block元素*/
    <tr>                                                    
      <td>cell a</td>                                        
      <td>cell b</td>
    </tr> 
    <tr>                                                     /*block元素*/
      <td>cell a</td>                                        /*inline-block元素*/
      <td>cell b</td>
    </tr>
  </table>
  <input type="text">                                        /*inline-block元素*/
  <input type="text">
  <span>hello</span>
</body>
```


### 元素显示模式转换
```html
<head>
  <style>
    /* 给 a 设宽150px,高50px，独占一行 */
    a {
      display: block;
      background-color: red;
      width: 150px;
      height: 50px;
    }
    /* 把 div 块级元素转换为行内元素，此时设置宽高无效*/
    div {
      display: inline;
      background-color: purple;
      width: 300px;
      height: 100px;
    }
    /* 给span 设宽150px,高50px，一行多个 */
    span {
      display: inline-block;
      width: 150px;
      height: 50px;
      background-color: blue;
    }
   
  </style>
</head>

<body>
  <a href="#">hello world</a>
  <a href="#">hello world</a>
  <div>hello world</div>
  <div>hello world</div>
  <span>hello world</span>
  <span>hello world</span>
</body>
```
  
  
  



  
