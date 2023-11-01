


# Note

## JavaScript_Part2 (`01/11/2023`)

### 循环
#### 循环目的
- 执行规律性的重复操作的需要
#### JS中的主要循环
##### for循环
- 主要用于把某些代码循环若干次，通常跟计数有关
```html
for(var i = 1; i <= 100; i++) {
      console.log('这个人今年' + i + '岁了')；
}
```
##### while循环
##### do...while循环

### Object对象
#### 什么是对象
- 在JS中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、函数等。
#### 为什么需要对象
#### 利用字面量创建对象
#### 遍历对象属性

### 实战练习
#### if-else
- 单分支及双分支写法
```html
<script>
  //单分支
  if(3<5){
    alert('hello')
  }
  //双分支
  let age = prompt('Please enter your age');
  if(age>=10){
    alert('welcome to time zone')
  }else{
    alert('not allowed')
  }
</script>
```
- 多分支写法
```html
<script>
  let score = parseInt(prompt("Please enter your score"));
  // score >= 90   "A"
  // score >= 80   "B"
  // score >= 70   "C"
  // score >= 60   "D"
  // else "E"
  if (score >= 90){
    alert('A')
  }else if (score >= 80){
    alert('B')
  }else if (score >= 70){
    alert('C')
  }else if (score >= 60){
    alert('D')
  }else {
    alert('E')
  }
</script>
```

#### 三元表达式（双分支另一写法，不建议太复杂的逻辑使用）
- 基本语法
```html
<script>
  // 1. 有三元运算符组成的式子我们称为三元表达式
  // 2. ++num     3 + 5     ? :
  // 3. 语法结构
  // 条件表达式 ？ 表达式1 ： 表达式2
  // 4. 执行思路
  // 如果条件表达式结果为真 则 返回 表达式1 的值 如果条件表达式结果为假 则返回 表达式2 的值
  let score = 100;
  let result = score > 90 ? 'A' : 'B';
  alert(result)
</script>
```
- 小练习
```html
<script>
  // 用户输入0~59之间的一个数字
  // 如果数字小于10，则在这个数字前面补0,（加0 拼接） 否则  不做操作
  // 用一个变量接受这个返回值，输出
  let num = prompt('Please Enter a number between 0-59');
  let result = num < 10 ? '0' + num : num; 
  alert(result)
</script>
```

#### switch语句（多分支语句）
- 基本语法
```html
<script>
  // 1. switch 语句也是多分支语句 也可以实现多选1
  // 2. 语法结构 switch 转换、开关  case 小例子或者选项的意思
  // switch (表达式) {
  //     case value1:
  //         执行语句1;
  //         break;
  //     case value2:
  //         执行语句2;
  //         break;
  //         ...
  //         default:
  //             执行最后的语句;
  // }
  // 3. 执行思路  利用我们的表达式的值 和 case 后面的选项值相匹配 如果匹配上，就执行该case 里面的语句  如果都没有匹配上，那么执行 default里面的语句

  //注意
  // 1. 我们开发里面 表达式我们经常写成变量
  // 2. 我们num 的值 和 case 里面的值相匹配的时候是 全等   必须是值和数据类型一致才可以 num === 1
  // 3. break 如果当前的case里面没有break 则不会退出switch 是继续执行下一个case
    let num = 6;
    switch(num){
      case 1:
        console.log(1);
        break;
      case 6:
        console.log(6);
        break;
      case 3:
        console.log(3);
        break;
      default:
        console.log('not match')
    }
```
- 小练习
```html
<script>
  // 弹出 prompt 输入框，让用户输入水果名称，把这个值取过来保存到变量中。
  // 将这个变量作为 switch 括号里面的表达式。
  // case 后面的值写几个不同的水果名称，注意一定要加引号 ，因为必须是全等匹配。
  // 弹出不同价格即可。同样注意每个 case 之后加上 break ，以便退出 switch 语句。
  // 将 default 设置为 eg: 'apple is not available'。
let fruit = prompt('Please enter a fruit name')
switch(fruit) {
  case 'apple':
    alert('3/kg')
    break;
  case 'banana':
    alert('5/k')
    break;
  default:
    alert(fruit + ' is not available')
}
</script>
```

### For循环
- For loop1
```html
<script>
  for(let i=1; i<=10; i++){
    console.log('hello ' + i)
  }

  for (let i=1; i<=100; i++){
    if(i===1){
      console.log('The person is 1 years old')
    }else if(i===100){
      console.log('The person is 100 years old')
    }else {
      console.log(i)
    }
  }
</script>
```
- For loop2
```html
<script>
  // case 1
  // for 循环可以重复执行不同的代码  因为我们有计数器变量 i 的存在 i每次循环值都会变化
  // 我们想要输出1个人 1~100岁. eg: He is 1 years old.
  for(let i=1; i<=100; i++){
    // console.log('He is ' + i + ' years old')
    console.log(`He is ${i} years old`)//高级一点的写法，不用过多引号拼接
  }
  //case 2
  // for 循环重复执行某些操作 比如说我们做了100次加法运算
  // 求 1~100 之间的整数累加和
  //         需要循环100次，我们需要一个计数器  i
  // 我们需要一个存储结果的变量 sum ，但是初始值一定是 0
  // 核心算法：1 + 2 + 3 + 4 ....   ，sum  =  sum + i;
  let sum1 = 0;
  for(let i =1; i<=100; i++){
    // sum1 = sum1 + i;//表示对自己的值进行更新
    sum1 += i //上下两种皆可
  }
  console.log('sum1',sum1)
  //case 3
  //求1-100之间所有能被3整除的数字的和
  let sum2 = 0;
  for(let i=1; i<=100; i++){
    if(i%3 === 0){
      sum2 += i //sum2 = sum2 + i
    }
  }
  console.log(sum2)
  //case 4
  // 弹出输入框输入总的班级人数(num)
  // 依次输入学生的成绩（ 保存起来 score）， 此时我们需要用到
  // for 循环， 弹出的次数跟班级总人数有关系 条件表达式 i <= num
  // 进行业务处理: 计算成绩。 先求总成绩（ sum）， 之后求平均成绩（ average）
  // 弹出结果
  let num = prompt('Please enter total number of students');
  let sum = 0;
  let average = 0;
  for (let i=1; i <= num; i++) {
    let score = prompt('Please enter the score of student ' + i);
    sum +=parseFloat(score)
  }
  average = sum/num;
  console.log('sum',sum);
  alert('sum is ' + sum);
  alert(`average is ${average}`)
</script>
```

#### while条件表达式
- 基本语法
```html
<script>
  // while (条件表达式) {
  //   循环体;
  // }

  // 1. 打印人的一生，从year1 - year100
  // let i = 1;
  // while (i <= 100) {
  //   console.log("he is " + i + " years old");
  //   i++;
  // }
  // 2. 计算 1 ~ 100 之间所有整数的和
  let sum =0;
  let i = 1;
  while(i <= 100){
    sum +=i;//sum =sum + i
    i++
  }
  alert(sum)
</script>
```

#### continue关键字
- 基本语法
```html
<script>
  //退出本次循环，继续执行剩余的循环
  for(let i=1; i<=10; i++){
    if(i ===3 || i ===6){
      continue;
    }
    console.log(i)
  }
  //1-100之间，除了能被7整除之外的整数和
  let sum = 0;
  for(let i=1; i<=100; i++){
    if(i % 7===0){
      continue
    }
    sum +=i;
  }
  alert(sum)
</script>
```

#### break关键字
- 基本语法
```html
<script>
//break 退出整个循环
for(let i=1; i<=5; i++){
  if(i===3){
    break;
  }
  console.log(i)
}
</script>
```

#### array数组
- array1
```html
<script>
   //用new创建数组 ['Ben',12] ['apple','orange','banana']
   let arr = new Array();//创建一个空数组[]
   console.log('arr',arr);
   let arr1 = [];
   let arr2 = [1,3,5,7]
   console.log(arr2.length)//数组长度4 index of last item == arr.length -1
   console.log(arr2[2])//5 index从0开始
   console.log(arr[arr2.length-1])// last item value
   console.log(arr[10])//没有这个元素时返回undefined
</script>
```
- array2
```html
<script>
   //修改length长度
   let arr = ['apple','banana','orange'];
   console.log('length',arr.length)
   arr[3] = 'kiwi';//add item
   console.log(arr)
   arr[1] = 'grape';
   console.log(arr)
</script>
```
- array寻找最大项
```html
 <script>
   // 求数组[2,6,1,77,52,25,7]中的最大值
   // 声明一个保存最大元素的变量 max。
   // 默认最大值可以取数组中的第一个元素。
   // 遍历这个数组，把里面每个数组元素和 max 相比较。
   // 如果这个数组元素大于max 就把这个数组元素存到 max 里面，否则继续下一轮比较。
   // 最后输出这个 max
   let arr = [2, 6, 1, 77, 52, 25, 7];
   let max = arr[0];//2
   for(let i =1; i< arr.length; i++){
     if(arr[i] > max){
       max = arr[i]
     }
   }
   console.log(max)
</script>
```
- array遍历
```html
<script>
  // 1. 求数组 [2,6,1,7, 4] 里面所有元素的和以及平均值。
  // (1)声明一个求和变量 sum。
  // (2)遍历这个数组，把里面每个数组元素加到 sum 里面。
  // (3)用求和变量 sum 除以数组的长度就可以得到数组的平均值。
  let arr = [2,6,1,7,4];
  let sum =0;
  let average = 0;
  for(let i =0; i<arr.length; i++){
    sum += arr[i]//sum = sum +arr[i]
  }
  average = sum / arr.length;
  console.log(sum, average)
</script>
```
- array筛选
```html
<script>
  // 将数组 [2, 0, 6, 1, 77, 0, 52, 0, 25, 7] 中大于等于 10 的元素选出来，放入新数组。
  // 1、声明一个新的数组用于存放新数据newArr。
  // 2、遍历原来的旧数组， 找出大于等于 10 的元素。
  // 3、依次追加给新数组 newArr。
  // 方法1
  let arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
  let newArr = [];
  let j =0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] >= 10){
      newArr[j] = arr[i]
      j++
    }
  }
  console.log(newArr)
</script>
```
- array删除指定元素
```html
<script>
  //删除指定元素0
  // 将数组[2, 0, 6, 1, 77, 0, 52, 0, 25, 7]中的 0 去掉后，形成一个不包含 0 的新数组。
  // 1、需要一个新数组用于存放筛选之后的数据。
  // 2、遍历原来的数组， 把不是 0 的数据添加到新数组里面(此时要注意采用数组名 + 索引的格式接收数据)。
  // 3、新数组里面的个数， 用 length 不断累加。
  let arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
  let newArr = [];
  let j = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] !==0){
      newArr[j] = arr[i];
      j++
    }
  }
  console.log(newArr)
</script>
```
- array一些添加和删除元素的方法(都会改变原数组)
```html
<script>
  // 添加删除数组元素方法
  // 1. push() 在我们数组的末尾 添加一个或者多个数组元素   push  推
  let arr = [1, 2, 3];
  // arr[3] = 'hello'
  let result = arr.push('hello', 'world');
  console.log('result',result)
  console.log(arr)
  //注意事项：
  // (1) push 是可以给数组追加新的元素
  // (2) push() 参数直接写 数组元素就可以了
  // (3) push完毕之后，返回的结果是 新数组的长度
  // (4) 原数组也会发生变化
  // 2. unshift 在我们数组的开头 添加一个或者多个数组元素

  // (1) unshift是可以给数组前面追加新的元素
  // (2) unshift() 参数直接写 数组元素就可以了
  // (3) unshift完毕之后，(重点1)返回的结果是 新数组的长度
  // (4) （重点2）原数组也会发生变化
  let arr2 = [1, 2, 3, 4, 5, "apple"];
  let result2 = arr2.unshift('banana','kiwi');
  console.log('result2',result2)
  console.log('arr2',arr2)
  // 3. pop() 它可以删除数组的最后一个元素
  // (1) pop是可以删除数组的最后一个元素 记住一次只能删除一个元素
  // (2) pop() 没有参数
  // (3) pop完毕之后，返回的结果是 删除的那个元素
  // (4) 原数组也会发生变化
  let arr3 = [1, 2, 3, 4, 5];
  const result3 = arr3.pop();
  console.log('result3',result3);//5
  console.log('arr3',arr3)//[1,2,3,4]
  // 4. shift() 它可以删除数组的第一个元素

  // (1) shift是可以删除数组的第一个元素 记住一次只能删除一个元素
  // (2) shift() 没有参数
  // (3) shift完毕之后，返回的结果是 删除的那个元素
  // (4) 原数组也会发生变化
  let arr4 = [1, 2, 3];
  console.log(arr4.shift());
  console.log(arr4)
</script>
```
- 返回数组元素索引号方法
```html
<script>
  // 返回数组元素索引号方法  indexOf(数组元素)  作用就是返回该数组元素的索引号 从前面开始查找
  // 它只返回第一个满足条件的索引号
  // 它如果在该数组里面找不到元素，则返回的是 -1
  var arr = ['red', 'green', 'blue', 'pink', 'blue'];
  // let arr = ["red", "green", "blue"];
  // let index = arr.indexOf('purple');//-1
  let index = arr.indexOf('blue')//2
  console.log('index',index)
  // 返回数组元素索引号方法  lastIndexOf(数组元素)  作用就是返回该数组元素的索引号 从后面开始查找
  let arr2 = ["red", "green", "blue", "pink", "blue"];
  let index2 = arr2.lastIndexOf('blue');
  console.log(index2)
</script>
```
- 数组转换为字符串
```html
<script>
  // 数组转换为字符串
  // 1. toString() 将我们的数组转换为字符串
  let arr = [1, 2, 3];
  console.log(typeof arr.toString());//'1,2,3'
  // 2. join(分隔符)
  let arr1 = ["green", "blue", "red"];
  console.log(arr1.join())//'green,blue,red'
  console.log(arr1.join('-'))//'green-blue-red'
  console.log(arr1.join(' '))//'green blue red'
</script>
```

#### object对象
- 利用对象字面量创建对象
```html
<script>
  // 1.利用对象字面量创建对象 {}
  let obj = {}
  let profile = {
    username:'Ben',
    age:20,
    gender:'male',
  }
  console.log('profile',profile)
  console.log('username',profile.username)
  console.log('age',profile['age'])
</script>
```
- 利用 new Object 创建对象
```html
<script>
  // 利用 new Object 创建对象
  let obj = new Object()//创建了一个空的对象
  obj.name = 'Chris';
  obj.age = 10;
  obj.gender = 'female';
  console.log(obj)
  console.log(obj.name,obj['age'])
</script>
```



