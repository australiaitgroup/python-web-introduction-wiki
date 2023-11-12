
- [Note](#Note)
  - [HTML \& CSS Part 1 (`18/10/2023`)](#html--css-part-1-18102023)
    - [解决问题实用网站](#解决问题实用网站)
    - [网页开发三大件](#网页开发三大件)
    - [一些实用的插件](#一些实用的插件)
    - [Live Server 使用方法](#Live-Server-使用方法)
    - [快捷键之怎么创造一个基础的网页框架](#快捷键之怎么创造一个基础的网页框架)
    - [网页基本格式](#网页基本格式)
    - [Tag](#Tag)
      - [h标签是标题标签的一种](#h标签是标题标签的一种)
      - [p标签](#p标签)
      - [通过Chrome修改网页格式](#通过Chrome修改网页格式)
      - [一些修改文字格式的tag](#一些修改文字格式的tag)
      - [div和span标签](#div和span标签)
      - [image标签](#image标签)
      - [下一级路径](#下一级路径)
      - [绝对路径](#绝对路径)
      - [a标签(创建超链接)](#a标签创建超链接)
    - [创建一个table](#创建一个table)
      - [ul（无序列表）](#ul无序列表)
      - [ol（有序列表）](#ol有序列表)
      - [dl（自定义列表）](#dl自定义列表)
      - [form（表单）](#form表单)
      - [input（输入）](#input输入)
      - [label](#label)
      - [select](#select)
        
      
<p align='center'><img src='../images/html css.png' width='30%' height='30%' /></p>



  # Note

  ## HTML & CSS Part 1 (`18/10/2023`)
  
  ### 解决问题实用网站
  - stack overflow
  - w3c school\ mdn(语法)
  - chatGPT

  ### 网页开发三大件
  - HTML(主管结构)（标记语言）
  - CSS（主管格式）（标记语言）
  - JavaScript（主管交互）（编程语言）

  ### 一些实用的插件
  - live server
  - prttier
  - auto close tag
  - auto rename tag
  - code spell checker
  - color highlight
  - image preview
  - vscode icons

  ### Live Server 使用方法
  当前编辑的文件是index.html, 点右键'open with live server', 出现网页.<br>
  ```路径问题: vscode文件根目录决定live server url```<br>
  1. 如果index.html就在根目录下 -> `http://127.0.0.1:5500/index.html`
  2. 如果index.html在二级目录下 -> `http://127.0.0.1:5500/folder_name/index.html`

  
  ### 快捷键之怎么创造一个基础的网页框架
  ***！+ Tab***

  ### 网页基本格式
  ```html
  <!DOCTYPE html>  /*!声明html版本，必须放第一行，不是一个html标签，不属于html中的一部分
  <html lang="en"> 
  <head>
      <meta charset="UTF-8"> /*charset 字符集，这句必须写不然会乱码
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
    
  </body>
  </html>
  ```

  ### Tag
  - 大多数tag是要有闭合标签(`<div></div>`)
  - 少数tag无闭合标签(`<br />, <img />, <input />, etc`) -> 没有child nodes
  - 有auto close tag插件的话一般打完前半部分就会自动补齐

  #### h标签是标题标签的一种
  ```<h1>,<h2>... <h6> 从大到小, 会加粗```
  ```h标签是block element```

  #### p标签
  - p 会根据浏览器窗口的宽度自动换行， 段落之间有空隙
  - ```<br/>``` ：换行标签，也是个单标签

  #### 通过Chrome修改网页格式
  - 右键选择check 在style里修改，但刷新后会恢复原样

  #### 一些修改文字格式的tag
  - strong和b都是加粗，一般用strong，更加semantic语义化
  - del s都是删除标签，一般用del，更语义化
  - em i都是倾斜问题的标签，一般用em，更语义化
  - ins  u都是下划线的标签，一般用ins，更语义化

  #### div和span标签
  - div，span都没有语义
  - div是用来布局的，独占一行，可以看成是个超大的盒子
  - span也是用来布局的，一行可放多个

  #### image标签
  - img是单标签，src是必须属性，表示图片的路径
  - img提供width和height属性可以修改，在实际开发中，要么修改高度，要么修改宽度，<br>只需要修改其中的一个，另外一个让它等比例缩放，就不会压扁失真

  #### 下一级路径
  - src中输入'/'以导入更下一级路径

  #### 绝对路径
  - src中直接输入图片网址即可

  #### a标签(创建超链接)
  - 网页元素连接，比如文本，图像，表格，音频，视频等都可以添加超链接
  - _self default value,当前窗口打开
  - _blank,新窗口打开
  *可以在a标签中包一个img，意为用该图片作为超链接载体*
  
  ```html
  <a href="https://www.agemys.org/?ref=301/" target="_blank">
      <img src="cat.jpg" alt="cat">
  </a>
  ```

### 创建一个table
- th会加粗和居中
- 股票一般用表格做，用来展示数据
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>table</title>
  </head>
  <body>
    <table
      align="center"  /*修改一些格式，不用硬记
      border="1"
      width="500"
      height="250"
      cellspacing="0" /*cellspacing:单元格之间的缝隙
      cellpadding="0" /*cellpadding:内容和单元格之间的padding
    >
      <tr>
        <th>name</th>
        <th>age</th>
        <th>gender</th>
      </tr>
      <tr>
        <td>Ben Hi</td>
        <td>20</td>
        <td>male</td>
      </tr>
      <tr>
        <td>Chris Li</td>
        <td>30</td>
        <td>Female</td>
      </tr>
    </table>
  </body>
</html>
```

#### ul（无序列表）
- ul里面只能放li，这是一个规范（避免不同浏览器显示不同）
- li里面还能放置别的标签
- li为block性质，独占一行

#### ol（有序列表）
- 同样，建议ol里面放li
- li里面还能放置别的标签
- ol里的li前面会有序号

#### dl（自定义列表）
- dl里只能有dt（标题）和dd（数据），这是规范
- dt,dd里面可以放任何标签

#### form（表单）
- 所有的input只能放在form里面才能提交
- crtl+/ 创建一个<--!-->

#### input（输入）
- input是个单标签
- 单选的type为radio，且必须有相同的name才能实现单选
```html
gender:
      male<input type="radio" name="gender" value="male">
      female<input type="radio" name="gender" value="female">
      other<input type="radio" name="gender" value="other">
    </form>
```
- 多选的type为checkbox，最好也用相同的name
```html
hobby:
      eating<input type="checkbox" name="hobby">
      fishing<input type="checkbox" name="hobby">
      traveling<input type="checkbox" name="hobby">
```
- 点击submit，可以把form包括里面的inputs都提交给后端服务器
```html
      <input type="submit" value="Submit">
      <input type="reset" value="Reset">
      <input type="button" value="login"><br/>
```

#### label
- 当点击label标签，浏览器就会自动聚焦到对应的input上，来增加用户体验
- for 和id要匹配

#### select
- selected默认选中状态
```html
 <label for="Country">Country</label>
      <select name="" id="Country">
        <option value="Australia">Australia</option>
        <option value="China">China</option>
        <option value="USA"selected>USA</option>
      </select>
```

  
