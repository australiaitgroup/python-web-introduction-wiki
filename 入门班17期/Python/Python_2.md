- [Note](#Note)
  - [Python_2 (`10/01/2024`)](#Python_2-10012024)
    - [Python数据类型](#Python数据类型)
      - [Integer](#Integer)
      - [Boolean](#Boolean)
      - [None](#None)
      - [String](#String)
      - [Immutable Mutable Hashable](#Immutable-Mutable-Hashable)
    - [Python和JavaScript的区别](#Python和JavaScript的区别)
      - [命名差异](#命名差异)
      - [添加注释](#添加注释)
      - [and和or的区别](#and和or的区别)
      - [for循环](#for循环)

# Note

## Python_2 (`10/01/2024`)

### Python数据类型
> 最底层二进制：0和1(integer 8位 8bit) 可用符号表示(1010 1001)
- Primitive type(不可变):
> 原始类型是最基本的数据类型，它们不是由其他数据类型组成的。这些类型通常是由编程语言直接支持的，不需要通过对象或类来实现<br>
> 原始类型的值直接存储它们的值。它们通常在内存中占用固定的大小，并且它们的操作效率通常很高
- container type(Python里倾向叫reference,C语言倾向叫pointer):
> 容器类型是由其他数据类型组成的复合类型。这些类型可以存储多个元素，这些元素可能是原始类型，也可能是其他容器类型<br>
> 容器类型可以动态地存储多个数据，它们的大小通常不是固定的。容器类型不仅存储数据元素，还存储关于这些元素的附加信息（如元素数量、元素的排列顺序等）


```mermaid
graph TB;
    a{"Python Data Type"}-->b{"Primitive Types \n Immutable"};
    b-->c["Integer"];
    b-->d["Float"];
    b-->e["Boolean"];
    b-->f["None"];
    b-->g["String"];
    a-->h{"Containers \n Immutable & Mutable"};
    h-->i["list \n Mutable/ordered"];
    h-->j["Tuple \n Immutable/ordered"];
    h-->k["Dictionary \n Immutable/unordered"]
```

<hr>

#### Integer
- Python对整数的处理方式
> 在Python中，整数（通常在-5到256之间）是预先创建并缓存起来的,这意味着它们将会有相同的内存地址<br>
> 当你改变这些变量的值，使其超出了这个预缓存的范围，Python会创建一个新的整数对象来表示新的值

<hr>

#### Boolean
> 与integer类似，a、b同时赋予true或者false时地理位置相同

<hr>

#### None
> 无论赋值给谁，都只有一个地理位置

<hr>

#### String
> 一开始通过赋值得到的内容会修改地址，而赋值过后任何的修改不会<br>
> 在string后增加字母位数不会修改地址，而增加空格会

<hr>

#### Immutable Mutable Hashable

| Immutable | Mutable | Hashable
| :---: | :---: | :---: 
| 创建后其状态就不能改变的对象 | 创建后可以改变其状态的对象 | 有一对一的映射并且可以用作字典的键或集合中的元素
| 字符串（str）和整数（int） | 列表（list）和字典（dict） | 不可变的，它们也是可哈希的

- 相互间的联系：
> 不可变的对象是可哈希的，因为它们的内容不会改变<br>
> 可变对象通常是不可哈希的，因为它们的内容可以改变

<hr>
<br>

### Python和JavaScript的区别
#### 命名差异

<p align='center'><img src='../images/Python和JavaScript的命名差异1.png' width='80%' height='80%' /></p>

<br>

- Python: 运用indentation(缩进)来显示level
- JavaScript: 对缩进不太敏感, 更专注传输
- PEP8规则: 它是一个编码约定文档，描述了如何编写Python代码的风格指南

<br>

| 规则 | 内容
| :---: | :---:
| 缩进 | 使用4个空格进行缩进，不要使用制表符（Tab）
| 行宽 | 每行代码尽量不超过79个字符，以便于阅读
| 空行 | 用空行来分隔函数和类，以及代码中较大的代码块
| 注释 | 尽量清晰，不要解释代码是如何做的，而是解释代码为什么这么做
| 命名规范 | 类名通常使用驼峰命名法（如MyClass）
| 命名规范 | 函数和变量名使用小写字母和下划线分隔（如my_function）
| 命名规范 | 常量通常使用全大写字母和下划线分隔（如MY_CONSTANT）
| 空格的使用 | 在逗号、冒号、分号后面要加空格，但不是在前面
| 空格的使用 | 参数列表、索引或切片的括号内侧不加空格
| 引入模块 | 每个引入应该独立一行，标准库模块、第三方库模块、应用程序指定模块分组导入，组之间用空行分隔
| 表达式和语句中的空格 | 避免不必要的空格

<br>

<p align='center'><img src='../images/Python和JavaScript的命名差异2.png' width='50%' height='50%' /></p>

<br>

| Python | JavaScript
| :---: | :---:
| snake_pattern | camelCasePattern
| 赋值时直接用'=' | 赋值时需要用到'var'和'let'
| 常量名可直接使用 | 常量名之前需要加'const'
| None | 一般用null 或 undefined

<hr>

#### 添加注释
- Python
  - \#
  - """

- JavaScript
  - //
  - /* */

<hr>

 #### and和or的区别

 <br>
 
<p align='center'><img src='../images/and-or-not.png' width='50%' height='50%' /></p>

> 两者都是返回停止判断位置的元素<br>
> and: 有一个false就是false<br>
> or: 有一个true就是true

`and和or本质上返回一个真正的值, 而不是boolean`

<hr>

#### for循环

<br>

<p align='center'><img src='../images/for循环.png' width='50%' height='50%' /></p>


  
