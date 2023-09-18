- [Class Notes](#class-notes)
  - [Resources](#resources)
  - [HTML \& CSS Part 1 (`28/06/2023`)](#html--css-part-1-28062023)
    - [HTML \& CSS \& JavaScript的特点](#html--css--javascript的特点)
    - [怎样查看一个网站源码](#怎样查看一个网站源码)
    - [HTML详解](#html详解)
    - [VScode下载 (https://code.visualstudio.com/)](#vscode下载-httpscodevisualstudiocom)
      - [VScode插件](#vscode插件)
      - [Live Server 使用方法](#live-server-使用方法)
      - [Live server vs 本地打开](#live-server-vs-本地打开)
    - [Terminal/ Powershell创建文件夹](#terminal-powershell创建文件夹)
    - [HTML基本格式](#html基本格式)
    - [Tag](#tag)
      - [h标签是标题标签的一种](#h标签是标题标签的一种)
      - [p标签是段落标签](#p标签是段落标签)
      - [inline vs block level elements](#inline-vs-block-level-elements)
      - [span标签的用途](#span标签的用途)
      - [创建table](#创建table)
      - [创建listing](#创建listing)
      - [img标签](#img标签)
      - [form 标签 (label和input一般成对出现, label中的for和input中的id相对应)](#form-标签-label和input一般成对出现-label中的for和input中的id相对应)
      - [a标签(创建超链接)](#a标签创建超链接)
      - [语义化标签可以代替div, 有助于搜索引擎优化](#语义化标签可以代替div-有助于搜索引擎优化)
  - [作业: 在freecodecamp上练习 \& 尝试写个人blog](#作业-在freecodecamp上练习--尝试写个人blog)

# Class Notes

## Resources
[w3schools](https://www.w3schools.com/)<br>
[开发者指南](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)<br>

## HTML & CSS Part 1 (`28/06/2023`)

<p align='center'><img src='../image/HTML&CSS.png' width='30%' height='30%' /></p>

```前端: HTML,CSS,JavaScript```

### HTML & CSS & JavaScript的特点
> HTML: 网站基本框架<br>
> CSS: 美化网站 (color, animation, opacity, etc)<br>
> JavaScript: 动态 (前后端交互, 功能实现)<br>

<hr>

### 怎样查看一个网站源码
***鼠标右键 + inspect/F12***

<hr>

### HTML详解
全称是`Hyper Text Markup Language` <br>
后缀名必须是*.html<br>
index.html -> `http://www.example.com`<br>
blog.html -> `http://www.example.com/blog.html`<br>
***~~HTML是编程语言~~, HTML是标记型语言***
> 原因: HTML使用标签(<tag>)来描述文档的内容

<hr>

### VScode下载 (<https://code.visualstudio.com/>)
![VScode](image/vscode.png)

#### VScode插件
- Live Server (启动server, 随代码更新实时更新网站)
- Prettier (排版功能)
- Auto Close Tag (自动闭合标签)
- Code Spell Checker (检查拼写)
- color Highlight (帮助识别代码中的颜色值)
- indent-rainbow (缩进颜色变化)
- Image Preview (在代码旁边可以查看图片缩略图)
- VSCode Icons (更改icons, 更加醒目)
- SonarLint (检查代码错误)

#### Live Server 使用方法
当前编辑的文件是index.html, 点击右下角'go live', 出现网页.<br>
```路径问题: vscode文件根目录决定live server url```<br>
1. 如果index.html就在根目录下 -> `http://127.0.0.1:5500/index.html`
2. 如果index.html在二级目录下 -> `http://127.0.0.1:5500/folder_name/index.html`

#### Live server vs 本地打开
| Live server | 双击打开文件
| :---: | :---:
| HTTP协议(http://) | 本地文件协议(file://)
>`多用live server, 可以进行网页调试`

<hr>

### Terminal/ Powershell创建文件夹
1. cd到自己选定的目录
2. 创建文件<br>

| Mac(terminal) | Windows(powershell)
| :---: | :---:
| touch file_name, mkdir folder_name | New-Item -ItemType File -Name file_name, mkdir folder_name

<hr>

### HTML基本格式
```html
<!DOCTYPE html> //HTML5文档格式声明
<html lang="en">
    <head> // 元数据 charset,metadata,icon,title,author,name,content
    </head>

    <body> //content
    </body>
</html>
```
>content写的越多, 关键词越多, 增加曝光机会(SEO)

>responsive web design -> 修改viewpoint(width=device-width)

<hr>

### Tag
- 大多数tag是要有闭合标签(`<div></div>`)
- 少数tag无闭合标签(`<br />, <img />, <input />, etc`) -> 没有child nodes

#### h标签是标题标签的一种
`<h1> -> <h6> 逐渐变小`<br>
*h标签是block element*

#### p标签是段落标签
<p>标签可以包含任意文本内容，包括文本、链接、图片等.<br>

*p标签会根据浏览器宽度自动换行, 默认有margin*

>***但是, p标签不能包含block element.

```html
<p><div></div></p>
```

*p标签是block element*

#### inline vs block level elements
| Element type | Attributes
| :---: | :---:
| ***inline element(`<span>,<a>,<button>,etc`)*** | 不独占一行, 它们的大小由元素的内容决定, 设置宽高无效, 可以设置左右的padding和margin
| ***block element(`<p>,<div>,<button>,etc`)*** | 而块级元素会独占一行，并且会在前后添加换行符, 可以设置宽高

#### span标签的用途
> 修改部分文字样式<br>
```html
<p>He <span style="color:green;font-weight:bold;font-style:italic">went to</span> school</p>
```

- 这里用给p标签一个class selector不容易修改部分文字的style, span作为行内元素很灵活, 不会独占一行.<br>

>***但不要多用优先级高的inline style, 多用可以复用的class selector***

#### 创建table
```html
<table>
    <caption>Demo table</caption>
    <thread>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Points</th>
        </tr>
    </thread>
    <tbody>
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>100</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>Doe</td>
            <td>200</td>
        </tr>
    </tbody>
</table>
```

#### 创建listing
`有序`

```html
<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
</ol>
```

`无序`
```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
</ul>
```
#### img标签<br>

```html
<img src='' alt=''/>
```
***alt在图片无法加载的时显示***

#### form 标签 (label和input一般成对出现, label中的for和input中的id相对应)

```html
<form action="results.html" method="GET" enctype="multipart/form-data">
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" placeholder="username" required />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" name="password" id="password" placeholder="password" required />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" placeholder="email" required />
    </div>
    <div>
      <label for="comment">Comment</label>
      <textarea name="comment" id="comment" placeholder="Write sth" ></textarea>
    </div>
    <div>
      <label for="mobile">Phone</label>
      <input type="tel" id="mobile" name="mobile" placeholder="123-456 /">
    </div>
    <div>
      <label for="color">Color</label>
      <input type="color" name="color" id="color" />
    </div>
    <div>
      <label for="range">Range:</label>
      <input type="range" id="range" name="range" />
    </div>
    <div>
      <label for="checkbox">remember me:</label>
      <input type="checkbox" id="checkbox" name="checkbox" />
    </div>
</form>
```

#### a标签(创建超链接)
```html
<a href="https://google.com/">Google</a>
```

```html
<a href="mailto: xxx@123.com">email</a>
```

*给xxx@123.com发邮件*<br>
```html
<a href="tel:123-456-789">call</a><br>
```

#### 语义化标签可以代替div, 有助于搜索引擎优化
`<header>, <nav>, <main>, <footer>, <article>, <section>, <aside>, <figure>, etc`

<hr>

## 作业: 在freecodecamp上练习 & 尝试写个人blog
<https://dribbble.com/search/search-blog><br>
<https://www.freecodecamp.org/learn/2022/responsive-web-design/><br>