
# Note

## Python_3 (`14/01/2024`)

### 环境安装
- 各个PC情况不一样，建议直接回顾录播复习一下全部流程

### Python-Set/List/Dict的常用方法
- Set：唯一、无序、hashable
> 检查存在性可直接 <br>
> a = set() <br>
> a.add(1) <br>
> 1 in a
- List：有序、不唯一、index
> a = list() <br>
> a.append(1) <br>
> a[0] <br>
> 即可以通过一个具体的位置信息快速access到value或其他信息
- Dict：
  

<p align='center'><img src='../images/PythonSetListDict的常用方法.png' width='50%' height='50%' /></p>

#### 三种赋值方式的区别
- b = a<br>
> 这种方式是将b直接指向a所引用的对象。这意味着a和b实际上指向的是同一个对象，因此对b的任何修改都会反映在a上，反之亦然<br>

> 在以下这个例子中:使用b = a，修改b导致a也发生了变化

```python
import copy

# 示例数据结构
a = [1, [2, 3], 4]

# 直接赋值
b = a
b[0] = 10
print("After 'b = a':", a)  # 输出: [10, [2, 3], 4]
```

- b = copy(a)<br>
> 这种方式使用copy模块的浅复制（shallow copy）。它创建了一个新对象，然后尽可能地将原对象中的内容复制到新对象中
> 对于复杂的对象（如包含其他对象的列表），浅复制只复制最外层的容器，容器内部的元素仍然是原始对象的引用。这意味着修改这些内部元素会影响原始对象
> 在以下这个例子中:使用b = copy(a)（浅复制），修改b中的内嵌列表会影响a中对应的列表。
```python
# 浅复制
a = [1, [2, 3], 4]
b = copy.copy(a)
b[1][0] = 20
print("After 'b = copy(a)':", a)  # 输出: [1, [20, 3], 4]
```

- b = deepcopy(a)
> 这种方式使用copy模块的深复制（deep copy）。深复制创建了一个完全独立的新对象，包括其内部嵌套的所有对象。这意味着原始对象和副本之间不会相互影响
> 在以下这个例子中:使用b = deepcopy(a)（深复制），a和b完全独立，对b的任何修改都不会影响a
```python
# 深复制
a = [1, [2, 3], 4]
b = copy.deepcopy(a)
b[1][0] = 30
print("After 'b = deepcopy(a)':", a)  # 输出: [1, [2, 3], 4]
```
