- [Note](#Note)
  - [Node_1 (`8/11/2023`)](#node_1-8112023)
    - [Node.js简介](#Nodejs简介)
      - [什么是Node.js](#什么是Nodejs)
      - [Node.js中的JavaScript运行环境](#Nodejs中的JavaScript运行环境)
      - [Node.js能做什么](#Nodejs能做什么)
      - [Node.js怎么学](#Nodejs怎么学)
      - [Node.js环境的安装](#Nodejs环境的安装)
      - [一些终端指令](#一些终端指令)
    - [模块化](#模块化)
      - [模块化的优点](#模块化的优点)
      - [Node.js中模块的分类](#Nodejs中模块的分类)
      - [加载模块](#加载模块)
      - [导入导出模块](#导入导出模块)

<hr>

<p align='center'><img src='../images/Nodejs.png' width='30%' height='30%' /></p>

<hr>

# Note

## Node_1 (`8/11/2023`)

### Node.js简介
#### 什么是Node.js
> Node.js is a JS runtime built on Chrome's V8 JS machine.<br/>
> Node.js 是一个基于 Chrome V8 引擎的JavaScript 运行环境<br/>

<hr>

#### Node.js中的JavaScript运行环境
- JS前端的运行环境是浏览器*
- JS后端的运行环境是Node.js*
> Node.js中无法调用DOM和BOM等浏览器内置方法

<hr>

#### Node.js能做什么
`提供基础框架，更多第三方框架都基于node`

| 框架名 | 介绍 |
| :---: | :---: |
| Express | Web应用 |
| Electron | 跨平台的桌面应用 |
| Restify | 快速搭建API接口项目 |

<hr>

#### Node.js怎么学
- 浏览器中的JavaScript学习路径：
<br/>`JavaScript基础语法 + 浏览器内置API(DOM + BOM) + 第三方库(jQuery、 art-template等)`
- Node.js的学习路径：
<br/>`JavaScript基础语法 + Node.js内置API模块（fs、path、http等）+第三方API模块(express、mysql等)`

<hr>

#### Node.js环境的安装
- [Node官网]：(https://nodejs.org/en)<br>
- LTS为长期稳定版，适合追求稳定性和企业级项目的用户
- Current为新特性尝鲜版，适合热衷于新特性的用户
- 查看已安装的Node.js版本号
<br/>打开终端，输入‘node -v’

<hr>

#### 一些终端指令
- Mac
```plaintext
cd -> 进入指定文件夹路径
pwd -> 显示当前路径
ls -> 显示当前目录下的内容
mkdir -> 创建文件夹
touch -> 创建文件
mvdir -> 移动文件夹/重命名
rm -> 删除文件
rmdir/rd -> 删除空文件夹
clear -> 清除屏幕内容
date -> 显示系统当前日期
ping -> 查询ip地址
ctrl+c -> 终止命令
exit -> 退出terminal
```

- Windows
```plaintext
echo "123" > new.txt 创建非空文件
type nul > newtest.txt 创建空文件
del file.txt 删除文件
rd file 删除空文件夹
```
<hr>

### 模块化
#### 模块化的优点
- 提高代码复用性
- 提高代码可维护性
- 实现按需加载

<hr>

#### Node.js中模块的分类
- 内置模块（由Node.js官方提供：fs\path\http）
- 自定义模块（用户创建的js文件）
- 第三方模块（使用前需要提前先下载）

<hr>

#### 加载模块
- require（）方法

<hr>

#### 导入导出模块
- 单个以及多个变量的导入、导出应用
```js
test1.js:
const value = require('./test2.js');
const value2 = require('./test3.js');
require('./test5.js')
console.log('value', value);
console.log('days', value2);
console.log('myFruits',global.myFruits)


test2.js:
const obj = require('./test4');
const text = 'I love coding';
console.log('obj', obj);
module.exports = text;


test3.js:
console.log(module);
const days = ['monday','2','3'];
module.exports = days;


test4.js:
const obj = {
    name:'Ben',
    age:20,
    gender:'male',
    hi: function(){
        console.log('hello')
    }
}
module.exports = obj;


test5.js:
const fru = ['apple','banana']
globalThis.myFruits = fru;


index.js:
const {arr,str,getSum} = require('./test6');
console.log('arr',arr);
console.log('str',str);
const sum = getSum(10);
console.log('sum',sum);


test6.js
const arr = ['a','b','c'];
const str = 'hello world ';
const getSum = function(n) {
    let result = 0;
    for (let i=1; i<=n; i++){
        result +=i;
    }
    return result;
}
module.exports = {arr,str,getSum};
```
- 计算器应用
```js
app.js:
const {add,subtract,multiply,divide} = require('./caculator');

const sum = add(10,6);
console.log('sum',sum)

const difference =subtract(8,20);
console.log(`difference: ${difference}`)

const product = multiply(2,3);
console.log(`Product: ${product}`);

const quotient = divide(10,0);
console.log(`quotient:${quotient}`)


caculator.js:
const add = function(a,b){
    return a+ b;
    
}
const subtract = function(a,b){
    return a>b ? a - b : b - a;

}
const multiply = function(a,b){
    return a*b;

}
const divide = function(a,b) {
    if (b === 0) {
        return 'Please enter a valid number'
    }else {
        return a / b;
    }
}
module.exports = {add, subtract ,multiply, divide}
```
