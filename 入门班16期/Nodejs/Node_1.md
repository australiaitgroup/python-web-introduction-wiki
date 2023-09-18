- [Class Notes](#class-notes)
  - [Resources](#resources)
  - [Node\_1 (`16/07/2023`)](#node_1-16072023)
    - [什么是Node](#什么是node)
    - [浏览器解析引擎](#浏览器解析引擎)
    - [后端开发语言](#后端开发语言)
      - [node能做什么](#node能做什么)
    - [安装node.js](#安装nodejs)
      - [npm安装第三方库](#npm安装第三方库)
    - [常见控制台代码](#常见控制台代码)
    - [命令行指令](#命令行指令)
    - [JS数据类型](#js数据类型)
      - [8种数据类型](#8种数据类型)
    - [模块化](#模块化)
      - [模块化的分类](#模块化的分类)
      - [导出导入模块](#导出导入模块)

# Class Notes

## Resources
[Node官网](https://nodejs.org/en)<br>
[50JS](https://github.com/bradtraversy/50projects50days)<br>

## Node_1 (`16/07/2023`)
<p align='center'><img src='../image/nodejs.png' width='30%' height='30%' /></p>

### 什么是Node
> Node.js is a JS runtime built on Chrome's V8 JS machine.

| DOM | BOM |
| :---: | :---: |
| ***访问和操作html和xml文档*** | ***操作浏览器窗口。它包括了window对象、navigator对象、location对象等*** |

`window.location.href`: 拿到url

<hr>

### 浏览器解析引擎
<p align='center'><img src='../image/Why can JS run in the browser.png' width='50%' /></p>

<p align='center'><img src='../image/JS operates DOM.png' width='50%' height='50%' /></p>

*JS前端的运行环境是浏览器*
*JS后端的运行环境是Node.js*
> Node.js中无法调用DOM和BOM等浏览器内置方法

<hr>

### 后端开发语言
Java/Python/PHP/Node.js

<hr>

#### node能做什么
`很多第三方框架可以节省代码`

| 框架名 | 介绍 |
| :---: | :---: |
| Express | Web应用 |
| Electron | 跨平台的桌面应用 |
| Restify | 快速搭建API接口项目 |

`JS基础语法 + node.js内置api + 第三方api`

<hr>

### 安装node.js

<https://nodejs.org/en>

- node -v
- 使用.exit退出

#### npm安装第三方库
```shell
npm i package_name
```

<hr>

### 常见控制台代码
*使用node file_name运行*

```js
console.log("hello world");
```

<hr>

### 命令行指令
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

### JS数据类型

#### 8种数据类型
undefined, null, string, number, boolean, symbol(唯一表示符), bigInt(大整数), object(Function, Array, Date, RegExp, etc)

```js
console.log(999999999n) //bigInt
console.log(BigInt(999999999)) //bigInt
```

```js
let s = Symbol();
```

<hr>

### 模块化
- 复用性
- 可维护性
- 按需加载

#### 模块化的分类
- 内置模块
- 自定义模块
- 第三方模块 (先安装, 再导入)

#### 导出导入模块
- 使用module.export
```js
let text = "demo";
module.exports = text;

const text = require('./text1');
console.log('text', text);
```

- 使用global
```js
let arr=[1,2,3];
global my_Arr = arr;

require('./text1');
console.log('my_Arr', my_Arr);
```

`导出多个变量`

```js
let arr = [1,2,3];
let helloString = "hello world";
module.exports = {arr, helloString};

const {arr, helloString} = require("./test6");
console.log("arr", arr);
console.log("helloString", helloString);
```
