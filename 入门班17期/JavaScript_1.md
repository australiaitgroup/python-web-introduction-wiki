
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

### JavaScript
####是什么：世界上最流行之一，是一种运行在客户端的脚本语言
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
