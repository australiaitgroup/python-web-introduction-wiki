- [Note](#Note)
  - [JavaScript\_tutorial(`02/11/2023`)](#javascript_tutorial-02112023)
    - [复习](#复习)
      - [三种输出方式](#三种输出方式)
      - [数据类型](#数据类型)
      - [运算符](#运算符)
    - [练习](#练习)
      - [在他们的网站上放置了以下的HTML代码会输出什么](#在他们的网站上放置了以下的HTML代码会输出什么)
      - [写一段CSS使 h1 elements红色加粗](#写一段CSS使-h1-elements红色加粗)
      - [为什么要使用CSS类而不是直接使用标签选择器](#为什么要使用CSS类而不是直接使用标签选择器)
      - [当我们像这样两次定义相同的CSS规则时会发生什么](#当我们像这样两次定义相同的CSS规则时会发生什么)
      - [DevTools上的sources network和console标签的目的是什么](#DevTools上的sources-network和console标签的目的是什么)
      - [哪里可以获取有关CSS的定位和网站布局的更多信息](#哪里可以获取有关CSS的定位和网站布局的更多信息)
      - [JavaScript执行逻辑](#JavaScript执行逻辑)
      - [为什么我们要避免使用 var 或者简单地声明一个变量](#为什么我们要避免使用-var-或者简单地声明一个变量)
      - [什么是箭头函数 也被称为匿名函数或lambda 它的语法是怎样的](#什么是箭头函数-也被称为匿名函数或lambda-它的语法是怎样的)
      - [x in items 和 x of items之间有什么区别](#x-in-items-和-x-of-items之间有什么区别)
      - [这段代码有什么问题](#这段代码有什么问题)
      - [可以通过我访问的网站上的 JavaScript 删除我所有的文件吗](#可以通过我访问的网站上的-JavaScript-删除我所有的文件吗)
      - [给定一个类似下面的数据集并找到名字以A开头的男性的平均年龄](#给定一个类似下面的数据集并找到名字以A开头的男性的平均年龄)
      - [给定一个表示购物车的字符串数组并打印出每个商品及其在数组中出现的次数](#给定一个表示购物车的字符串数组并打印出每个商品及其在数组中出现的次数)
      - [不更改但输入数组已更改为对象数组该函数将输出什么](#不更改但输入数组已更改为对象数组该函数将输出什么)
      - [重写函数使其适用于包含对象的数组并打印出每个项目的总成本](#重写函数使其适用于包含对象的数组并打印出每个项目的总成本)



  
# Note

## JavaScript_tutorial (`02/11/2023`)

### 复习
#### 三种输出方式
```html
alert('p')
prompt('q')
console.log('q')//（console.warn(警告)/info（提示）/error（错误））
```
#### 数据类型
- 基本数据类型
```html
  · string, number, boolean, undefined, null
    · string（转换语法）
        · string.length
        · num.toString()  String()  num+''(隐式转换)
    · Num
        · parseInt(num/string)  parseFloat(num)（确定特具体需求时使用）
        · Number(string)（更宽泛的用法）
        · string - * / num（隐式转换）
    · Boolean
        · Boolean() (强制类型转换)
        · num: 0 → false，除此之外其他都为true
        · string: '' → false，除此之外都是true
```
- 对象object
```html
  · object, array
    · for loop
    · while
```

#### 运算符
- 自增++
```html
先自增还是先赋值
a = a++ 先赋值再自增
a += 1 先自增再赋值
```
- 循环
```html
for(let i=0; i++; i<10) {
  ...logic
    for() {
      if(...) continue;
      break;
    }
}

let i=0;
while(i<10) {
  ...logic
i++
}

do{
...logic
}while(i<10)
```
- 条件
```html
if(condition) {
  ...logic
}if else {
  ...logic
}else {
  ...logic
}

switch(i) {
  case i===1:...;break;
  case i===2:...;
}
```
- 三目运算
```html
expression(condition)?  logic(true):  logic(false)/
const b =a?1:2                                        //此时只需一行代码

let b;                                                //对比之下同样的意义，其他形式就更加复杂
if(a===true){
  b=1
}else {
  b=2
}
```
- 或 与逻辑
```html
const a = b || 1  （或先判断左边，只要左边true就直接输出）
const b = a && undefined   （与有一边不是true，就会报不一样的那边）
```




### 练习
#### 在他们的网站上放置了以下的HTML代码会输出什么
```html
<p dfsd="1"></p>   //这里会看到一个空的P DOM
```
#### 写一段CSS使 h1 elements红色加粗
```html
h1 {
  color: red;
  font-weight: bold;
}
```
#### 为什么要使用CSS类而不是直接使用标签选择器
```html
  使用标签选择器：容易影响到其他页面的标签
  a. class name（定位更精确，可以复用）
  b. h1
```
#### 当我们像这样两次定义相同的CSS规则时会发生什么
```html
h1{
  color: red;
}
h1{
  color: blue;
}
此时会应用更下方的这一个tag，因为会混用所以不建议使用
```
#### DevTools上的sources network和console标签的目的是什么
- console:
- source: 会以一些其他形式显示打包的代码，可在上面画断点，做标注，方便debug
- network:

#### 哪里可以获取有关CSS的定位和网站布局的更多信息
- key resource
```html
https://developer.mozilla.org/en-US/docs/Learn/JavaScript
https://developer.mozilla.org/en-US/docs/Web/API
https://www.w3schools.com/js/js_htmldom.asp
World Wide Web consortium (w3c) DOM specification
```
- css
```html
https://flexboxfroggy.com/
https://codepip.com/games/grid-garden/
https://www.youtube.com/watch?v=7kVeCqQCxlk
```
- Book
```html
https://github.com/getify/You-Dont-Know-JS
https://github.com/sorrycc/awesome-javascript
https://github.com/stoeffel/awesome-fp-js
```

#### JavaScript执行逻辑
```html
当我们说JavaScript是单线程时，它是指JavaScript在执行时只有一个主线程。这意味着JavaScript代码是按顺序执行的，一次只能执行一个任务。如果有多个任务需要执行，它们会按照顺序排队等待执行，直到前一个任务完成。
由于JavaScript是单线程的，所以在执行某个耗时的任务时，其他任务必须等待。这也意味着如果一个任务出现阻塞或执行时间过长，会导致整个应用程序的响应变慢或冻结。
然而，JavaScript也支持异步编程模式，通过使用回调函数、Promise、async/await等机制，可以在执行异步任务时不阻塞主线程，从而提高应用程序的性能和响应能力。
按顺序执行，前面function执行结束才会执行后面的function。
单线程为主，某些情况也支持异步操作。
a=100
1. 线上消费 a=100-10    a=90
2. 线下消费 a=100-20    a=80  //异步模式出错例子，采用单线程就不会出现这种错误
```

#### 为什么我们要避免使用 var 或者简单地声明一个变量
```html
a. const let (es6)
b. function(){
      i. var a=1
  }                         //var没有作用域的概念，不正确使用容易出错
```

#### 什么是箭头函数 也被称为匿名函数或lambda 它的语法是怎样的
```
function functionA() {

}
const functionA=() => {  }
```

#### x in items 和 x of items之间有什么区别
```html
for(let i=1; i<100; i++)      //a=[1,2,3,4,5]
for(x in items)               //in 代表array的index，index:位置从0开始
for(x of items)               //of 代表array的value, value
```

#### 这段代码有什么问题
```html
import { sum } from 'package'
console.log(`2 + 2 = ${sum(2, 2)}`)；
export function sum(a, b) {
    return a + b
}
                              //应该先定义，后console.log应用function
```


#### 可以通过我访问的网站上的 JavaScript 删除我所有的文件吗
- 不行，因为是运行在browser上的，无法删除本地文件


#### 给定一个类似下面的数据集并找到名字以A开头的男性的平均年龄
```html
hint：string.startsWith(letter) name 以A开头，男性的平均年纪
const users = [
  {
    name: 'Jeff',
    age: 52,
    gender: 'male'
  },
  {
    name: 'Andy',
    age: 25,
    gender: 'male'
  },
  {
    name: 'Sarah',
    age: 30,
    gender: 'female'
  },
  {
    name: 'Phoebe',
    age: 21,
    gender: 'female'
  },
  {
    name: 'Doris',
    age: 81,
    gender: 'female'
  }
];

let totalAge = 0;
let count = 0;

for(let i=0; i < users.length; i++) {
    const user = users[i];
    if(user.gender === 'male' && user.name.startsWith('A')){
        totalAge += user.age;
        count++;
    }
}
if(count>0) {
    console.log(totalAge/count)
}
```

#### 给定一个表示购物车的字符串数组并打印出每个商品及其在数组中出现的次数
```html
const cart = ['Apple', 'Orange', 'Apple', 'Strawberry', 'Orange'];

countCart(cart);
// above would print
// Apple 2
// Orange 2
// Strawberry 1

const cart = ['Apple', 'Orange', 'Apple', 'Strawberry', 'Orange'];

const count = {}

for (const item of cart) {
    count[item] = count[item] ? count[item]+1 : 1;
    //count[item] += count[item]
    // if(count[item]){
    //     count[item]++
    // }else{
    //     count[item]=1
    // }
    // count[item] = count[item]++
    // count[item] += count[item]

console.log(item, count[item])
}
// for (const item of Object.keys(count)) {
//     console.log(item + ':' + count[item])
// }
```

#### 不更改但输入数组已更改为对象数组该函数将输出什么
```html
const cart = [
  {
    name: 'Apple',
    cost: 2.30
  },
  {
    name: 'Orange',
    cost: 4.50
  },
  {
    name: 'Apple',
    cost: 2.30
  },
  {
    name: 'Strawberry',
    cost: 6.70
  },
  {
    name: 'Orange',
    cost: 4.50
  }
];

countCart(cart);                 //层级太深，打印不出来细节，会出现5个object
```

#### 重写函数使其适用于包含对象的数组并打印出每个项目的总成本
```html
  Apple 4.6
  Orange 9
  Strawberry 6.7

const cart = [
  {
    name: 'Apple',
    cost: 2.30
  },
  {
    name: 'Orange',
    cost: 4.50
  },
  {
    name: 'Apple',
    cost: 2.30
  },
  {
    name: 'Strawberry',
    cost: 6.70
  },
  {
    name: 'Orange',
    cost: 4.50
  }
];


let count = {} 
for(let item of cart){
    count[item.name] = count[item.name] ? count[item.name] + item.cost : item.cost
}
console.log(count)                        //for loop
```

