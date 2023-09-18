- [Class Notes](#class-notes)
  - [Resources](#resources)
  - [JavaScript\_tutorial\_1 (`20/07/2023`)](#javascript_tutorial_1-20072023)
    - [为什么不用div要用img/button这些](#为什么不用div要用imgbutton这些)
    - [h1设置颜色/字体粗细](#h1设置颜色字体粗细)
    - [浏览器Inspect](#浏览器inspect)
    - [JS执行顺序](#js执行顺序)
    - [命名变量](#命名变量)
    - [作用域](#作用域)
    - [array遍历](#array遍历)
    - [practice code](#practice-code)

# Class Notes

## Resources
[Notions课件](https://narrow-howler-e0c.notion.site/JS-1-c1af3fe7744943abb0e1f18fada82474)<br>
[JS阅读](https://github.com/getify/You-Dont-Know-JS)<br>

## JavaScript_tutorial_1 (`20/07/2023`)

<p align='center'><img src='../image/js.png' width='30%' height='30%' /></p>

### 为什么不用div要用img/button这些
- 语义化
- div需要额外的css/js来实现img/button的默认效果

<hr>

### h1设置颜色/字体粗细
```css
h1{
    color: red;
    fold-weight: bold;
}
```

`一般用class选择器`

- 避免覆盖全局标签, 有针对性
- 优先级比inline低, 防止个性化class失效
- 复用性高, 容易控制

<hr>

### 浏览器Inspect
f12 -> console/inspect element/network/etc

<hr>

### JS执行顺序
顺序执行, 不加分号也能运行

<hr>

### 命名变量
避免使用var (scope冲突)
使用let/const

<hr>

### 作用域
- 在function内部定义的var不能在外部访问
- 外部定义的变量可以被内部function访问

```js
let i = 1;
function sum() {
    const c = 2;
    i = 3;
    console.log(c);
}

sum(); // c = 2
console.log(i); // 3
console.log(c); // error
```

<hr>

### array遍历
```shell
for ... in -> index
for ... of -> value
map (item, index) -> 按照指定pattern, 每个元素执行相同的操作并返回一个新array(length保持一致)
flatmap -> 弥补了map方法length要一致的局限性, 一边filter一边有针对性修改elements(map+扁平化处理), 写法较map复杂但能实现特殊需求(预分配数据并显性迭代; 结合split方法; 添加和删除元素; 类数组处理, etc)
filter -> 从原array挑选部分元素(新length < 原length)
reduce -> 做累加等操作
```

<hr>

### practice code
```js
const users = [
    {
        name: "Jeff",
        age: 52,
        gender: "male",
    },
    {
        name: "Andy",
        age: 25,
        gender: "male",
    },
    {
        name: "Sarah",
        age: 30,
        gender: "female",
    },
    {
        name: "Phoebe",
        age: 21,
        gender: "female",
    },
    {
        name: "Doris",
        age: 81,
        gender: "female",
    },
];

const arr = users
    .filter(user => user.gender === "male")
    .filter(user => user.name.toLowerCase().startsWith("a"))
    .map(user => user.age);

const avg = arr.reduce((result, element) => result + element, 0) / arr.length;

console.log(avg);
```