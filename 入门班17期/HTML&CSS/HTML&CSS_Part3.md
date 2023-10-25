
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

