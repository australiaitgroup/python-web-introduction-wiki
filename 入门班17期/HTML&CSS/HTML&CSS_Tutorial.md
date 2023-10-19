# Note

## html tutorial (1)(19/10/2023)

### 练习网站
``` https://www.practiceboard.com/ ```

### html-tags-elements-attributes的语法规范
```
elements:
<body>
<p>
<h1> - <h6>
<br>
<span>
```

### 文档结构
``` html
<!DOCTYPE html>  /*开始，声明
<html lang="en">  /*包含html content tag
<head>    /*head中不包含网页肉眼可见信息，但包含标题及tag的文字部分，meta（seo或者一些其他数据），icon等元素
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
- 开始，声明
``` html
<!DOCTYPE html>
```
- 包含html content tag
``` html
<html>
```
- invisible parts
``` html
<head><meta><link><title><style><script>
```
- visible parts
``` html
<body><section><nav><div><ul>
```

### 一些小tips
- vscode创建新的html文件一般取名index.html，即入口文件
- 修改tags和icon的方法：
```html
<head> 
  <link rel="icon" type="image" href="https://jubic.notion.site/images/favicon.ico">
</head>
```
- 导航栏nav<br>
```没有具体的意思，主要告诉你这是一个导航栏```

### a标签-超链接
```html
<a href="#"></a>
<a href="/home"></a>
```

- '#'表示当前页面
- 'href'表示需要跳到的链接，可实现app内跳转

### section标签
- 一般用div(更general)，但可以根据语义化环境灵活使用
- 范围：section > div

### 相对路径-绝对路径
- 相对路径：可以引用本地的文件位置，用'/'
- 绝对路径：直接引用网络上的图片或链接地址即可

### 文本标签
- 代表文本的element tag
```
<h1> - <h6>
<p>
<br>
<strong><i><mark><del>
```

### 链接和图像
```html
<a href="path" target="_blank">link</a>
<img width="100" height="50" alt="cat" src="/favicon.ico" alt="icon">
```

### 表格和列表
```html
<table>
  <tr>
    <th>HEAD1</th>
    <th>HEAD2</th>
    <th>HEAD3</th>
  </tr>
 <tr>
    <th></th>
    <th></th>
    <th></th>
  </tr>
</table>
```
```html
<ul>
  <li>egg</li>
  <li>potato</li>
</ul>
<ol>
  <li>egg</li>
  <li>potato</li>
</ol>
<dl>
  <dt>coffee</dt>
  <dd>black hot drink</dd>
  <dt>coffee</dt>
  <dd>black hot drink</dd>
</dl> /*与之前的列表不同的是这个每行内容之前会有标签
```



### 表单
```html
<form> 
  <label for="input">
  <input id="input" type=""/>
  <textarea/>
  <button type="submit"/> /*默认的feature是如果放置内容在form里会提交所有相关内容
</form>
```

### 其他常用
- ```
  <span>
  ```
- 固定:<nav/>，<footer/>
- <iframe/>: 添加视频、音频，内嵌，和页面本身完全不交互，不能修改样式
- <audio>,<vedio>: 统称media标签，一般里面套source，可修改样式
- <hr> : 分隔标签


### 拓展
#### 块级元素和行内元素
##### 块级元素：h1-h6,div,section,nav,ol,ul,form
- 总是从新的一行开始
- 块级元素可以包含块级元素和行内元素
- 高度和宽度是可控的
- 宽度没有设置是，默认是100%
##### 行内元素：span,strong,img（inline-block）,input,textarea,select
- 和其他元素在一行，不会换行
- 高度和宽度都是不可控的，高度和宽度就是内容宽高
- inline-block可以设置高度和宽度
- 行内元素可以包含行内元素，但不可以包含块级元素
##### dom中HTMDivElement继承关系
- HTMDivElement -> HTMElement -> Node -> EventTarget
- HTMDivElement继承自HTMElement，所有HTMDivElement是HTMElement的子类，HTMDivElement有HTMElement所有的feature
```
人：EventTarget
女人、男人：Node
女生：Element
```
- HTMDivElement div
- EventTarget eventListener[EventTarget]

### 练习
- https://www.khanacademy.org/computing/computer-programming/html-css/html-css-further-learning/e/quiz--validate-this-html
- https://www.w3resource.com/html-css-exercise/basic/


