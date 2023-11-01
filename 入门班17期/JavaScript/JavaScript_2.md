
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
- while循环
- do...while循环

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

#### continue语句
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



