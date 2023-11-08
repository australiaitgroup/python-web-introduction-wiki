
# Note

## Node_1 (`8/11/2023`)

### Node.js简介
#### 什么是Node
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

### 模块化
#### 模块化的优点
- 提高代码复用性
- 提高代码可维护性
- 实现按需加载

#### Node.js中模块的分类
- 内置模块（由Node.js官方提供：fs\path\http）
- 自定义模块（用户创建的js文件）
- 第三方模块（使用前需要提前先下载）

#### 加载模块
- require（）方法

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
