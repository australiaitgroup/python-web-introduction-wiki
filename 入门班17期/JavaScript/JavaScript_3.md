- [Note](#Note)
  - [JavaScript/_3 (`05/11/2023`)](#javascript_3-05112023)
      - [函数](#函数)
        - [函数的概念](#函数的概念)
        - [函数的使用](#函数的使用)
        - [函数的参数](#函数的参数)
        - [函数的返回值](#函数的返回值)
        - [函数的两种声明方式](#函数的两种声明方式)
      - [DOM](#DOM)
        - [简介](#简介)
        - [DOM操作](#DOM操作)
        - [常用方法](#常用方法)
      - [实战练习](#实战练习)
        - [for_in](#for_in)     

# Note


## JavaScript_3 (`05/11/2023`)


### 函数
#### 函数的概念
- JS中有非常多相同代码或者功能相似的代码，需要大量重复使用
- for循环语句能实现一些简单的重复操作，但是比较有局限性，这是就可以使用JS中的函数
- 函数：就是封装了一段可以被重复调用执行的代码块
#### 函数的使用
- 函数使用时分为两步：声明函数和调用函数
- 声明函数
```html
//声明函数
function 函数名() {
    //函数体代码
}
//function是声明函数的关键字，必须小写
//函数一般是为了实现某个功能才定义，一般将函数名命名为动词，比如getSum 
```
- 调用函数
```html
//调用函数
函数名();  //通过调用函数名来执行函数体代码
//调用是记得添加()
//口诀：函数不调用，自己不执行
```
- 注意：声明函数本身并不会执行代码，只有调用函数时才会执行函数体代码
#### 函数的参数
- 形参和实参
```html
//在声明函数时可在函数名称后面的小括号添加一些参数，称为形参
//在调用该函数时传递的相应函数称为实参
//参数作用是在函数内部某些值不能固定，通过参数在调用函数时传递不同的值进去
//带参数的函数声明
function 函数名(形参1, 形参2, 形参3...) {//可以定义任意多的参数，用逗号分隔
  // 函数体
}
//带参数的函数调用
函数名(实参1, 实参2, 实参3...)；
```
- 函数参数的传递过程
```html
//声明函数
function getSum(num1, num2) {
    console.log(num1 + num2);
}
//调用函数
getSum(1, 3) //4
getSum(6, 5) //11
// 1.调用的时候实参值是传递给形参的
// 2.形参可以理解为：不用声明的变量
// 3.实参和形参的多个参数之间用逗号(,)隔开
```
- 函数形参和实参个数不匹配问题
```html
function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(100, 200);                    //形参和实参个数相等，输出正确结果
sum(100, 400, 500, 700);          //实参个数多于形参，只取到形参的个数
sum(200);                         //实参个数少于形参，多的形参定义为undefined，结果为NaN
```

#### 函数的返回值
- return语句
```html
//return语句用于将函数值返回给调用者
//例：声明一个sum函数，该函数返回值为666
//声明函数
function sum () {
    ...
    return 666;
}
//调用函数
sum();
//此时sum的值就等于666
```
- return语句：终止函数
```html
//return语句之后的代码不会被执行
```
- return的返回值
```html
//return只能返回一个值，如果用逗号隔开多个值，以最后一个为准
```
- 函数没有return会返回undefined
```html
//函数都是有返回值的：
//1.如果有return则返回return后面的值
//2.如果没有return则返回undefined
```
- break, continue, return的区别
```html
//break：结束当前的循环体：如for、while
//continue：跳出本次循环，继续执行下次循环：如for、while
//return：不仅可以退出循环，还能够返回return语句中的值，同时还可以结束当前函数体内的代码
```

#### 函数的两种声明方式
- 自定义的函数方式（命名函数）
```html
//声明定义方式
function fn() {...}
//调用
fn();
//有名字，也被称为命名函数
//既可放在声明函数之前，也可放在声明函数之后
```
- 函数表达式方式（匿名函数）
```html
//函数表达式写法，后面跟分号结束
var fn = function(){...};
//调用的方式
fn();
//这里的fn里面存的是一个函数
//函数调用的代码必须写到函数体之后
```

### DOM
#### 简介
- 一个页面就是一个文档，DOM中用document表示
- 页面中的所有标签都是元素，DOM中用element表示
- 网页中所有的内容都是节点（标签、属性、文本、注释等），DOM中使用Node表示
#### DOM操作
- 日常前段开发离不开DOM操作
- 目前越来越少
- 但并不代表不重要，DOM操作有助于我们理解框架深层的内容
#### 常用方法
```js
document.getElementById('id属性值');                 //返回拥有指定id的对象的引用
document.getElementsByClassName('class属性值');      //返回拥有指定class的对象集合
document.getElementsByTagName('标签名');             //返回拥有指定标签的对象集合
document.getElementsByName('name属性值');            //返回拥有指定名称的对象集合
document/element.querySelector('CSS选择器');         //仅返回第一个匹配的元素
document/element.querySelectorAll('CSS选择器');      //返回所有匹配的元素
document.documentElement;                            //获取页面中的HTML标签
document.body;                                       //获取页面中的body标签
document.all[''];                                    //获取页面中的所有元素节点的对象集合型
```

### 实战练习
#### for_in
```html
<script>
  let obj = {
    name: "Chris",
    age: 40,
    hobby: "fishing",
    gender: "female",
  };                               
  //可用此方法遍历{}中的对象
  for (let item in obj) {
    console.log(key, obj[key]);
  }
</script>
```
#### function概念
```html
<!-- function declaration vs function expression -->
<script>
  //1.function declaration, hoisting
  //因为有hoisting函数声明之前or之后都可以调用
  function getData() {
    console.log('data is fetched')
  }
  getData();
  //2.function expression 函数表达式
  //此时如果在声明之前调用，会报错
  let isFormValidated = function (){
    console.log(true)
  }
  isFormValidated();
</script>
```
#### function小练习
```html
<script>
  // 1. 求 1~100的累加和
  let sum = 0;
  for(let i=1; i<=100; i++){
    sum +=i;
  }
  console.log(sum)
  // 2. 求 10~50的累加和
  let sum1 = 0;
  for (let i = 10; i <= 50; i++){
    sum1 +=i;
  }
  console.log(sum1)
  // 3. 函数就是封装了一段可以被重复执行调用的代码块 目的： 就是让大量代码重复使用
  // 函数使用分为两步： 声明函数 和 调用函数
  // 1. 声明函数
  // function 函数名() {
  //     // 函数体
  // }
  function getSum (num1,num2){
    let sum = 0;
    for(let i=num1; 1<=num2; i++){
      sum +=i;
    }
    console.log(sum)
  }
  getSum(1,100)
  getSum(10,50)
  getSum(2,1000)
  // (1) function 声明函数的关键字 全部小写
  // (2) 函数是做某件事情，函数名一般是动词 sayHi
  // (3) 函数不调用自己不执行
  // 2. 调用函数
  // 函数名();
  // 调用函数的时候千万不要忘记加小括号
</script>
```
#### 带参数的函数
```html
<script>
  // 1. 函数可以重复相同的代码
  // function cook() {
  //   console.log("hello world");
  // }
  // cook();
  // cook();

  // 2. 我们可以利用函数的参数实现函数重复不同的代码
  // function 函数名(num1,num2...) { // 在声明函数的小括号里面是 形参 （形式上的参数）

  // }
  // 函数名(1,100...); // 在函数调用的小括号里面是实参（实际的参数）
  // 3. 形参和实参的执行过程

  // 4. 函数的参数可以有，也可以没有,个数不限
  function cook(food){
    console.log(`We ha d ${food} for lunch`)
  }
  cook('fish')
  cook('chicken')
</script>
```
#### 函数求和练习
```html
<script>
  // 1. 利用函数求任意两个数的和
  function sum(num1,num2){
    console.log(num1 + num2)
  }
  sum(8,9)
  sum(100,200)
  // 2. 利用函数求任意两个数之间的和
  const getSums = function (start, end) {
    if (start <= end) {
      let sum = 0;
      for (let i = start; i <= end; i++) {
        sum += i
      }
      console.log(sum);
    } else {
  //这里会做判断，如果start的数字大于end，就会输出else中的语句
      console.log("Start should not be greater than end.");
    }
  }
  getSums(8,2)                                  
  // 3. 注意点
  // (1) 多个参数之间用逗号隔开
  // (2) 形参可以看做是不用声明的变量
</script>
```
#### 函数参数匹配问题
```html
<script>
  // 函数形参实参个数匹配
  function getSum(num1, num2) {
    console.log('num1',num1)
    console.log('num2', num2)
    if(num1 && num2){
    console.log(num1 + num2);
    }
  }
  // 1. 如果实参的个数和形参的个数一致 则正常输出结果
  getSum(1,6)
  // 2. 如果实参的个数多于形参的个数  会取到形参的个数
  getSum(1,2,3)// 1+2=3
  // 3. 如果实参的个数小于形参的个数  多于的形参定义为undefined  最终的结果就是 NaN
  // 形参可以看做是不用声明的变量  num2 是一个变量但是没有接受值  结果就是undefined
  getSum(2)// 2 + undefined = NaN
  // 建议 我们尽量让实参的个数和形参相匹配
</script>
```

#### return语句简介
```html
<script>
  // 1.函数是做某件事或者实现某种功能
  // 2. 函数的返回值格式
  // function 函数名() {
  //     return 需要返回的结果;
  // }
  // 函数名();
  // (1) 我们函数只是实现某种功能，最终的结果需要返回给函数的调用者函数名() 通过return 实现的
  // (2) 只要函数遇到return 就把后面的结果 返回给函数的调用者  函数名() = return后面的结果
  // 3. 代码验证
  function getResult(){
    return 'hello'
    //这里如果不放return或者没有具体返回的结果就会输出undefined
  }
  let res = getResult()
  console.log(res)
  //4. 求任意两个数的和
  function getSum(num1,num2){
    return num1 + num2
  }
  let result= getSum(2,5)
  console.log('result',result)
</script>
```

#### return语句练习
```html
<script>
  //1.利用函数 求任意两个数的最大值
  function getMax(num1, num2){
    // if(num1 > num2){
    //   return num1
    // }else {
    //   return num2
    // }
    return num1 > num2 ? num1 :num2
  }
  let res = getMax(6,9)
  console.log(res)
  //2.利用函数求数组 [5,2,99,101,67,77] 中的最大数值。
  let arr = [5, 2, 99, 101, 67, 77]
  function getMax2(array){
    let max = array[0]
    for (let i=1; i<array.length; i++){
      if(array[i] > max){
        max = array[i]
      }
      // array[i] > max ? array[i] : max
    }
  }
  let result = getMax2(arr)
  console.log(result)
</script>
```

#### 函数返回值注意事项
```html
<script>
  // 函数返回值注意事项
  // 1. return 终止函数
  function getSum(a,b){
    return a+b;
    alert('hello world')
    //return 后面的代码不会执行
  }
  let res = getSum(2,4)
  console.log(res)
  // 2. return 只能返回一个值
  function fun(num1,num2){
    return num1, num2
    //此时只能返回最后一个值
  }
  console.log(fun(4,6))
  // 3.  我们求任意两个数的 加减乘数结果
  
  // 4. 我们的函数如果有return 则返回的是 return 后面的值，如果函数么有 return 则返回undefined
  function fun1(){
    return 'hi'
  }
  console.log(fun1())//此时return 'hi'
  function fun2(){
    'hello world'
  }
  console.log(fun2())//undefined因为没有return
  function fun3(number){
    if(number>100){
      return;
    }
  }
  console.log(fun3())//还是undefined
</script>
```

#### DOM方法1
```html
<body>
<!-- Finding HTML elements by id
Finding HTML elements by tag name
Finding HTML elements by class name
Finding HTML elements by CSS selectors -->

<body>
  <h1 id="title"></h1>
  <div class="skill">html</div>
  <div>css</div>
  <p class="intro">Hello World!</p>
  <p class="intro"><b>querySelectorAll</b> method.</p>
  <p id="demo"></p>
  <script>
    const title = document.getElementById('title');
    title.innerHTML = 'Heading'
    const skill = document.getElementsByClassName('skill');
    skill[0].style.color = 'red'
    let elements = document.getElementsByClassName('intro');
    let demoEle = document.getElementById('demo');
    demoEle.innerHTML = elements[0].textContent
  </script>
</body>
```

#### DOM方法2
```html
<body>
  <img id="myImage" src="images/bg1.png" />
  <p>First Name: <input name="fname" type="text" value="Michael" /></p>
  <p>First Name: <input name="fname" type="text" value="Doug" /></p>

  <p>The tag name of the first element with the name "fname" is:</p>

  <p id="demo"></p>
  <!-- change bg1.png to bg2.png, copy the value of first input to demo-->
  <script>
    document.getElementById('myImage').src = 'images/bg2.png'              //修改图片地址
    let demoEle = document.getElementById('demo');
    let inputEle = document.getElementsByName('fname')[0];
    demoEle.innerHTML = inputEle.value                                     //将第一个名字添加到demo里
  </script>
</body>
```

#### DOM_queryselector
```html
<body>
  <p>hello world1</p>
  <p>hello world2</p>
  <div class="p_hello">hello world3</div>
  <!-- change first p tag background color to red -->
  <!-- set font size 30px for all p tags -->
  <script>
    document.querySelector('p').style.backgroundColor = 'red';
    const pList = document.querySelectorAll('p');
    for (let i=0; i< pList.length; i++){
      pList[i].style.fontSize = '30px'
    }
  </script>
</body>
```

#### DOM_appendChild
```html
<body>
  <p id="p"></p>
  <div id="list">
    <p id="java">java</p>
    <p id="css">css</p>
    <p id="python">python</p>
  </div>
  <!-- add 'js' to the end of the list -->
  <script>
    p.innerHTML = 'js';
    const parent = document.getElementById('list');
    parent.appendChild(p)
  </script>
</body>
```

#### DOM_style
```html
<body>
  <!--set style for id 'p-id': ff0000, 20px, padding top 20px, hello world -->
  <p id="p-id"></p>
  <script>
    const element = document.getElementById('p-id');
    element.innerHTML = 'hello world';
    element.style.color = '#ff0000';
    element.style.fontSize = '20px';
    element.style.paddingTop = '20px';
  </script>
</body>
```

#### DOM_eventlistener
```html
//给myBtn添加一个点击事件，内容是调用现在的时间
<body>
  <h2>JavaScript addEventListener()</h2>

  <p>
    This example uses the addEventListener() method to attach a click event to
    a button.
  </p>

  <button id="myBtn">Try it</button>

  <p id="demo"></p>
  <script>
    document.getElementById('myBtn').addEventListener('click',displayDate)
    function displayDate(){
      document.getElementById('demo').innerHTML = Date();
    }
  </script>
</body>
```

#### Math方法1
```html
<script>
  console.log(Math.max(1, 99, 3));
  console.log(Math.max(-1, -10));
  console.log(Math.max(1, 99, "Hi"));
  console.log(Math.max());
  //这里都是求最大值
</script>
<script>
  // 1.绝对值方法
  console.log(Math.abs(1));                 //1
  console.log(Math.abs(-1));                //1
  console.log(Math.abs('-1'));              //会隐式转换，把字符串转化为数字型：1
  console.log(Math.abs('hello'));           //NaN
  // 2.三个取整方法
  // (1) Math.floor()   地板 向下取整  往最小了取值
  console.log(Math.floor(1.9))              //1
  // (2) Math.ceil()   ceil 天花板 向上取整  往最大了取值
  console.log(Math.ceil(1.1))               //2
  // (3) Math.round()   四舍五入  其他数字都是四舍五入，但是 .5 特殊 它往大了取
  console.log(Math.round(1.2))              //1
  console.log(Math.round(1.5))              //2
  console.log(Math.round(-1.9))             //-2
  console.log(Math.round(-1.5))             //-1
</script>
```

#### Math方法2
```html
<script>
  // 1.Math对象随机数方法   random() 返回一个随机的小数  0 =< x < 1
  // 2. 这个方法里面不跟参数
  // 3. 代码验证
  console.log(Math.random());
  // 4. 我们想要得到两个数之间的随机整数 并且 包含这2个整数
  // Math.floor(Math.random() * (max - min + 1)) + min;
  function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  console.log(getRandom(1,100))
  // 5. 随机点名
  var arr = ["Jane", "Ben", "Chris", "John", "Andrew", "Amy"];
  // console.log(arr[0]);
  console.log(arr[getRandom(0,arr.length-1)])
</script>
```
#### string方法1
```html
<script>
  // 根据位置返回字符
  // 1. charAt(index) 根据位置返回字符
  var str = "andy";
  console.log(str.charAt(3))                       //y
  // 遍历所有的字符

  // 字符串操作方法
  // 1. concat('字符串1','字符串2'....)
  var str = "andy";
  console.log(str.concat('hi'))                    //andyhi
  // 2. substr('截取的起始位置', '截取几个字符');
  var str1 = "abcdefghijk";
  console.log(str1.substr(2,3))                    //cde
</script>
```
#### string方法2
```html
<script>
  // 1. 替换字符 replace('被替换的字符', '替换为的字符')  它只会替换第一个字符
  var str = "andyandy";
  console.log(str.replace('a','b'))
  // 有一个字符串 'abcoefoxyozzopp'  要求把里面所有的 o 替换为 *
  var str1 = "abcoefoxyozzopp";
  while (str1.indexOf('o') !== -1){
    str1 = str1.replace('o','*')
  }
  console.log(str1)
  // 2. 字符转换为数组 split('分隔符')    前面我们学过 join 把数组转换为字符串
  var str2 = "red, pink, blue";
  console.log(str2.split(','))       // ['red', 'pink', 'blue']
  var str3 = "red&pink&blue";
  console.log(str3.split('&'))       // ['red','pink','blue']
</script>
```

#### 日期显示小练习
```html
<script>
  // 2023-05-03  Wednesday
  let date = new Date();
  console.log(date)                          //Sun Nov 05 2023 16:01:29 GMT+1000 (澳大利亚东部标准时间)
  function addZero (num){
    return num <10 ? '0' + num : num;
  }
  let arr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
  ];
  let year = date.getFullYear();            //2023
  let month = addZero(date.getMonth() + 1); //10+1=11
  let dates = addZero(date.getDate());      //5
  let day = date.getDay();                  //0
  let result = `${year}-${month}-${dates} ${arr[day]}`
  console.log(result);                      //2023-05-03  Wednesday
</script>
```
