- [Note](#Note)
  - [HTML \& CSS Part 3 (`25/10/2023`)](#html--css-part-3-25102023)
    - [CSS常用属性](#CSS常用属性)
      - [<span>标签的的作用](#<span>标签的的作用)
      - [CSS的属性单位](#CSS的属性单位)
      - [优先级](#优先级)
    - [background类应用](#background类应用)
      - [background-color背景颜色](#background-color背景颜色)
      - [background-image背景图片](#background-image背景图片)
      - [background-repeat背景图片平铺](#background-repeat背景图片平铺)
      - [background-position背景位置-方位名词](#background-position背景位置-方位名词)
      - [background-position-case背景位置方位名词应用一](#background-position-case背景位置方位名词应用一)
      - [background-position背景位置-精确单位](background-position背景位置-精确单位)
      - [background-position背景位置-混合单位](#background-position背景位置-混合单位)
      - [background-attachment超大背景图片](#background-attachment超大背景图片)
      - [background-shorthand背景属性复合写法](#background-shorthand背景属性复合写法)
    - [box-model-border](#box-model-border)
      - [box-model盒子模型之边框](#box-model盒子模型之边框)
      - [box-model-shorthand盒子模型之复合写法](#box-model-shorthand盒子模型之复合写法)
      - [边框对盒子大小的影响](#边框对盒子大小的影响)
      - [盒子模型之内边距1](#盒子模型之内边距1)
      - [盒子模型之内边距2](#盒子模型之内边距2)
      - [盒子模型之外边距margin](#盒子模型之外边距margin)
      - [块级盒子水平居中对齐](#块级盒子水平居中对齐)
    - [单行文字垂直居中](#单行文字垂直居中)
    - [inline-element-center行内元素/行内块元素水平居中对齐](#inline-element-center行内元素/行内块元素水平居中对齐)
    - [box-shadow](#box-shadow)
    - [伪类before](#伪类before)
    - [练习网站-50个JavaScript项目](#练习网站-50个JavaScript项目)
    



# Note

## HTML & CSS Part 3 (`25/10/2023`)

### CSS常用属性
#### <span>标签的的作用
- 能让某几个文字或者某个词语凸显出来
```html
<p>我的母亲有<span style="color:blue">蓝色</span>的眼睛。</p>
```

#### CSS的属性单位
- 1.长度单位
  '长度单位有相对长度单位和绝对长度单位两种类型。相对长度单位指相对于另一个长度的长度，主要有em、ex、ch、rem、%和可视区百分比长度单位vw、vh、vmin、vmax'
- 2.颜色单位
  '用十六进制数方式表示颜色值'
  '用rgb()函数方式表示颜色值'
  '用rgba()函数方式表示颜色值'

#### 优先级
- 两个冲突的属性，一般在以下面的为准
```html
<style>
    /* pink离div近 覆盖红色，font不冲突不会覆盖*/
   div {
    color: red;
    font-size: 12px;
   }
   div {
    color: pink;
   }
  </style> /*此时会应用下方pink的颜色属性*/
- 优先级排序
```html
    <!-- style > id > class > tag -->
```
- !important：此时会无视优先级直接应用，但不建议常用（破坏规则）


### background类应用
#### background-color背景颜色
```html
<style>
  div {
    width: 200px;
    height: 200px;
    background-color: transparent;
  }
  .box {
    width: 200px;
    height: 200px;
    background-color: blue;
  }
</style>
```

#### background-image背景图片
```html
<style>
    div {
        width: 300px;
        height: 300px;
        background-image: url(images/logo.png);
    }
</style>
```

#### background-repeat背景图片平铺
```html
<style>
 /* 页面元素既可以添加背景颜色也可以添加背景图片 只不过背景图片会压住背景颜色 */
  div {
      width: 300px;
      height: 300px;
      background-color: yellow;
      background-image: url(images/logo.png);
      /* background-repeat: no-repeat; */
      /* 沿着x轴平铺 */
      /* background-repeat: repeat-x; */
      /* 沿着y轴平铺 */
      background-repeat: repeat-y;
  }
</style>
```

#### background-position背景位置-方位名词
```html
        /* 水平方向 left center right */
        /* 垂直 top center bottom */
        /* 默认顺序是水平，垂直。但两个值前后顺序无关，left top, top left效果一样。 */
        /* 如果只指定了一个方位名称，另一个省略，省略那个默认居中对齐 */
        /* background-position:  方位名词; */
        /* background-position: center top; */
        /* background-position: right center; */
        /* 如果是方位名词  right center 和 center right 效果是等价的 跟顺序没有关系 */
        /* background-position: center right; */
        /* 此时 水平一定是靠右侧对齐  第二个参数省略 y 轴是 垂直居中显示的 */
        /* background-position: right; */
        /* 此时 第一个参数一定是 top y轴 顶部对齐   第二个参数省略x  轴是 水平居中显示的 */
```

#### background-position-case背景位置方位名词应用一
```html
<style>
  h3 {
    width: 120px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 700;
    background-image: url(images/icon.png);
    background-repeat: no-repeat;
    background-position: left center;
    /* 方位名称可以颠倒 */
    background-color: yellow;       
    text-indent: 1.5rem;
  }
</style>
```

#### background-position背景位置-精确单位
```html
<style>
  /* 20px 50px; x轴一定是 20  y轴一定是 50 */
 div {
  width: 300px;
  height: 300px;
  background-color: lightblue;
  background-image: url(images/logo.png);
  background-repeat: no-repeat;
  background-position: 20px;
  /* 省略的第二个参数默认y轴居中 */
 }
</style>
```

#### background-position背景位置-混合单位
```html
<style>
  /* 注意x y顺序，如果指定一个，那一定是x */
  /* 方位名词和像素单位可以混用 */
  /* 20px center 顺序一定是x y*/
  div {
    width: 300px;
    height: 300px;
    background-color: pink;
    background-image: url(images/logo.png);
    background-repeat: no-repeat;
    /* background-position: 20px center */
    /* 垂直是20px，水平是居中 */
    background-position: center 20px;
  }
</style>
```

#### background-attachment超大背景图片
```html
<style>
  /* 参考 https://codesandbox.io/s/mscnq */
  /* background-attachment 默认值是scroll */
 body {
  background-image: url(images/bg.jpg);
  background-repeat: no-repeat;
  background-position: center top;
  color: #fff;
  font-size: 20px;
  background-attachment: fixed;
 }
</style>
```

#### background-shorthand背景属性复合写法
```html
<style>
  body {
    /* 普通写法 */
    background-image: url(images/bg.jpg);
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
    background-color: black;
    /* 复合写法 */
    background: black url(images/bg.jpg) no-repeat center top;
    color: #fff;
    font-size: 20px;
  }
</style>
```

### box-model-border
#### box-model盒子模型之边框
```html
<style>
  div {
    width: 300px;
    height: 200px;
    background-color: pink;  
    border-width: 5px;       /* 边框粗细 */
    border-style: solid;     /* 边框样式 */ 
    border-color: blue;      /* 边框颜色 */
  }
</style>
```

#### box-model-shorthand盒子模型之复合写法
```html
<style>
 .box {
  width: 300px;
  height: 200px;
  /* border: 5px dashed red; */
  border-radius: 10px;
  border-top: 5px solid purple; 
  border-bottom: 5px dotted purple;
 }
 .circle {
  width: 200px;
  height: 200px;
  background-color: burlywood;
  border-radius: 50%;               /* 超过50%以后就会变成一个圆 */
 }
</style>
```

#### 边框对盒子大小的影响
- 边框会影响盒子的实际大小
```html
<style>
    /* 我们需要一个200*200的盒子, 但是这个盒子有10像素的红色边框 */
  .box {
    width: 180px;
    height: 180px;
    border: 10px dotted red;
  }
    /* 此时盒子的大小仍然是200*200，但是边框占据了其中一部分的大小 */
</style>
```

#### 盒子模型之内边距1
```html
<style>
  /* 注意此时盒子实际总大小会加上上下左右的padding边距而变大 */
  div {
    width: 200px;
    height: 200px;
    background-color: pink;
    padding-top: 20px;
    padding-left: 10px;
   }
</style>
```

#### 盒子模型之内边距2
```html
<style>
  div {
    width: 200px;
    height: 200px;
    background-color: pink;
    /* 标准设定padding形式 */
    padding-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 5px;
    /* 复合设定padding形式 */
    padding: 5px;                     /* 上下左右 */
    padding 5px 10px;                 /* 上下 左右 */
    padding 5px 10px 20px;            /* 上 左右 下 */
    padding: 5px 10px 20px 30px;      /* 顺时针方向 */
  }
</style>
```

#### 盒子模型之外边距margin
```html
<style>
     /* padding作用：调整盒子边距 */
     /* margin作用：盒子的外边距 */
    .box {
        width: 200px;
        height: 200px;
        background-color: lightblue;
    }
    /* .box-one {
        margin-bottom: 20px;
    } */
    .box-two {
        /* margin-top: 20px; */
        /* margin: 30px; 四周都设边距*/
        /* margin: 30px 50px;上下  左右 */
    }
</style>
```

#### 块级盒子水平居中对齐
```html
<style>
  /* 外边距可以让块级盒子水平居中，两个条件
    1.必须指定宽度
    2.左右的外边距都设置为auto */
  /* 行内和行内块元素，父级用text-align：center居中文字 */
 .header {
  width: 800px;
  height: 200px;
  background-color: lightblue;
  margin: 20px auto;
  text-align: center;
 }
 .box {
  width: 200px;
  height: 200px;
  border: 5px solid #000;
  padding: 10px;
  box-sizing: border-box;
  /* 限定box大小 */
 }
</style>
```

### 单行文字垂直居中
```html
<style>
  p {
    width: 200px;
    height: 200px;
     line-height: 60px;
     text-align: center;  /* 垂直居中关键 */
  }
</style>
```


### inline-element-center行内元素/行内块元素水平居中对齐
```html
<style>
  .header {
    width: 900px;
    height: 200px;
    background-color: lightblue;
    text-align: center;
    
  }
  /* 行内元素或者行内块元素水平居中给其父元素添加 text-align:center 即可 */
</style>
```

### box-shadow
```html
<style>
  div {
    width: 200px;
    height: 200px;
    background-color: red;

  }
  div:hover {
    box-shadow: 10px   10px   10px     20px    rgba(0, 0, 0, 0.5);
             /* x轴    Y轴   阴影大小  阴影半径 */
  }
</style>
```

### 伪类before
- 可以在box上、下分别加入不同格式的边框
```html
<style>
  h1 {
    text-align: center;
  }
  h1::before {                   /* 上边框 */
    content: '';
    display: block;
    background-color: #19b5fe;
    width: 100%;
    height: 10px;
  }
  h1::after {                    /* 下边框 */
    content: '';
    display: block;
    background-color: #19b5fe;
    width: 100%;
    height: 20px;
  }
</style>
```

### 练习网站-50个JavaScript项目
https://github.com/bradtraversy/50projects50days
