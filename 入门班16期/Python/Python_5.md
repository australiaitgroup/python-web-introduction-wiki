- [Class Notes](#class-notes)
  - [Resources](#resources)
  - [Python\_5 (`12/08/2023`)](#python_5-12082023)
    - [lambda function](#lambda-function)
      - [dis库](#dis库)
      - [lambda的优势和使用场景](#lambda的优势和使用场景)
    - [Decorator](#decorator)
      - [Decorator例子1: 计算运行时间](#decorator例子1-计算运行时间)
        - [计算函数平均执行时间 - timeit库](#计算函数平均执行时间---timeit库)
      - [Decorator例子2: logging](#decorator例子2-logging)
      - [Decorator的其他应用场景](#decorator的其他应用场景)
      - [cProfile](#cprofile)
    - [map/filter/reduce](#mapfilterreduce)
      - [map 返回一个迭代器 (对每个元素统一执行相同操作)](#map-返回一个迭代器-对每个元素统一执行相同操作)
      - [filter 返回一个迭代器 (挑选满足条件的元素)](#filter-返回一个迭代器-挑选满足条件的元素)
      - [reduce 返回一个值 (累加, 累乘)](#reduce-返回一个值-累加-累乘)
    - [List comprehension实现map/filter/reduce](#list-comprehension实现mapfilterreduce)
      - [为什么推荐使用List comprehension而不是直接使用map/filter/reduce?](#为什么推荐使用list-comprehension而不是直接使用mapfilterreduce)
      - [使用List comprehension实现map](#使用list-comprehension实现map)
        - [两种错误写法](#两种错误写法)
      - [使用List comprehension实现filter](#使用list-comprehension实现filter)
      - [使用List comprehension实现reduce](#使用list-comprehension实现reduce)
      - [List comprehension vs map/filter/reduce 总结](#list-comprehension-vs-mapfilterreduce-总结)
    - [Generator Expression为什么比List comprehension更好?](#generator-expression为什么比list-comprehension更好)
      - [Generator expression vs List comprehension执行结果](#generator-expression-vs-list-comprehension执行结果)
      - [Generator expression vs List comprehension总结](#generator-expression-vs-list-comprehension总结)

# Class Notes

## Resources
[Python_lambda](https://www.w3schools.com/python/python_lambda.asp)<br>
[Python_decorator](https://foofish.net/python-decorator.html)<br>
[Python_map](https://www.w3schools.com/python/ref_func_map.asp)<br>
[Python_filter](https://www.freecodecamp.org/chinese/news/python-filter-function)<br>
[Python_reduce](https://www.runoob.com/python/python-func-reduce.html)<br>
[Generator Expression vs List Comprehension](./Generator%20Expression%20vs%20List%20Comprehension.py)

## Python_5 (`12/08/2023`)

<p align='center'><img src='../image/python.png' width='30%' height='30%' /></p>

### lambda function
`lambda function是有返回值的匿名函数, 并且只能执行返回值操作`
> 提升可读性, 对于一些只调用一次的函数, 没必要定义一个命名函数, 使用lambda funciton是较好的.

```python
# lambda input: expression

# 1. 求和
print((lambda x, y: x + y)(2, 3))  #5

# 2. array每个元素平方
arr = [1,2,3,4,5]
new_arr=list(map(lambda x:x**2, arr))
print(new_arr) # [1, 4, 9, 16, 25]

# 3. sort
a = [2, 3, 9, 7, 4]
a.sort(key=lambda x: x)
print(a) # [2, 3, 4, 7, 9]
a.sort(key=lambda x: -x)
print(a) # [9, 7, 4, 3, 2]
```

#### dis库
```python
import dis

# 使用 dis 模块查看代码在底层是如何执行的
dis.dis(lambda x, y: x + y)
```

#### lambda的优势和使用场景
- 简洁性&匿名性: 减少了不必要的命名和函数定义，使代码更加紧凑
- 匿名性: 避免命名冲突, 覆盖本地库
- 内联使用:  Lambda 函数通常用于一些只在一个地方被调用一次的操作，避免了为简单操作创建单独的命名函数; 避免覆盖本地库

> lambda不能直接使用->这种annotation, 但可以使用Callable检查<br>

```python
from typing import Callable

addition: Callable[[int], int] = lambda x: x + 1
result = addition([3]) # 会提示type error
print(result)
```

### Decorator
`Higher Order Function`
> 一定是嵌套函数(nested function)<br>
> 在不修改原始代码的情况下, 对函数或类的功能进行增强或修改

```python
from typing import Callable, Tuple

addition: Callable[[int, int, int], int] = lambda x, y, z: x + y + z


def high_order(func, input: Tuple[int, int, int]) -> int:
    return func(*input)


print(high_order(addition, (1, 2, 3)))  # 6
```

```python
def my_decorator(func):
    def wrapper():
        print('before')
        func()
        print('after')
    return wrapper

@my_decorator
def say_hello():
    print('Hello')

say_hello() # before Hello after

def say_hi():
    print('Hi')
decorated_say_hi = my_decorator(say_hi)
print(decorated_say_hi)
```

#### Decorator例子1: 计算运行时间
```python
import time


def calculate_runtime(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        runtime = end_time - start_time
        print(f"Function {func.__name__} took {runtime:.6f} seconds to run.")
        return result

    return wrapper


@calculate_runtime
def slow_function(n):
    total = 0
    for i in range(n):
        total += i
        time.sleep(0.1)
    return total


print(slow_function(5))
```

##### 计算函数平均执行时间 - timeit库
```python
import timeit


def example_code():
    total = 0
    for i in range(20):
        total += i
    return total


# 测量 example_code 的平均执行时间，执行 1000 次
execution_time = timeit.timeit(example_code, number=10)
print(f"Average execution time: {execution_time:.6f} seconds")
```

#### Decorator例子2: logging
```python
import logging


def log_function_calls(func):
    logging.basicConfig(level=logging.INFO)

    def wrapper(*args, **kwargs):
        logging.info(
            f"Calling {func.__name__} with args: {args}, kwargs: {kwargs}"
        )
        result = func(*args, **kwargs)
        logging.info(f"{func.__name__} returned: {result}")
        return result

    return wrapper


@log_function_calls
def add(a, b):
    return a + b


@log_function_calls
def multiply(x, y):
    return x * y


result1 = add(3, 5)
result2 = multiply(2, 4)
```

#### Decorator的其他应用场景

`装饰器在的其他应用场景:`

- Authorization: You can use decorators to check if a user has the permission to execute specific requests.
- Caching/Memoization: Decorators can be used for caching the results of a function to improve speed. If a function is frequently called with the same parameters, decorators can store the previous results.
- Data Validation: Decorators can be used to automatically validate the input and output of a function, ensuring they meet certain requirements.
- Retry Mechanism: In network requests or other potentially failing operations, decorators can be used for automatic retries.
- Feature Toggling: Decorators can control the enabling or disabling of specific features, making feature toggling easier.
- Monitoring and Statistics: Decorators can be used to gather information about how a function is used and may send this information to external tools for monitoring or analysis.
- AOP (Aspect-Oriented Programming): Decorators allow you to separate cross-cutting concerns like logging and security from business logic, making the code cleaner and more maintainable.
- Response Handling: In web frameworks, decorators can be used for pre-processing or post-processing HTTP responses, such as adding headers or changing status codes.
- Routing: Many web frameworks use decorators to link functions with URL routes.
- Event Registration: Decorators can be used for registering event handlers in a system.

#### cProfile
> 提供了一个轻量级的性能分析器，可以用来测量函数调用的时间和调用次数，帮助您识别代码中的瓶颈和优化点

```python
import cProfile


def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)


if __name__ == "__main__":
    cProfile.run("fibonacci(30)")
```

### map/filter/reduce
#### map 返回一个迭代器 (对每个元素统一执行相同操作)
```python
print(list(map(lambda x: x * 2, [1, 2, 3, 4, 5]))) # [2, 4, 6, 8, 10]
```

#### filter 返回一个迭代器 (挑选满足条件的元素)
```python
print(list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4, 5, 6]))) # [2, 4, 6]
```

#### reduce 返回一个值 (累加, 累乘)
```python
from functools import reduce
print(reduce(lambda x, y: x * y, [1,2,3])) # 6
```

***一般推荐使用list comprehensive或generator expression而避免使用map/filter. reduce***

### List comprehension实现map/filter/reduce
#### 为什么推荐使用List comprehension而不是直接使用map/filter/reduce?
<p align='center'><img src='../image/List comprehension vs map:filter:reduce.png' /></p>

#### 使用List comprehension实现map
```python
print([i * 2 for i in [1, 2, 3, 4, 5, 6]])  # [2, 4, 6, 8, 10, 12]
```

##### 两种错误写法
```python
print([i *= 2 for i in [1, 2, 3, 4, 5, 6]])
```
> 第一个写法的错误原因是i*=2没有返回值

```python
print([i := i * 2 for i in [1, 2, 3, 4, 5, 6]])
```
> 第二种写法的错误原因是迭代变量i在List comprehension中是只读的, 不能重新绑定

#### 使用List comprehension实现filter
```python
print([i for i in [1, 2, 3, 4, 5, 6] if i % 2 == 0]) # [2, 4, 6]
```

#### 使用List comprehension实现reduce
```python
product = 1
print([product := product * num for num in [1, 2, 3]][-1]) # 6
```

*使用了python3.8版本引入的Assignment Expresions实现了reduce操作. 累乘实际上直接用reduce实现起来更容易些, 但对于[简单的情况](#为什么推荐使用list-comprehension而不是直接使用mapfilterreduce), 可以用List comprehension*

#### List comprehension vs map/filter/reduce 总结
`对于简单操作且数据量较少, 用写法简洁的list comprehension好; 数据集庞大且需要复杂处理时, 用map等内置方法能节约内存 (map方法return的是iterator不是iterable)`

### Generator Expression为什么比List comprehension更好?
#### Generator expression vs List comprehension执行结果
```python
"""
    list()+generator和list_comprehension都能得到list
    但使用list()+generator的写法比用list_comprehension更省内存, 执行速度快一点
"""
from sys import getsizeof as getsize
import time

list_comprehension_a = [i * 2 for i in range(1000000)]
generator_expression_a = (i * 2 for i in range(1000000))
generator_expression_list_a = list(generator_expression_a)
print(
    f"value: {len(list_comprehension_a)} | 使用列表生成式的size: {getsize(list_comprehension_a)}"
)
print(
    f"value: {len(generator_expression_list_a)} | 使用生成式+list()的size: {getsize(generator_expression_list_a)}"
)


start_time = time.time()
print(sum(list_comprehension_a))
end_time = time.time()
print(f"使用列表生成式的sum执行时间: {end_time - start_time} 秒")

start_time = time.time()
print(sum(generator_expression_list_a))
end_time = time.time()
print(f"使用生成器表达式的sum执行时间: {end_time - start_time} 秒")

# 用生成式做需要iterable方法的参数, 可以省略(), 更简洁
print(sum([x for x in range(3)]))
print(sum(x for x in range(3)))
```

<p align='center'><img src='../image/generator+list() vs list comprehension.png' width='80%' height='50%' /></p>

#### Generator expression vs List comprehension总结
- 大多数情况下, 对于需要iterable做参数的内置方法, 可以优先使用Generator Expression. 这样写法更简洁, 也能达到相同效果
- 即使需要输出一个list, 也可以通过list() + Generator Expression轻松实现. 更重要是在数据量很大时, 使用list() + Generator Expression [不仅节省内存而且可以提升效率](#generator-expression-vs-list-comprehension执行结果)