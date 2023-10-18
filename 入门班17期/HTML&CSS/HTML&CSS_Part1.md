(*^▽^*)
-[Note](#Note)



  # Note

  ## HTML & CSS Part 1(18/10/2023)
  
  ### 解决问题实用网站
  - stack overflow
  - w3c school\ mdn(语法)
  - chatGPT

  ### 网页开发三大件
  - HTML(主管结构)（标记语言）
  - CSS（主管格式）（标记语言）
  - JavaScript（主管交互）（编程语言）

  ### 一些实用的插件
  live server
  prttier
  auto close tag
  auto rename tag
  code spell checker
  color highlight
  image preview
  vscode icons

  ### Live Server 使用方法
  当前编辑的文件是index.html, 点击右下角'go live', 出现网页.<br>
  ```路径问题: vscode文件根目录决定live server url```<br>
  1. 如果index.html就在根目录下 -> `http://127.0.0.1:5500/index.html`
  2. 如果index.html在二级目录下 -> `http://127.0.0.1:5500/folder_name/index.html`

  
  ### 快捷键：怎么创造一个基础的网页框架
  ***！+ Tab***

  ### 网页基本格式
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

  ### Tag
  - 大多数tag是要有闭合标签(`<div></div>`)
  - 少数tag无闭合标签(`<br />, <img />, <input />, etc`) -> 没有child nodes
  - 有auto close tag插件的话一般打完前半部分就会自动补齐

  #### h标签是标题标签的一种
  '<h1> -> <h6> 从大到小, 会加粗'<br>
  'h标签是block element'

  #### p标签
  - p 会根据浏览器窗口的宽度自动换行， 段落之间有空隙
  - <br/> ：换行标签，也是个单标签

  #### 通过Chrome 修改网页格式
  - 右键选择check 在style里修改，但刷新后会恢复原样

  #### 一些修改文字格式的tag
  - strong和b都是加粗，一般用strong，更加semantic语义化
  - del s都是删除标签，一般用del，更语义化
  - em i都是倾斜问题的标签，一般用em，更语义化
  - ins  u都是下划线的标签，一般用ins，更语义化

  #### div, span标签
  - div，span都没有语义
  - div是用来布局的，独占一行，可以看成是个超大的盒子
  - div是用来布局的，独占一行，可以看成是个超大的盒子

  #### image标签
  - img是单标签，src是必须属性，表示图片的路径
  - img提供width和height属性可以修改，在实际开发中，要么修改高度，要么修改宽度，<br>只需要修改其中的一个，另外一个让它等比例缩放，就不会压扁失真
  - 




  
