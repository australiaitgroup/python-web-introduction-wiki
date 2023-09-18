- [Class Notes](#class-notes)
  - [Resources](#resources)
  - [JavaScript\_2 (`23/07/2023`)](#javascript_2-23072023)
    - [if/else结构](#ifelse结构)
      - [score if-else练习](#score-if-else练习)
        - [solution 1: if/else](#solution-1-ifelse)
        - [solution 2: ternary operator (可以但不推荐)](#solution-2-ternary-operator-可以但不推荐)
    - [三元运算符 (分支少时可以用)](#三元运算符-分支少时可以用)
      - [判断成绩是否大于90](#判断成绩是否大于90)
      - [判断变量小于10时在前面添加0](#判断变量小于10时在前面添加0)
    - [switch用法 (全等匹配)](#switch用法-全等匹配)
      - [水果switch判断](#水果switch判断)
    - [循环](#循环)
      - [统计总分数和平均数](#统计总分数和平均数)
      - [计算1-100能被3整除的和](#计算1-100能被3整除的和)
      - [使用while计算1-100的和](#使用while计算1-100的和)
    - [console.log设置filter](#consolelog设置filter)
    - [Break和Continue](#break和continue)
      - [for实现break](#for实现break)
      - [forEach实现break](#foreach实现break)
      - [for实现continue](#for实现continue)
      - [forEach实现continue](#foreach实现continue)
      - [1-100除了能被7整除的和](#1-100除了能被7整除的和)
    - [Array](#array)
      - [求总和\&平均数](#求总和平均数)
      - [求数组最大值](#求数组最大值)
        - [solution 1: for循环](#solution-1-for循环)
        - [solution 2: Math.max()](#solution-2-mathmax)
      - [得到array的index](#得到array的index)
      - [array转化成string](#array转化成string)
    - [Object](#object)
      - [遍历object的value](#遍历object的value)
        - [solution 1](#solution-1)
        - [solution 2](#solution-2)
  - [作业](#作业)

# Class Notes

## Resources
[array_push](https://www.w3schools.com/jsref/jsref_push.asp)<br>
[array_pop](https://www.w3schools.com/python/ref_list_pop.asp)<br>
[array_unshift](https://www.w3schools.com/jsref/jsref_unshift.asp)<br>
[array_shift](https://www.w3schools.com/jsref/jsref_shift.asp)<br>

## JavaScript_2 (`23/07/2023`)

<p align='center'><img src='../image/js.png' width='30%' height='30%' /></p>

### if/else结构
```js
if (条件表达式) {
    执行语句1;
}
```

> 只有一条执行语句时, {}可以省略

#### score if-else练习
##### solution 1: if/else
```js
let score = prompt("Please enter your score");
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("E");
}
```

##### solution 2: ternary operator (可以但不推荐)
```js
let score = prompt("Please enter your score");
console.log(score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "E");
```

### 三元运算符 (分支少时可以用)
`syntax: 条件 ? 执行语句1 : 执行语句2`

#### 判断成绩是否大于90
```js
let score = 85;
console.log(score > 90 ? "A" : "B"); // B
```

#### 判断变量小于10时在前面添加0
```js
let num = prompt("Please enter  a number between 0~59");
let res = num < 10 ? "0" + num : num;
alert(res);
```

### switch用法 (全等匹配)
> `多个case每个都要test下, case后面要记得加break`

`switch demo`
```js
const num = 3;
switch (num) {
    case 1:
        console.log(num);
        break;
    case 2:
        console.log(num);
        break;
    case 3:
        console.log(num);
        break;
    default:
        console.log("not match");
}
```

#### 水果switch判断
```js
let fruit = prompt("Please enter a fruit name: ");
switch (fruit) {
    case "apple":
        alert("$3/kg");
        break;
    case "banana":
        alert("$4/kg");
        break;
    default:
        alert(fruit + " is not available");
}
```

<hr>

### 循环
- for循环
- while循环
- do...while循环

> 和if/else相似, 当循环体内部只有一条执行语句时, {}可以省略

```js
for (let i = 1; i <= 100; i++) {
    if (i === 1) {
        console.log("The person is 1 year old");
    } else if (i === 100) {
        console.log("The person is 100 years old");
    } else {
        console.log(i);
    }
}
```

#### 统计总分数和平均数
```js
let num = parseInt(prompt("total class number"));
let scoreSum = 0;
for (let i = 1; i <= num; i++) {
    let score = parseFloat(prompt(`请输入第${i}个学生的成绩`));
    scoreSum += score;
}
let average = scoreSum / num;
alert(`Total_score: ${scoreSum} \nAverage_score: ${average}`);
```

#### 计算1-100能被3整除的和
```js
let sum = 0;
for (let i = 1; i <= 100; i++) if (i % 3 === 0) sum += i;
console.log(sum); // 1683
```

#### 使用while计算1-100的和
```js
let sum = 0;
let i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
console.log("sum", sum);
```

<hr>

### console.log设置filter
```js
console.log("featureA sum", 123)
console.log("feartureA average", 123)
```

> 之后在filter中输入"featureA", 就能有针对性地看到结果

<hr>

### Break和Continue
| break | continue |
| :---: | :---: |
| ***退出整个循环*** | ***跳出本次循环<br>继续下一次循环*** |

*对于array来说, 需要用到break和continue时一般用for循环处理, 实际上forEach也能实现这一点, 但会有代价(如原array被清空). 除了上面的情况, 大多数情况使用forEach做遍历, 因为比较简洁*

#### for实现break
```js
const arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 3) break;
    console.log(arr1[i]); // 1 2
}

console.log(arr1); // [1, 2, 3, 4, 5]
```

#### forEach实现break
```js
const arr = [1, 2, 3, 4, 5];
arr.forEach(value => {
    if (value === 2) arr.length = 0;
    console.log(value); // 1 2
});

console.log(arr); // []
```

#### for实现continue
```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i); // 1 2 4 5
}
```

#### forEach实现continue
```js
[1, 2, 3, 4, 5].forEach(i => {
    if (i === 3) return;
    console.log(i) // 1 2 4 5
})
```

#### 1-100除了能被7整除的和
```js
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) continue;
    sum += i;
}
console.log(sum); // 4315
```

<hr>

### Array
`array demo`
```js
let arr = new Array(); // 使用new Array()创建新数组
let arr1 = []; // 使用[]创建新数组
let arr2 = [1, 3, 5, 7];
console.log(arr2[0]); // 1
console.log(arr2[arr2.length - 1]); // 7
```

#### 求总和&平均数
```js
const arr = [2, 6, 1, 7, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) sum += arr[i];
const avg = sum / arr.length;
console.log(sum); // 20
console.log(avg); // 4
```

#### 求数组最大值
##### solution 1: for循环
```js
const arr = [2, 6, 1, 77, 52, 25, 7];
let max = arr[0];
for (let i = 1; i < arr.length; i++) if (arr[i] > max) max = arr[i];
console.log(max);
```

##### solution 2: Math.max()
```js
const arr = [2, 6, 1, 77, 52, 25, 7];
console.log(Math.max(...arr));
```

`push方法`
- 改变原数组 (后面添加)
- 返回值是新数组length

`pop方法`
- 改变原数组 (删除了最后一个元素)
- 返回的是最后面被删除的元素

`unshift方法`
- 改变原数组 (前面添加)
- 返回值是新数组length

`shift方法`
- 改变原数组 (删除了开始的元素)
- 返回的是最前面被删除的元素

#### 得到array的index
```js
let arr = ["red", "green", "blue", "pink", "blue"];
let index = arr.indexOf("blue");
console.log(index); // 2
let arr2 = ["red", "green", "blue", "pink", "blue"];
let index2 = arr2.lastIndexOf("blue");
console.log(index2); // 4
```

#### array转化成string
```js
let arr = ['red', 'green', 'blue', 'pink', 'blue'];
console.log(arr.toString())  // 'green,blue,red'
console.log(arr.join(' ')) // "green blue red"
```

> toString()和join()不改变原数组

<hr>

### Object
`无序的集合`

> 对象 = 属性 + 方法

```js
var star = {
    name: "pink",
    age: 18,
    sex: "male",
    sayHi() {
        console.log("hello");
    },
};
console.log(star.name);
console.log(star["name"]);
star.sayHi();
```

#### 遍历object的value
##### solution 1
```js
let obj = {
    name: "Chirs",
    age: 40,
    hobby: "codeing",
    gender: "female",
};
for (let key in obj) console.log(obj[key]);
```

##### solution 2
```js
let obj = {
    name: "Chirs",
    age: 40,
    hobby: "codeing",
    gender: "female",
};
for (let value of Object.values(obj)) console.log(value);
```

<hr>

## 作业
16题 + 17题 + homework.md
