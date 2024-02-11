- [Note](#Note)
  - [Python_4 (17/01/2024)](#Python_4-17012024)
    - [数据结构](#数据结构)
      - [栈 - Stack](#栈---Stack)
      - [队列 - Queue](#队列---Queue)
      - [树 - Tree](#树---Tree)
      - [堆 - Heap](#堆---Heap)
      - [图 - Graph](#图---Graph)
    - [Iterator](#Iterator)
      - [Iterator和Iterable](#Iterator和Iterable)
      - [Generator](#Generator)

# Note

## Python_4 (`17/01/2024`)

### 数据结构
- Abstract Data Structure <br>
`interface：干什么用和怎么用`<br>
`即通过更加复杂的存储方式来使数据产生不同特性，见上节课的对比表`

<p align='center'><img src='../images/数据结构.png' width='50%' height='50%' /></p>

#### 栈 - Stack
- First In Last Out(特性)
- Interface(干什么和怎么用 or 提供的接口):<br>
  往里放 or 往外拿<br>
  def push(x: Object)<br>
  def pop() -> Object<br>
  def len() -> int<br>
  def empty() -> boolean
- Depth First Search(深度优先搜索)

<p align='center'><img src='../images/栈.png' width='50%' height='50%' /></p>

#### 队列 - Queue
- First In First Out(特性)
- 做题是最常用list
- 实际中使用针对双向列表进行优化过的deque更适合 
- Breadth First Search(广度优先搜索)

<p align='center'><img src='../images/队列.png' width='50%' height='50%' /></p>

#### 树 - Tree
- 有各种分类：
- 二叉树(BT)：每个节点最多有两个子节点的树结构
- 二叉搜索树(BST)：二叉树的一种，其中每个节点的左子树中的所有节点的值小于节点的值，右子树中的所有节点值大于节点的值
- 平衡二叉树：左右子树的高度差不超过1，有助于提高检索效率
- B树：平衡的多路搜索树，每个节点可以包含多个键和子节点，能更快的进行query
- 2-3树：一种平衡的搜索树，每个节点可以包含2个或3个键，并相应的有2个或3个子节点，能提高索引性能
- 红黑树：一种自平衡的二叉搜索树，通过在每次加入新的数据之后再进行重新的排列以确保树的平衡

<p align='center'><img src='../images/树.png' width='50%' height='50%' /></p>

#### 堆 - Heap
- 也叫 priority Queue
- max heap：每次pop出来的都是最大的那个值
- min heap：每次pop出来都必须是最小值
- 图中是max heap
- heapify_up/down功能：即随机加入一个数后会对整个heap进行对比并将其排在正确的位置
- 但做题时最常用heapq(单线程时优先，注重性能) or queue.PriorityQueue(多线程优先，注重安全)
- queue.Queue(队列)  queue.LifoQueue(栈)

<p align='center'><img src='../images/堆.png' width='50%' height='50%' /></p>

#### 图 - Graph
- 表示图的两种方法：
- 1.邻接表表示法(优势：省空间)：<br>
{<br>
1:[2,4], <br>
2:[1,4], <br>
3:[], <br>
4:[1,2] <br>
} 
- 2.邻接矩阵表示法(优势：连接关系一目了然)：

|  | 1 | 2 | 3 | 4
| :---: | :---: | :---: | :---: | :---:
| 1 | T | T | F | T
| 2 | T | T | F | T
| 3 | F | F | F | F
| 4 | T | T | F | T

<p align='center'><img src='../images/图.png' width='50%' height='50%' /></p>


### Iterator
#### Iterator和Iterable
- Iterable（可迭代对象）: 意味着这个对象能够被迭代，即可以一个接一个地返回其元素
- Iterator（迭代器）: 是一个遵循迭代器协议的对象，用于遍历和访问iterable对象中的元素
- 区别：
- 功能：Iterable是可以被迭代的对象，它依赖于iterator来实现元素的逐一访问。而iterator本身就是执行迭代操作的工具，负责实际的遍历过程
- 方法实现：Iterable对象需要实现__iter__()方法以返回一个iterator。Iterator对象需要实现__iter__()和__next__()方法
- 联系：
- iterable提供了一种方式来获取一个可以遍历自己的元素的iterator，而iterator则是具体实现这一过程的机制，使得我们可以遍历iterable中的元素

<p align='center'><img src='../images/iterator.png' width='50%' height='50%' /></p>

#### Generator
- 生成器是一种特殊类型的迭代器，但不需要显式地实现__iter__()和__next__()方法
- 生成器与迭代器相比在处理大型数据集时通常更内存高效，即不占内存

<p align='center'><img src='../images/generator.png' width='50%' height='50%' /></p>
