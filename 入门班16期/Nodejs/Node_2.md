- [Class Notes](#class-notes)
  - [Resources](#resources)
  - [Node\_2 (`30/07/2023`)](#node_2-30072023)
    - [fs模块: 读取 + 写入文件](#fs模块-读取--写入文件)
      - [fs读取文件](#fs读取文件)
      - [fs写入文件](#fs写入文件)
        - [score读取写入练习](#score读取写入练习)
    - [http模块: 创建web服务器](#http模块-创建web服务器)
      - [IP地址: 每台pc的唯一地址](#ip地址-每台pc的唯一地址)
      - [域名和域名服务器](#域名和域名服务器)
      - [端口号](#端口号)
      - [搭建server步骤](#搭建server步骤)
      - [安装postman](#安装postman)
        - [http模块练习](#http模块练习)
    - [npm包管理和使用](#npm包管理和使用)
      - [格式化输出date - 常用写法](#格式化输出date---常用写法)
      - [格式化输出date - 使用moment库](#格式化输出date---使用moment库)

# Class Notes

## Resources
[Postman官网](https://www.postman.com/)<br>
[moment库](https://momentjs.com/docs/)<br>

## Node_2 (`30/07/2023`)
<p align='center'><img src='../image/nodejs.png' width='30%' height='30%' /></p>

### fs模块: 读取 + 写入文件
*fs模块是Node.js官方提供的, 用来操作文件的模块*<br>
*写入/读取成功err是null, 不成功是obj*<br>
```js
// 使用fs方法前, 先要导入fs
const fs = require('fs');
```

#### fs读取文件
`fs.readFile(path options callback)` *读取*<br>

1. path: 路径
2. options: 编码格式(可选)
3. callback: 回调函数

```js
const fs = require("fs");
fs.readFile("./files/1.txt", "utf8", function (err, data) {
    if (err) {
        return console.log("err", err);
    }
    console.log("data", data);
});
```

#### fs写入文件
`fs.writeFile(path options callback)` *写入*<br>

```js
const fs = require("fs");
fs.writeFile("./files/3.txt", "I love coding", function (err, data) {
    if (err) {
        return console.log("err", err);
    }
    console.log("write file successfully");
});
```

##### score读取写入练习
```js
const fs = require("fs");
fs.readFile("./score.txt", "utf8", function (err, data) {
    if (err) {
        return console.log("read failed", err.message);
    }
    console.log("read file successfully", data, typeof data);
    const arr = data.split(" ");
    console.log("arr", arr);
    let newArr = [];
    arr.forEach(function (item) {
        newArr.push(item.replace("=", ":"));
    });
    console.log("newArr", newArr);
    const newArr2 = newArr.join("\r\n");
    console.log("newArr2", newArr2, typeof newArr2);
    fs.writeFile("./updatedScore.txt", newArr2, function (err, data) {
        if (err) {
            return console.log("write failed", err.message);
        }
        console.log("write file successfully");
    });
});
```

<hr>

### http模块: 创建web服务器

#### IP地址: 每台pc的唯一地址
`192.168.1.1` 0~255

使用`ping www.baidu.com` -> 得到ip

#### 域名和域名服务器
DNS: ip和domain是一一对应的
> DNS自动域名解析成ip<br>
>> localhost - 127.0.0.1<br>

#### 端口号
一个port只能run一个web server
> url的80端口可以被忽略
> mac上面不要使用5000端口

#### 搭建server步骤
1. 导入http模块
2. 创建web server instance
3. 绑定request
4. 启动server

#### 安装postman
`browser只能做get request测试, post request要用postman测试`<br>
[Postman官网](https://www.postman.com/)<br>
```js
const http = require("http");
const server = http.createServer();
server.on("request", function (req, res) {
    console.log("someone is visiting the server");
    const url = req.url;
    const method = req.method;
    const str = url + " and request method is " + method;
    console.log("str", str);
    res.setHeader("Content-Type", "text/html;charset=utf-8"); // 避免乱码
    res.end(str);
});

server.listen(8080, function (req, res) {
    console.log("the server is running on http://localhost:8080");
});
```

##### http模块练习
```js
server.on("request", (req, res) => {
    const url = req.url;
    let content = "<h1>404 not found</h1>";
    if (url === "/" || url === "/home") {
        content = "<h1>welcome to home page</h1>";
    } else if (url === "/about") {
        content = "<h1>welcome to about page</h1>";
    }
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end(content);
});
```

<hr>

### npm包管理和使用
包是用原生方法写的, 安装包后能节省很多代码

```shell
npm -v # 查看npm版本号
```

#### 格式化输出date - 常用写法
```js
function addZero(value) {
    return value < 10 ? "0" + value : value;
}

function convertDate(date) {
    const year = date.getFullYear();
    const month = addZero(date.getMonth() + 1);
    const day = addZero(date.getDate());
    const hour = addZero(date.getHours());
    const minute = addZero(date.getMinutes());
    const second = addZero(date.getSeconds());
    console.log(`${year}-${month}-${day} ${hour}:${minute}:${second}`);
}

convertDate(new Date());
```

#### 格式化输出date - 使用moment库
[moment库](https://momentjs.com/docs/)

```shell
# 第一种写法
npm install moment
# 第二种写法
npm i moment
```

```js
const moment = require("moment"); // 导入moment
console.log(moment().format("YYYY-MM-DD hh:mm:ss"));
```