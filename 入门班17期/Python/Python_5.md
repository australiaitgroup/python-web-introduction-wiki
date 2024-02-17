- [Note](#Note)
  - [Python_5 (`20/01/2024`)](#Python_5-20012024)
    - [Functions in Python](#Functions-in-Python)
      - [封装的概念](#封装的概念)
      - [Function的优势](#Function的优势)
        - [模块化](#模块化)
      - [Function Calls and Definition](#Function-Calls-and-Definition)
      - [Positional Arguments](#Positional-Arguments)
      - [Keyword Arguments](#Keyword-Arguments)
      - [Default Parameters](#Default-Parameters)
      - [Argument Tuple Packing](#Argument-Tuple-Packing)
      - [Argument Dictionary Packing](#Argument-Dictionary-Packing)
      - [Putting It All Together](#Putting-It-All-Together)
      - [Docstrings](#Docstrings)
      - [Lambda](#Lambda)
      - [Map](#Map)
      - [Filter](#Filter)
      - [Reduce](#Reduce)



# Note

## Python_5 (`20/01/2024`)

### Functions in Python
#### 封装的概念
- 在编程中，封装是一种将数据（属性）和代码（方法）绑定到一起的机制，以隐藏具体实现的方式
- 这是面向对象编程（OOP）的四大基本原则之一
- 封装的主要目的是保护对象内部的状态和实现细节，只允许通过定义好的接口（即公有方法）来访问对象的状态
- 老师的理解：开发者之间只通过接口进行交流，不需要去管封装里面的内容

<hr>

#### Function的优势
##### 模块化
- Reusable
- 模块化之前，每个功能都要重新写一遍内容

<p align='center'><img src='../images/模块化1.png' width='50%' height='50%' /></p>


- 模块化之后，所有的功能只需要在写完一遍之后分别调用就好

<p align='center'><img src='../images/模块化2.png' width='50%' height='50%' /></p>

<hr>

#### Function Calls and Definition

<p align='center'><img src='../images/Function Calls and Definition.png' width='50%' height='50%' /></p>

<hr>

#### Positional Arguments
- 即Arguments是按顺序出现的

<p align='center'><img src='../images/Positional Arguments.png' width='50%' height='50%' /></p>

- input parameters: signature of the function(参数即签名)
- polymorphism(多态：只要符合位置要求，任何类型的参数均可填入)
- 但注意不能超过或少于参数数量范围

<p align='center'><img src='../images/Positional Arguments1.png' width='50%' height='50%' /></p>

<hr>

#### Keyword Arguments
- 正常情况下，每个keyword对应的参数会按顺序输出

<p align='center'><img src='../images/Keyword Arguments1.png' width='50%' height='50%' /></p>

- 修改keyword关键词会导致报错

<p align='center'><img src='../images/Keyword Arguments2.png' width='50%' height='50%' /></p>

- 省去一两个keyword不会影响输出，系统会按照Positional Arguments的顺序继续执行

<p align='center'><img src='../images/Keyword Arguments3.png' width='50%' height='50%' /></p>

- 注意：当所有arguments中只有一个keyword时，只能出现在最右边，不然会报错

<p align='center'><img src='../images/Keyword Arguments4.png' width='50%' height='50%' /></p>

<hr>

#### Default Parameters
- 当定义了默认值时，少输或者不输入内容时系统会自动用默认值补齐

<p align='center'><img src='../images/Default Parameters.png' width='50%' height='50%' /></p>

<hr>

#### Argument Tuple Packing
- 当不确定parameter的个数时，可以采用packing

<p align='center'><img src='../images/Argument Tuple Packing.png' width='50%' height='50%' /></p>

<hr>

#### Argument Dictionary Packing
- 多个value变成一个Dic

<p align='center'><img src='../images/Argument Dictionary Packing.png' width='50%' height='50%' /></p>

<hr>

#### Putting It All Together
- 当所有类型的数据放在一起packing时，keyword类型也要放在最右边packing

<p align='center'><img src='../images/Putting It All Together.png' width='50%' height='50%' /></p>

<hr>

#### Docstrings
- 一些关于定义的字符串的例子

<p align='center'><img src='../images/Docstrings.png' width='80%' height='80%' /></p>

<hr>

#### Lambda
- 定义：

<p align='center'><img src='../images/Lambda.png' width='50%' height='50%' /></p>

<hr>

#### Map
- 对于一个iterable里面每个值，转化为一个iterator

<p align='center'><img src='../images/Map.png' width='50%' height='50%' /></p>

<hr>

#### Filter
- 用于从一个序列中筛选出满足特定条件的元素
- 它接受两个参数：
- 一个函数（称为谓词函数），用于测试每个元素是否满足条件
- 一个可迭代对象，filter将应用谓词函数于此可迭代对象的每个元素

<p align='center'><img src='../images/Filter.png' width='50%' height='50%' /></p>

<hr>

#### Reduce
- Reduce函数意味着它以函数作为参数
- 它接受两个参数：
- 一个函数
- 一个可迭代对象

<p align='center'><img src='../images/Reduce.png' width='50%' height='50%' /></p>

