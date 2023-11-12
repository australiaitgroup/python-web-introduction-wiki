- [Note](#Note)
  - [Node_2 (`12/11/2023`)](#node_2-12112023)
    - [fs模块](#fs模块)
      - [什么是fs文件系统模块](#什么是fs文件系统模块)
      - [读取指定文件中的内容](#读取指定文件中的内容)
      - [向指定的文件中写入内容](#向指定的文件中写入内容)
      - [read和writer_file小练习](#read和writer_file小练习)
    - [http模块及创建web服务器](#http模块及创建web服务器)
      - [什么是http模块](#什么是http模块)
      - [http模块的作用](#http模块的作用)
      - [服务器相关概念](#服务器相关概念)
      - [创建最基本的web服务器](#创建最基本的web服务器)
      - [根据不同的url响应不同的html内容](#根据不同的url响应不同的html内容)
    - [npm包管理和使用](#npm包管理和使用)
      - [包](#包)
      - [npm初体验](#npm初体验)



# Note


## Node_2 (`12/11/2023`)

### fs模块
#### 什么是fs文件系统模块
- 是Node.js官方提供的、用来操作文件的模块。它提供一系列的方法和属性，满足用户对文件的操作需求
<br>例如
<br>``
```js
// 使用fs方法前, 先要导入fs
const fs = require('fs');
```
#### 读取指定文件中的内容
- fs.readFile() 的语法格式
```js
  fs.readFile(path[, options], callback)
//1. path: 路径
//2. options: 编码格式(可选)
//3. callback: 回调函数
```
- fs.readFile() 的示例代码
```js
//导入fs模块
const fs = require('fs');
//参数1：path，参数2：编码格式， 参数3：callback 拿到读取失败和成功的结果
fs.readFile('./files/1.txt', 'utf8', function(err, data){
    //如果读取成功，err is null，data hello node
    //如果读取失败，err is an object, data is undefined
    console.log('err', err);
    console.log('data', data);
    
})
//注意运行时要打开到js文件所在的那一层文件夹再运行

```
- 判断文件是否读取成功
```js
//导入fs模块
const fs = require('fs');
//参数1：path，参数2：编码格式， 参数3：callback 拿到读取失败和成功的结果
fs.readFile('./files/1.txt', 'utf8', function(err, data){
    if(err){
        console.log('err', err)
    }else{
        console.log('data', data)
    }
    //写法2
    //if(err){
        //console.log('err', err)
    //}
    //console.log('data', data)
})
```
#### 向指定的文件中写入内容
- fs.writeFile() 的语法格式
```js
fs.writeFile(path, data[, options], callback)
//1.必选参数，指定一个文件路径的字符串
//2.必选参数，表示要写入的内容
//3.可选参数，表示什么格式，默认是utf8
//4.必选参数，文件写入完成后回调函数
```
- fs.writeFile() 的示例代码
```js
const fs = require('fs');

fs.writeFile('./files/2.txt', 'Learning node', function(err){
    console.log(err)
})
```
- 判断文件是否写入成功
```js
const fs = require('fs');

fs.writeFile('./files/3.txt', 'I like node', function(err){
    console.log('err', err)//写入成功，err is null
    // if(err){
    //     console.log('err', err)
    // }else{
    //     console.log('write file succeed')
    // }
    if(err){
        return console.log('err', err);
    }//注意这里加个return表示代码进行到这里结束
    console.log('write file succeed')
})
```
#### read和writer_file小练习
- 将一行的内容转化为分行显示，并修改分隔符
```js
// Ben:99 
// Jane:100 
// John:80 
// Chris:66 
// Andrew:88
//1. read score.txt
//2. split to array
//3. replace = with :
//4. convert array to string
//5. write the updated score to updatedScore.txt
//提示：做一步测一步最好
const fs = require('fs');
fs.readFile('./score.txt', 'utf8', function(err, data){
    if(err){
        return console.log('read file failed', err.message)
    }
    console.log('read file succeed', data, typeof data)
    //read file succeed Ben=99 Jane=100 John=80 Chris=66 Andrew=88 string
    //2. split to array
    const arr = data.split(' ')
    console.log('arr',arr)
    //3. replace = with :
    let newArr = [];
    arr.forEach(function(item){
        newArr.push(item.replace('=',':'));
    })
    console.log('newArr', newArr)
    //4. convert array to string
    const str = newArr.join('\r\n');
    console.log('str', str)
    //5. write the updated score to updatedScore.txt
    fs.writeFile('./undatedScore.txt',str ,function(err){
        if(err){
            return console.log('write file filed', err.message)
        }
        console.log('write file succeed')
    })
})
```



### http模块及创建web服务器
#### 什么是http模块
- 客户端：网络节点中负责消费的电脑叫客户端；负责对外提供网络资源的叫服务器
- http模块是Node.js官方提供的，用来创建web服务器的模块
#### http模块的作用
- 服务器和普通电脑不同，安装了web服务器软件，例如IIS、Apache等
- 在Node.js中不需要三方web服务器软件，可以直接运用自带的http模块提供web服务
#### 服务器相关概念
- Ip地址：每台计算机唯一地址，通常用“点分十进制”，例：（192.168.1.1）
  <br>注意：每台web服务器都有自己的IP地址，测试时可输入(127.0.0.1)来访问
- 域名和域名服务器
  <br>IP地址不直观不方便记忆，于是有了域名(Domain Name)地址
  <br>IP地址和域名是一一对应，域名服务器就是提供IP地址和域名之间的转化服务的服务器
  <br>开发测试期间，127.0.0.1对应的域名是localhost，使用效果没有区别
- 端口号
<p align='center'><img src='../images/duankouhao.png' width='100%' height='100%' /></p>

#### 创建最基本的web服务器
1. 导入http模块
2. 创建web server instance
3. 绑定request
4. 启动server
5. 解决中文乱码问题

#### 根据不同的url响应不同的html内容
```js
const http = require('http');
//create a web server
const server = http.createServer();
//根据不同的req url 返回不同的html内容
server.on('request',function(req, res){
    const url = req.url;
    let content = "<h1>404 not found</h1>";
    if(url === '/'|| url === '/home'){
        content = "<h1>Welcome to home page</h1>";
    }else if(url === '/about'){
        content = "<h1>Welcome to about page</h1>";
    }
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end(content);
})
// run server http://localhost:8080
server.listen(8080, function(){
    console.log('server is running on http://127.0.0.1:8080')
})
```


### npm包管理和使用
- 为了更方便更快的开发,包是用原生方法写的, 安装包后能节省很多代码
#### 包
- 什么是包
<br>Node.js中的第三方模块又叫做包
- 包的来源
<br>包由第三方个人或者团队开发出来的，Node,js中免费且开源
- 为什么需要包
<br>Node.js仅提供一些底层API，效率低
<br>包时基于内置模块封装出来提供更高级的API，提高开发效率
<br>包和内置模块之间的关系，类似与jQuery和浏览器内置API之间关系
- 下载地址
<br>http://www.npmjs.com/网站上搜索自己所需要的包
<br>http://registry.npmjs.org/服务器上下载自己需要的包
- 如何下载
<br>Node Package Manager

#### npm初体验
- 格式化时间的传统做法
```js
//index.js:
const {convertDate} = require('./date');
const date = new Date();
const newDT = convertDate(date)
console.log('newDT',newDT)

//date.js:
//YYYY-MM-DD HH:MM:SS
function convertDate(date){
    console.log('date',date)
    const y = date.getFullYear();//2023
    const m = addZero(date.getMonth()+1);
    const d = addZero(date.getDate());
    const hh = addZero(date.getHours());
    const mm = addZero(date.getMinutes());
    const ss = addZero(date.getSeconds());
    const newDate = `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    // console.log('newDate',newDate)//2023-11-12 16:0:46
    return newDate
}
function addZero(num){
    return num < 10 ? `0${num}` : num;
}

module.exports = {convertDate}
```
- 格式化时间的高级做法
```js
const {convertDate} = require('./date');
const moment = require('moment');
const date = new Date();
const newDT = convertDate(date)
console.log('newDT',newDT)
//newDT 2023-11-12 16:03:15

//npm init
//npm install moment   npm i moment
const momentDate = moment().format('YYYY-MM-DD hh:mm:ss')
console.log('momentDate',momentDate)
//momentDate 2023-11-12 04:16:00
```
