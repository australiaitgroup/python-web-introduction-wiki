
- [HTML \& CSS Part 3 (`25/10/2023`)](#html--css-part-3-25102023)



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
- background-color背景颜色
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

- background-image背景图片
```html
<style>
    div {
        width: 300px;
        height: 300px;
        background-image: url(images/logo.png);
    }
</style>
```

- background-repeat背景图片平铺
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

- background-position背景位置-方位名词
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

- background-position-case背景位置方位名词应用一
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

- background-position背景位置-精确单位
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
  /*  */
 }
</style>
```

- 背景位置-混合单位
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

- background-attachment超大背景图片
