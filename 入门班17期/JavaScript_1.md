
## Note

## JavaScript Part1 (29/10/2023)

### 编程语言
- 编程：让计算机为解决某个问题而使用的某种程序设计语言编写程序代码
- 计算机程序：一系列计算机执行的指令集合
- 计算机定义：任何能够执行代码的设备
- 编程语言分类：汇编语言和高级语言
```html
汇编语言：和机器语言实质相同，直接对硬件操作，采用英文缩写标识符，容易识别和记忆
高级语言：相对于低级语言，包含很多变成语言，常用的：C++, Java, C#, Python, PHP, Go语言, Objective-C, Swift等
```
- 编程语言和标记语言的区别
```
编程语言逻辑、行为能力强，主动
标记语言不用于向计算机发出指令，常用语格式化和链接，用来被读取，被动
```

### JavaScript简介
#### 是什么：世界上最流行之一，是一种运行在客户端的脚本语言
- 脚本语言：不需要编译，运行过程中由js解释器（js引擎）逐行来进行解释并执行
- 现在也可以给予Node.js技术进行服务器端编程
#### 作用：
- 表单动态校验（密码强度检测）（JS产生的最初目的）
- 网页特效
- 服务端开发（Node.js）
- 桌面程序（Electron）
- APP（Cordova）
- 控制硬件-物联网（Ruff）
- 游戏开发（cocos2d-js）
#### HTML/CSS/JS的关系
- HTML/CSS 标记语言--描述类语言
```html
```
- JS 脚本语言--编程类语言

#### 浏览器执行JS简介

#### JS的组成

#### JS初体验
- 行内式JS
- 内嵌JS
- 外部JS文件

#### 变量
##### 什么是变量
##### 变量命名规范
- 字母、数字、下划线、美元符号组成
- 严格区分大小写
- 不能以数字开头
- 不能是关键字、保留字
- 变量名必须有意义
- 遵守驼峰命名法：首字母小写，后面单词的首字母大写
- 推荐翻译网站：有道、爱词霸

### 简单的数据类型
  

### 实战练习
#### 导入方式
- 1. 行内式的js 直接写到元素的内部
```html
<input type="button" value="enter" onclick="alert('hello world')">
```
- 2.内嵌式的js
```html
 <script>
  prompt('Please enter your name')
 </script>
```
- 3. 外部js script 双标签(一般用这个，可以复用)
```html
 <script src="/index.js"></script>
```

#### 注释
- 1. 单行注释  ctrl + /
- 2. 多行注释  默认的快捷键：shift +  alt  + a
- 2.1 多行注释  vscode 中修改多行注释的快捷键：ctrl + shift + /

#### 常用输出方法
- prompt这是一个输入框
```html
prompt('Please enter your age')
```
- alert 弹出警示框 输出的 展示给用户的
```html
alert('hello world')
```
- console 控制台输出 给程序员测试用的
```html
console.log('testing')
```

#### 声明变量
```html
<script>
   // 1. 声明了一个age 的变量
   var age;//undefined
   // 2. 赋值  把值存入这个变量中
   age = 18;
   // 3. 输出结果
   console.log('age', age)
   // 4. 变量的初始化
   //可以复合写法如下
   var userName = 'Ben';                
   console.log('userName', userName)
 </script>
```

#### 声明的用法
```html
<script>
   // let const var(几种方式，都可以声明变量)
   // var最老，缺陷较多，不推荐用
   // 目前用的let const比较多
   // 1. 更新变量(可以重新reset定义的value)
   var userName = 'Chris';
   console.log('userName', userName)
   userName = 'Ben'
   console.log('userName', userName)
   // 2. 声明多个变量,只有var可重复声明（不会报错）
   // 不推荐重复声明
   var age = 18;
   var age = 20;
   console.log('age',age)
   // 3. 声明变量的特殊情况
   // 3.1 只声明不赋值 结果是？  程序也不知道里面存的是啥 所以结果是 undefined  未定义的      
   var gender;//undefined
   console.log(gender)
   // 3.2  不声明 不赋值 直接使用某个变量会报错滴
   console.log(phone)
   // 3.3 不声明直接赋值使用(JS为单线程，有一处报错后就不会运行之后的代码)
   num = 110;
   console.log(num)
   
 </script>
```


#### 变量用法
```html
<script>
   // 1. 用户在弹出框输入姓名  存储到一个 myname的变量里面
   var userName = prompt('Please enter your name')
   // 2. 输出这个用户名
   alert(userName)
 </script>
```

#### 变量命名注意事项
```html
<script>
   // var 18age;
   // var var; 因为var 有特殊意义了，这个叫做关键字 不能作为变量名的   for  while if
   // name 我们尽量不要直接使用name 作为变量名
   // console.log(tel);
   let app = 10;
   let App = 100;
 </script>
```


