
# Note

## HTML&CSS_Part2（22/10/2023）

### CSS的概念
- Cascading Style Sheet 级联样式表
- 表现HTML 或 XHTML 文件样式的计算机语言<br>
包括对字体、颜色、编剧、高度、宽度、背景图片、网页定位等设定


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
- 通配符：'*'能影响所有因素，但优先级很低，很容易被其他格式覆盖
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
