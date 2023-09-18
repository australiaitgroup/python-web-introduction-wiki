- [Class Notes](#class-notes)
  - [Resources](#resources)
  - [Python\_4 (`05/08/2023`)](#python_4-05082023)
    - [VScode python setting (修复deprecated warning)](#vscode-python-setting-修复deprecated-warning)
    - [Dunder function](#dunder-function)
    - [Iterable (列表, 元组, 字符串, 字典, 集合)](#iterable-列表-元组-字符串-字典-集合)
    - [Iterator (迭代器)](#iterator-迭代器)
      - [Iterable和Iterator区别](#iterable和iterator区别)
      - [generator和iterator的区别](#generator和iterator的区别)
    - [List Comprehension (列表生成式)](#list-comprehension-列表生成式)
    - [函数](#函数)
      - [Positional Arguments](#positional-arguments)
      - [Keyword arguments](#keyword-arguments)
      - [Default Parameters](#default-parameters)
      - [return关键字](#return关键字)
    - [Packing \& Unpacking](#packing--unpacking)
      - [Tuple Unpacking](#tuple-unpacking)
      - [Tuple packing](#tuple-packing)
        - [将tuple packing和unpacking结合起来-\> \[\] -\> ()](#将tuple-packing和unpacking结合起来-----)
      - [Dictionary packing](#dictionary-packing)
      - [Dictionary Unpacking](#dictionary-unpacking)
    - [Docstring vs Comment](#docstring-vs-comment)
    - [Funciton Annotations (函数注解)](#funciton-annotations-函数注解)
    - [反转字符串](#反转字符串)

# Class Notes

## Resources
[Python - Iterator](https://www.w3schools.com/python/python_iterators.asp)<br>
[Python - List Comprehension](https://www.w3schools.com/python/python_lists_comprehension.asp)<br>
[Python - Function](https://www.w3schools.com/python/python_functions.asp)<br>
[Python - Packing&Unpacking](https://www.geeksforgeeks.org/packing-and-unpacking-arguments-in-python/)

## Python_4 (`05/08/2023`)
<p align='center'><img src='../image/python.png' width='30%' height='30%' /></p>

### VScode python setting (修复deprecated warning)
```json
{
    "workbench.editorAssociations": {
        "*.ipynb": "jupyter-notebook"
    },
    "notebook.cellToolbarLocation": {
        "default": "right",
        "jupyter-notebook": "left"
    },
    "python.analysis.typeCheckingMode": "basic",
    "editor.formatOnSaveMode": "file",
    "editor.formatOnSave": true,
    "[python]": {
        "editor.defaultFormatter": "ms-python.black-formatter",
        "editor.formatOnSave": true,
        "editor.formatOnType": true
    },
    "redhat.telemetry.enabled": true,
    "window.zoomLevel": 3
}
```


### Dunder function
`Double Underscore Function`

```python
class MyClass:
    def __init__(self, value):
        self.value = value

    def __str__(self):
        return f"From __str__"

    def __repr__(self):
        return f"From __repr__"

    def __eq__(self, other):
        return self.value == other.value

    def __lt__(self,other):
        return self.value > other.value


a = MyClass(3)
print(a)  # From __str__. 优先找__str__, 之后找__repr__, 都没有就返回地址
a1 = MyClass(100)
a2 = MyClass(100)
print(a1 == a2) # True
print(a1 is a2) # False
a1.value = 1997
print(a1 == a2) # False

mc1 = MyClass(1)
mc2 = MyClass(2)
print(sorted(mc1,mc2))
```

> __repr__直接call显示; __str__是print或str显示; __str_在没有override情况下会用__repr__. 但是反过来, __repr__不会用__str__

### Iterable (列表, 元组, 字符串, 字典, 集合)
```python
my_list = [1, 2, 3, 4]
for i in my_list:
    print(i)
```

### Iterator (迭代器)
```python
class MyIterator:
    def __init__(self, letters):
        self.letters = letters
        self.position = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.position < len(self.letters):
            current_letter = self.letters[self.position]
            self.position += 1
            return current_letter
        else:
            raise StopIteration

my_iterator = MyIterator(['a', 'b', 'c'])

for letter in my_iterator:
    print(letter) # a, b, c
```

#### Iterable和Iterator区别
```python
a = [1, 2, 3]
iter_a = iter(a)
print([i for i in a])  # [1,2,3]
print([i for i in iter_a])  # [1,2,3]
print([i for i in a])  # [1,2,3]
print([i for i in iter_a])  # []
```
> iterator是iterable. iterable可以迭代多次, iterator只能迭代一次

#### generator和iterator的区别
> generator是一个特殊的iterator<br>
> generator不需要一次性将整个序列存储在内存中 (剩内存), 使用yield生产值

```python
def inner_generator():
    yield 1
    yield 2
    yield 3

def outer_generator():
    yield 'Start'
    yield from inner_generator()
    yield 'End'

gen = outer_generator()
for item in gen:
    print(item) # Start 1 2 3 End
```

> sum 函数只能用于包含数值类型的可迭代对象
```python
print(sum([mc1, mc2]))  # TypeError: unsupported operand type(s) for +: 'int' and 'MyClass'
print(sum([mc1.value, mc2.value])) # 3
```

### List Comprehension (列表生成式)
```python
squares = [x**2 for x in range(5)]
evens = [x for x in range(10) if x % 2 == 0]
print(squares)  # [0, 1, 4, 9, 16]
print(evens)  # [0, 2, 4, 6, 8]
```

### 函数
<p align='center'><img src='../image/python function.png' width='50%' height='50%' /></p>

```python
id()  #返回对象的标识符
len() #返回可迭代对象的长度
any() #当可迭代对象中至少有一个元素为 True 时，any() 返回 True，否则返回 False
```

#### Positional Arguments
```python
def f(qty, item, price):
    print(f"{qty} {item} cost ${price:.2f}")


f(6, "banana", 1.74) # 正常输出结果
f(6, 'banana') # missing 1 required positional argument
f(6, 'banana', 1.74, 'kumquats') # takes 3 positional arguments but 4 were given
```
> Python的function中实参数量多于形参会报错; 但JS中不会

#### Keyword arguments
> positional arguments一定在keyword arguments前面
```python
f(6, item="banana", 1.74) # SyntaxError: positional argument follows keyword argument
```

#### Default Parameters
`无指定实参, 使用默认值; 有指定实参, 覆盖默认值`
```python
def test(qty=6, item="banana", price=1.74):
    print(f"{qty} {item} cost ${price:.2f}")

test(price=2.29) # 6 bananas cost $2.29
```

#### return关键字
- 返回值
- 终止function, 避免执行剩下的语句


### Packing & Unpacking
#### Tuple Unpacking
```python
def f1():
    return "foo", "bar", "baz", "qux"

type(f1())  # tuple
a, b, c, d = f1()
print(f"a={a} b={b} c={d} d={d}") # a=foo b=bar c=qux d=qux

fruits = ("apple", "banana", "cherry")

(green, yellow, red) = fruits

print(green) # 'apple'
print(yellow) # 'banana'
print(red) # 'cherry'
```

#### Tuple packing
```python
coordinates = 10, 20 # 不需要写成(10, 20)
print(coordinates) # (10, 20)

def f2(*args):
    print(args)
    print(type(args), len(args))
    for x in args:
        print(x)

f2(1, 2, 3) # 1,2,3

def avg(*args):
    print(sum(args) / len(args))

avg(1, 2, 3) #2.0
```

##### 将tuple packing和unpacking结合起来-> [] -> ()
```python
def f(*args):
    print(type(args), args)


a = [1, 2, 3]
f(*a)  # <class 'tuple'> (1,2,3)
f(a) # <class 'tuple'> ([1, 2, 3],)
```

> 上面的代码成功将一个list变成了一个tuple, f(*a)相当于做了unpacking, 实际上是f(1,2,3), *args接受参数后, 将它们pack成元组. 直接用f(a)不会得到想要的结果

#### Dictionary packing
```python
def f3(**kwargs):
    print(kwargs) # {'foo': 1, 'bar':2, 'baz':3}
    print(type(kwargs)) # <class 'dict'>
    for key, val in kwargs.items():
        print(key, '->', val)

f3(foo=1, bar=2, baz=3)
```
#### Dictionary Unpacking
```python
def f4(a,b,c):
    print(a) #1
    print(b) #2
    print(c) #3

f4(**{'a': 1, 'b': 2, 'c': 3})

d = {"a": 1, "b": 2, "c": 3}
keys_list, values_list = zip(*d.items())
print(keys_list)  # ('a', 'b', 'c')
print(values_list)  # (1, 2, 3)
```

> 定义方法时, 先传进所有的positional，然后才是键值对. *args前面可以有positional arguments, 后面只能键值对

### Docstring vs Comment
| Docstring | Comment |
| :---: | :---: |
| ***模块、函数、类、方法的一个总体介绍*** | ***注重于记录代码实现的细节*** |

```python
def my_function(a, b):
    """
    This is a custom function that takes two arguments a and b and returns their sum.
    """
    return a + b

# 查看自定义方法的docstring
help(my_function)
# 查看python内置方法的docstring
help(sum)
help(reversed)

# 另一种方法是使用__doc__
print(sum.__doc__)
print(reversed.__doc__)
```

### Funciton Annotations (函数注解)
`避免开发者出现简单的type error. Python 3.0 版本引入了函数注解的概念, 但它们在 Python 3.5 版本中得到了进一步的发展和改进, 尤其是引入了类型提示的支持, 从而增强了代码的可读性和可维护性.`
<div style='display:flex; justify-content: space-between'>
    <img src='../image/python annotation.png' width='50%' />
    <img src='../image/python annotation debug.png' width='50%' />
</div>

### 反转字符串
```python
s = 'this is a function'
print(s[::-1]) # noitcnuf a si siht
```