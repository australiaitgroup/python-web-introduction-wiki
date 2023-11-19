- [Note](#Note)
  - [JavaScript_Part1 (`29/10/2023`)](#javascript_part1-29102023)
    - [编程语言](#编程语言)
    - [JavaScript简介](#JavaScript简介)
      - [是什么](#是什么)
      - [作用](#作用)
      - [HTML与CSS以及JS的关系](#HTML与CSS以及JS的关系)
      - [浏览器执行JS简介](#浏览器执行JS简介)
      - [JS的组成](#JS的组成)
    - [变量](#变量)
      - [什么是变量](#什么是变量)
      - [变量命名规范](#变量命名规范)
      - [简单的数据类型](#简单的数据类型)
    - [数据类型转换](#数据类型转换)
      - [定义](#定义)
    - [运算符](#运算符)
      - [算数运算符](#算数运算符)
      - [比较运算符](#比较运算符)
      - [逻辑运算符](#逻辑运算符)
    - [实战练习](#实战练习)
      - [导入方式](#导入方式)
      - [注释](#注释)
      - [常用输出语句](#常用输出语句)
      - [声明变量](#声明变量)
      - [声明的用法](#声明的用法)
      - [变量用法](#变量用法)
      - [变量命名注意事项](#变量命名注意事项)
      - [变量值交换方法](#变量值交换方法)
      - [数字型](#数字型)
      - [String](#String)
      - [小练习1](#小练习1)
      - [Boolean布尔判断类型](#Boolean布尔判断类型)
      - [数据类型转换](#数据类型转换)
      - [小练习2](#小练习2)
      - [一些运算符](#一些运算符)
    
<hr>     

<p align='center'><img src='../images/JavaScript.png' width='15%' height='15%' /></p>

<hr>

# Note


## JavaScript_Part1 (`29/10/2023`)


### 编程语言
- 编程：让计算机为解决某个问题而使用的某种程序设计语言编写程序代码
- 计算机程序：一系列计算机执行的指令集合
- 计算机定义：任何能够执行代码的设备
- 编程语言分类：汇编语言和高级语言
```html
//汇编语言：和机器语言实质相同，直接对硬件操作，采用英文缩写标识符，容易识别和记忆
//高级语言：相对于低级语言，包含很多变成语言，常用的：C++, Java, C#, Python, PHP, Go语言, Objective-C, Swift等
```
- 编程语言和标记语言的区别
```
//编程语言: 逻辑、行为能力强，主动
//标记语言: 不用于向计算机发出指令，常用语格式化和链接，用来被读取，被动
```


### JavaScript简介
#### 是什么
- 世界上最流行之一，是一种运行在客户端的脚本语言
- 脚本语言：不需要编译，运行过程中由js解释器（js引擎）逐行来进行解释并执行
- 现在也可以给予Node.js技术进行服务器端编程
#### 作用
- 表单动态校验（密码强度检测）（JS产生的最初目的）
- 网页特效
- 服务端开发（Node.js）
- 桌面程序（Electron）
- APP（Cordova）
- 控制硬件-物联网（Ruff）
- 游戏开发（cocos2d-js）
#### HTML与CSS以及JS的关系
- HTML/CSS 标记语言--描述类语言
```html
//HTML决定网页结构和内容（决定看到什么），相当于人的身体
//CSS决定网页呈现给用户的模样（决定好不好看），相当于给人穿衣服、化妆
```
- JS 脚本语言--编程类语言
```html
//实现业务逻辑和页面控制（决定功能），相当于人的各种动作
```

#### 浏览器执行JS简介
- 浏览器分成两部分：渲染引擎和JS引擎
```html
//渲染引擎：用来解析HTML和CSS，俗称内核，比如Chrome浏览器的blink，老版本的webkit
//JS引擎：也称为JS解释器，用来读取网页中的JavaScript代码，对齐处理后运行，比如Chrome浏览器的V8

//注：浏览器本身并不执行JS代码，而是通过内置JS引擎（解释器）来执行JS代码。
    JS引擎执行代码是逐行解释每一句源码（转换为机器语言），然后由计算机去执行，所以JavaScript语言归为脚本语言，会逐行解释执行。
```

#### JS的组成
```html
                         JavaScript
       ↙                     ↓                    ↘
  ECMAScript                 DOM                  BOM
JavaScript语法           页面文档对象模型        浏览器对象模型
```

### 变量
#### 什么是变量
- 白话：变量就是一个装东西的盒子
- 通俗：变量是用于存放数据的容器，我们通过变量名回去数据，甚至数据可以修改
#### 变量命名规范
- 字母、数字、下划线、美元符号组成
- 严格区分大小写
- 不能以数字开头
- 不能是关键字、保留字
- 变量名必须有意义
- 遵守驼峰命名法：首字母小写，后面单词的首字母大写
- 推荐翻译网站：有道、爱词霸

### 简单的数据类型
- Number: 数字型，包含整数型和浮点型值
```html
//JavaScript数字类型既可以用来保存整数值，也可以保存小数（浮点数）
//isNaN():用来判断一个变量是否为非数字的类型，返回true或者false
```
- Boolean: 布尔值类型，如true、false，等价于1和0
- String: 字符串类型
```html
//可以是引号中的任意文本，分双引号""和单引号''
//alert(strMsg.length)
//length表字符串长度
//字符串 + 任何类型 = 拼接之后的新字符串， +即字符串拼接方法
//因为HTML标签里面的属性使用的是双引号，JS这里我们推荐使用单引号
```
- Undefined: 声明了变量但是没给值
- Null: 声明了变量为空值

### 数据类型转换
#### 定义
- 把一种类型数据转换另一种数据类型，通常是三种:
- 转换为字符串类型

| 方式 | 说明 | 案例 |
| --- | --- | --- |
| toString() | 转成字符串 | `var num= 1; alert(num.toString())` |
| 加号拼接字符串 | 和字符串拼接的结果都是字符串 | `var num= 1; alert(String(num+"我是字符串")` |
| String()强制转换 | 转成字符串 | `var num= 1; alert(String(num))` |

> toString() 和String()使用方式不一样<br>
> 三种转换方式，更常用的是第三种加号拼接字符串转换方式，也称之为隐式转换

- 转换成数字型

| 方式 | 说明 | 案例 |
| --- | --- | --- |
| parseInt(string)函数 | 将string类型转成整数数值型 | `parseInt('78')` |
| parseFloat(string)函数 | 将string类型转成浮点数数值型 | `parseFloat('78.21')` |
| Number()强制转换函数 | 将string类型转换为数值型 | `Number('12')` |
| js隐式转换(- * /)  | 利用算数运算饮食转换为数值型 | `'12'-0` |

> 注意parseInt和parseFloat单词的大小写<br>
> 隐式转换是我们再进行算数运算的时候，JS自动转换了数据类型

- 转换成布尔型

| 方式 | 说明 | 案例 |
| --- | --- | --- |
| Boolean()函数 | 其他类型转换成布尔值 | `Boolean('true')` |



### 运算符
#### 算数运算符
- 概念：用于执行两个变量或值的算数运算

| 运算符 | 描述 | 实例 |
| --- | --- | --- |
| + | 加 | `10 + 10 = 30` |
| - | 减 | `10 - 20 = -10` |
| * | 乘 | `10 * 20 = 200` |
| / | 除 | `10 / 20 = 0.5` |
| % | 取余数(取模) | `返回除法的余数9 % 2 = 1` |


- 递增和递减运算符
```html
//如果需要反复给数字添加或减去1，可使用递增（++）和递减（--）运算符来完成
//分为前置递增（递减）运算符（使用口诀：先自加减，后返回值）和后置递增（递减）运算符（先返回原值，后自加减）
//注：递增和递减运算符必须和变量配合使用
```

#### 比较运算符
- 概念：两个数据进行比较时使用的运算符，比较后会返回一个布尔值（true/false）作为结果

| 运算符 | 描述 | 实例 | 结果 |
| --- | --- | --- | --- |
| < | 小于号 | `1 < 2` | `true` |
| > | 大于号 | `1 > 2` | `false` |
| >= | 大于等于号（大于或者等于） | `2 >= 2` | `true` |
| <= | 小于等于号（小于或者等于） | `3 <= 2` | `false` |
| == | 判等号（会转型） | `37 == 37` | `true` |
| != | 不等号） | `37 != 37` | `false` |
| ===  !== | 全等 要求值和数据类型都一致 | `37 === '37'` | `false` |


#### 逻辑运算符
- 概念：用来进行布尔值运算的运算符，返回值也是布尔值，用于多个条件的判断

| 运算符 | 说明 | 案例 |
| --- | --- | --- |
| `&&` | `"逻辑与"，简称"与" and` | `true && false` | 
| 'II' | `"逻辑或"，简称"或" or` | 'true II false' |
| `!` | `"逻辑非"，简称"或" not` | `!true` |
>注意此处的'II'本应为'||'但是表格无法打出相同字符用大写的i代替

### 实战练习
#### 导入方式
- 1行内式的js 直接写到元素的内部
```html
<input type="button" value="enter" onclick="alert('hello world')">
//可以将单行或少量JS代码写在HTML标签的事件属性中（以on开头的属性），如：onclick
//注意单双引号的使用：HTML中推荐使用双引号"",JS中推荐使用单引号''
//可读性差，在HTML中编写大量JS代码时，不方便阅读
//引号易错，引号多层嵌套匹配时，容易混淆
//宜特殊情况下使用
```
- 2内嵌式的js
```html
 <script>
  prompt('Please enter your name')
 </script>
//可以将多行JS代码写到<script>标签中
//内嵌JS是学习时常用的方式
```
- 3外部js script 双标签
```html
 <script src="/index.js"></script>
//利于HTML页面代码结构优化，把大段的JS代码独立到HTML页面之外，方便文件级别复用
//引用外部JS文件的script标签中间不可以写代码
//适合于JS代码量比较大的情况
```

#### 注释
- 单行注释  ctrl + /
- 多行注释  默认的快捷键：shift +  alt  + a
- 多行注释  vscode 中修改多行注释的快捷键：ctrl + shift + /

#### 常用输出语句
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

#### 变量值交换方法
```html
<script>
  // js 是编程语言有很强的逻辑性在里面： 实现这个要求的思路 先怎么做后怎么做
  // 1. 我们需要一个临时变量帮我们
  // 2. 把apple1 给我们的临时变量 temp
  // 3. 把apple2 里面的苹果给 apple1
  // 4. 把临时变量里面的值 给 apple2
  let apple1 = 'green apple';
  let apple2 = 'red apple';
  let temp = apple1;//green apple
  apple1 = apple2;//red apple
  apple2 = temp;
  console.log('apple1',apple1)
  console.log('apple2',apple2)
</script>
```

#### 数字型
- 基本使用方法
```html
<script>
  let num = 10;
  let pi = 3.14;
  console.log(num, pi)//可同时一起console，中间用‘，’隔开
</script>
```
- isNaN() 方法
```html
<script>
  // isNaN() 这个方法用来判断非数字   并且返回一个值 如果是数字返回的是 false 如果不是数字返回的是true
  console.log(isNaN(12))
  let result = isNaN('Hello')
  console.log(result)
</script>
```

#### String
- 基本用法
```html
<script>
  let str = 'Hello I am a string'
  console.log(str)
</script>
```
- 字符串拼接
```html
<script>
  // 1. 检测获取字符串的长度 length
  let str1 = 'my name is Andy'
  console.log(str1.length)
  // 2. 字符串的拼接 +  只要有字符串和其他类型相拼接 最终的结果是字符串类型
  console.log('hello'+ ' ' + 'world')  //hello world
  console.log('hello' + 20)            //hello20
  console.log('hello' + true)          //hellotrue
  console.log(12+12)                   //24
  console.log('12'+ 12)                //1212
</script>
```

#### 小练习1
```html
<script>
  // 弹出一个输入框（prompt)，让用户输入年龄（用户输入）
  // 把用户输入的值用变量保存起来,把刚才输入的年龄与所要输出的字符串拼接 （程序内部处理）
  // 使用alert语句弹出警示框（输出结果）Your age is 20 years old
  
  let age = prompt('Please enter your age')
  alert ('Your age is '+ age + ' years old')
</script>
```

#### Boolean布尔判断类型
- 基本用法
```html
<script>
 let flag = true;
 console.log(flag)           // true
 console.log(flag+1)         // 1+1
 let flag1 = false;
 console.log(flag1+1)        // 0+1
</script>
```
- 查看基础数据类型
```html
<script>
  let num = 10;
  console.log(typeof num)                     //number
  let str = 'hello'
  console.log(typeof str)                     //string
  let flag = true;
  console.log(typeof flag)                    //boolean
  let value = undefined;
  console.log(typeof value)                   //undefined
  let value2 = null;
  console.log(typeof value2)                  //object
  let age = prompt('Please enter your age')
  console.log('age',age,typeof age)           //string
</script>
```
#### 数据类型转换
- 转换成string
```html
 <script>
  // 1. 把数字型转换为字符串型 变量.toString()
  let num = 10;
  let str = num.toString();
  console.log(str,typeof str)
  // 2. 我们利用 String(变量)
  console.log('num',typeof String(num))
  // 3. 利用 + 拼接字符串的方法实现转换效果 隐式转换(最推荐)
  let str2 = num +''
  console.log(num + str2)//'10'
  </script>
```
- 转换成number
```html
<script>
  //parseInt() 返回整数
  console.log(parseInt('3.14'))               //3
  console.log(parseInt('120px'))              //120
  console.log(parseInt('rem120px'))           //NaN
  
  //parseFloat() 返回小数
  console.log(parseFloat('3.14'))             //3.14
  console.log(parseFloat('120px'))            //120
  console.log(parseFloat('rem120px'))         //NaN
  
  //Number()
  let str = '123'
  let num = Number(str)
  console.log(num, typeof num)
  
  //隐式转换 - * /(+会变成string)
  console.log('12'- 1)                         //11
  console.log('123'-'120')                     //3
  let value = '123'*1;
  console.log(typeof value)                    //number
  console.log(typeof ('123'/1))                //number
</script>
```

#### 小练习2
```html
<script>
  // 弹出一个输入框（prompt)，让用户输入出生年份 （用户输入）
  // 把用户输入的值用变量保存起来，然后用今年的年份减去变量值，结果就是现在的年龄  （程序内部处理）
  // 弹出警示框（alert) ， 把计算的结果输出 （输出结果）
  birthYear = prompt('Please enter your birth year')
  let age = 2023 - birthYear                      //方法1
  let age = 2023 - parseInt(birthYear)            //方法2
  alert(age)  
</script>

#### 转换成布尔值类型
```html
<script>
  console.log(Boolean(''))                //false
  console.log(Boolean(0))                 //false
  console.log(Boolean(NaN))               //false
  console.log(Boolean('123'))             //true
  console.log(Boolean('hello'))           //true
  console.log(Boolean(null))              //false
  console.log(Boolean(undefined))         //false

  let arr = []//length 0
  if(arr.length>0){
    console.log('length>0')
  }
  else{
    console.log('length=0')
  }
</script>
```

#### 一些运算符
- 算数运算符
```html
<script>
  console.log(1 + 1);          //2
  console.log(1 - 1);          //0
  console.log(1 * 1);          //1
  console.log(1 / 1);          //1
  // % 取余 取模
  console.log(4 % 2);          //0
  console.log(5 % 3);          //2
  console.log(3 % 5);          //2
  
  //浮点数 算数运算里会有问题
  console.log(0.1+0.2)         //0.30000000000000004
  console.log(0.07*100)        //7.000000000000001
  let num = 0.1+0.2;
  console.log(num == 0.3)
  let sum = num.toFixed(1)
  console.log(sum)             //0.3
</script>
```
- 比较运算符
```html
<script>
  //1. 我们程序里面的等于符号 是 ==  默认转换数据类型 会把字符串型的数据转换为数字型 只要求值相等就可以
  console.log(3 >= 5);             //F
  console.log(2 <= 45);            //T
  console.log(3 == 5);             //F
  console.log("hello" == "world"); //F
  console.log(18 == 18);           //T
  console.log(18 == "18");         //T（隐式转换）
  console.log(18 != 18);           //F
  // 2. 我们程序里面有全等 一模一样  要求 两侧的值 还有 数据类型完全一致才可以 true
  console.log(18 === 18)           //T
  console.log(18 === '18')         //F
</script>
```
- 逻辑运算符
```html
<script>
  // 1. 逻辑与 &&  and 两侧都为true  结果才是 true  只要有一侧为false  结果就为false
  console.log(3>5 && 3>2)          //F
  console.log(3<5 && 3>2)          //T
  // 2. 逻辑或 || or  两侧都为false  结果才是假 false  只要有一侧为true  结果就是true
  console.log(3 > 5 || 3 > 2);     //T
  console.log(3 > 5 || 3 < 2);     //F
  // 3. 逻辑非  not  ！
  console.log(!true)               //F
  console.log(!false)              //T
</script>
```
- 前缀增量
```html
<script>
  // 前缀增量-prefix increment
  // 1. 想要一个变量自己加1   num = num + 1 比较麻烦
let num = 1;
// num = num + 1;
// num = num + 1;
++num;
++num;
console.log('num',num)
let age = 10;
++age;//11
let p = 20;
  //先加1， 再返回值
console.log(++p + 10)//31
</script>
```
- 后缀增量
```html
<script>
  // 后缀增量-postfix increment
  // 1. 前置自增和后置自增如果单独使用 效果是一样的
  // 2. 后置自增 口诀：先返回原值 后自加1
let num = 10;
num++;
console.log(num)//11
let age = 30;
//先返回值，后加1
console.log(age++ + 10)//40
</script>
```
