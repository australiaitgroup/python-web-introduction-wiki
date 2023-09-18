- [Class Notes](#class-notes)
  - [Resources](#resources)
  - [JavaScript\_tutorial\_2 (`27/07/2023`)](#javascript_tutorial_2-27072023)
    - [复习lecture内容](#复习lecture内容)
      - [condition](#condition)
        - [if/else](#ifelse)
        - [三目运算符](#三目运算符)
        - [Logical operator](#logical-operator)
      - [循环](#循环)
        - [for循环](#for循环)
        - [while循环](#while循环)
      - [String方法](#string方法)
      - [遍历Object](#遍历object)
    - [0-15, 判断奇偶性并依次打印](#0-15-判断奇偶性并依次打印)
      - [solution 1: 三目运算符](#solution-1-三目运算符)
      - [solution 2: while循环](#solution-2-while循环)
    - [找到数组中出现频率最高的元素](#找到数组中出现频率最高的元素)
      - [solution 1: reduce](#solution-1-reduce)
      - [solution2: for循环遍历array](#solution2-for循环遍历array)
    - [找程序bug](#找程序bug)
    - [DOM选择器](#dom选择器)
      - [DOM用法](#dom用法)
    - [DOM练习](#dom练习)
      - [counter (在output div中显示时间)](#counter-在output-div中显示时间)
        - [solution 1: 箭头函数作为回调函数](#solution-1-箭头函数作为回调函数)
        - [solution 2: 命名函数作为回调函数](#solution-2-命名函数作为回调函数)
      - [toggle (每隔2s添加和移除hide类)](#toggle-每隔2s添加和移除hide类)
        - [solution 1: toggle方法](#solution-1-toggle方法)
        - [solution 2: add/remove方法](#solution-2-addremove方法)
      - [collapse (点击箭头，对应的'extra info'部分消失)](#collapse-点击箭头对应的extra-info部分消失)
        - [solution 1: closest](#solution-1-closest)
        - [solution 2: parentNode + children](#solution-2-parentnode--children)
        - [solution 3: 使用多次querySelectorAll()](#solution-3-使用多次queryselectorall)
        - [solution 4: solution3的精简版](#solution-4-solution3的精简版)
      - [expand (expand less - expand more切换)](#expand-expand-less---expand-more切换)
        - [solution 1: getElementById + forEach](#solution-1-getelementbyid--foreach)
        - [solution 2: querySelectorAll + forEach](#solution-2-queryselectorall--foreach)
        - [solution 3: parentNode + children](#solution-3-parentnode--children)

# Class Notes

## Resources
[JS_tutorial_1答案](https://narrow-howler-e0c.notion.site/JS-tutorial_1-c1af3fe7744943abb0e1f18fada82474)<br>

## JavaScript_tutorial_2 (`27/07/2023`)

<p align='center'><img src='../image/js.png' width='30%' height='30%' /></p>

### 复习lecture内容

#### condition
##### if/else
```js
if (condition) {}
else if (condition){}
else {}
```

##### 三目运算符
```js
condition ? expression1 : expression2
```

##### Logical operator
```js
a && b
a || b
```

#### 循环
##### for循环
```js
for (let i = 1; i <= 100; i++){
    // expression
}
```

##### while循环
```js
let i = 1;
while (i < 100){
    // expression
    i++;
}
```

#### String方法
- replace *可以添加正则表达式(e.g., [a-z]*, {n}, ^s, .)作为参数*<br>
- split<br>
- substr<br>
- concat<br>
- startsWith<br>

#### 遍历Object
```js
const obj = {
    firstname: "John",
    lastname: "Smith",
};

for (let key in obj) {
    console.log(key);
    // firstname - string类型
    // lastname - string类型
}

for (let value of Object.values(obj)) {
    console.log(value);
    // John - string类型
    // Smith - string类型
}
```

<hr>

### 0-15, 判断奇偶性并依次打印
#### solution 1: 三目运算符
```js
for (let i = 0; i < 16; i++) i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
```

> template string使用的是``而不是''<br>
> template string可以用 \表示不想要空行, 只是方便developer浏览代码<br>

#### solution 2: while循环
```js
let i = 0;
while (i < 16) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
    i++;
}
```

<hr>

### 找到数组中出现频率最高的元素
#### solution 1: reduce
```js
function countLargestItem(arr) {
    const countMap = arr.reduce((countMap, item) => countMap.set(item, (countMap.get(item) ?? 0) + 1), new Map());
    const largest_element = [...countMap].sort((a, b) => b[1] - a[1])[0];
    return `The largest element is ${largest_element[0]}. It appears ${largest_element[1]} times.`
}

console.log(countLargestItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))
```

#### solution2: for循环遍历array
```js
function findTheMostFrequenItem(arr) {
    if (arr.length <= 0) return;
    let frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentItem;
    for (let item of arr) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1; // undefined时使用0
        if (frequencyMap[item] > maxFrequency) {
            maxFrequency = frequencyMap[item];
            mostFrequentItem = item;
        }
    }
    return `${mostFrequentItem} ( ${maxFrequency} times )`;
}

console.log(findTheMostFrequenItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
```

<hr>

### 找程序bug
```js
function doubleIfEven(n) {
    x = n;
    if (even(x)) return double(x);
    return x;
}

function even(a) {
    x = a;
    if (x%2 == 0) {
        x = true;
    }
    else {
        x = false;
    }
    return x;
}

function double(a) {
    return a*2;
}

const input = [3, 2, 1, 4, 2, 3, 2, 3, 6, 2, 4, 9, 3];

for (let num of input) {
    console.log(doubleIfEven(num));
}
```

> 在function内部变量要使用let/const声明

<hr>

### DOM选择器
```js
getElementById()
querySelector()
querySelectorAll()
getElementsByClassName()
getElementsByTagName()

// id: '#', class: '.'
```

#### DOM用法
```plaintext
classlist
addEventListener()

e.target.value //input value
//event listener
* click onClick
* keyDown onChange
```

<hr>

### DOM练习
#### counter (在output div中显示时间)
```shell
//in one window use Python to start a HTTP server for the exercises
//refresh the webpage (control-R inchrome and firefox)
cd counter
python3 -m http.server

//new window:
cd counter
code . //vs code

more index.html
vi counter //terminal
```

##### solution 1: 箭头函数作为回调函数
```js
(function() {
   'use strict';
   const output = document.getElementById('output');
   void setInterval(()=>{
      const d = new Date();
      output.innerText = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
   },1000);
}());
```

##### solution 2: 命名函数作为回调函数
```js
const currentTimeDiv = document.getElementById("output");

function addZero(value) {
    return value < 10 ? "0" + value : value;
}

function updateCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = addZero(currentTime.getMinutes());
    const seconds = addZero(currentTime.getSeconds());
    const timeString = `${hours}:${minutes}:${seconds}`;
    currentTimeDiv.textContent = `Current Time: ${timeString}`;
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);
```

#### toggle (每隔2s添加和移除hide类)
##### solution 1: toggle方法
```js
const outputElement = document.getElementById("output");
setInterval(() => {
    outputElement.classList.toggle("hide");
}, 2000);
```

##### solution 2: add/remove方法
```js
const outputElement = document.getElementById("output");
let flag = true;
setInterval(() => {
    flag = !flag;
    if (flag) {
        outputElement.classList.add("hide");
    } else {
        outputElement.classList.remove("hide");
    }
}, 2000);
```

#### collapse (点击箭头，对应的'extra info'部分消失)

##### solution 1: closest
```js
function handleArrowButtonClick() {
    this.closest(".info-item").querySelector(".extra-info").style.display = "none"; // this指代点击事件的i元素, 这里无论使用this, e.target, e.currentTarget效果是一样的
}

document.querySelectorAll(".expand-collapse-btn>i").forEach(button => {
    button.addEventListener("click", handleArrowButtonClick);
});
```

##### solution 2: parentNode + children
```js
(function () {
    const main = document.getElementById("main");
    main.addEventListener("click", e => {
        if (e.target.tagName === "I") { //e.target指向main元素的子元素i, 这里用的是箭头函数, this表示window元素而不是触发事件的元素. 这里你改写成命名函数, this会指代main元素
            e.target.parentNode.parentNode.parentNode.children[1].children[2].style.display = "none";
        }
    });
})();
```

##### solution 3: 使用多次querySelectorAll()
```js
document.querySelectorAll(".material-icons")[1].addEventListener("click", () => {
    document.querySelectorAll(".extra-info")[0].style.display = "none";
});

document.querySelectorAll(".material-icons")[2].addEventListener("click", () => {
    document.querySelectorAll(".extra-info")[1].style.display = "none";
});
```

##### solution 4: solution3的精简版
```js
const [, ...itag] = document.querySelectorAll(".material-icons");
itag.forEach((button, index) => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".extra-info")[index].style.display = "none";
    });
});
```

#### expand (expand less - expand more切换)
##### solution 1: getElementById + forEach
```js
const arr = [1, 2];
arr.forEach(i => {
    document.getElementById(`item-${i}`).addEventListener("click", e => {
        const content = document.getElementById(`item-${i}-content`);
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
        if (e.target.innerHTML === "expand_less") {
            e.target.innerHTML = "expand_more";
        } else {
            e.target.innerHTML = "expand_less";
        }
    });
});
```

##### solution 2: querySelectorAll + forEach
```js
const [, , ...itag] = document.querySelectorAll(".material-icons");
itag.forEach((item, index) =>
    item.addEventListener("click", () => {
        if (item.textContent === "expand_less") {
            item.textContent = "expand_more";
            document.querySelectorAll(".extra-info")[index].style.display = "none";
        } else if (item.textContent === "expand_more") {
            item.textContent = "expand_less";
            document.querySelectorAll(".extra-info")[index].style.display = "block";
        }
    })
);
```

##### solution 3: parentNode + children
```js
(function () {
    "use strict";
    const main = document.getElementById("main");
    main.addEventListener("click", e => {
        if (e.target.tagName == "I" && [...main.querySelectorAll(".expand-collapse-btn>i")].includes(e.target)) {
            let state = null;
            if (e.target.innerHTML == "expand_more") {
                e.target.innerHTML = "expand_less";
                state = "block";
            } else {
                e.target.innerHTML = "expand_more";
                state = "none";
            }
            e.target.parentNode.parentNode.parentNode.children[1].children[2].style.display = state;
        }
    });
})();
```