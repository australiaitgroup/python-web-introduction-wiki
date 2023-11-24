# Note

# Nodejs_5 (`22/11/2023`)

### RESTful API
#### 概念
- RESTful是一种API设计风格，特点是请求、响应清晰简洁，可读性强
- RESTful的好处：别人使用你的API接口时，即使不查看文档，也知道下一步应该做什么
- 大多数互联网公司并没有完全按照其规则设计，但以之为参考
#### 基本原则

<p align='center'><img src='../images/REST基本原则.png' width='60%' height='60%' /></p>

#### 如何进行RESTful API设计
- 格式规范
  >根据RFC3986定义，URL是大小写敏感的，为避免歧义，尽量使用小写字母
```js
/api/featured-post/                //#GOOD
/api/featured_post/                //#WRONG
```
- 协议
  >提供给用户的API，尽量使用HTTPs协议。使用HTTPs协议和RESTfulAPI并无关系，但是对于提高网站的安全性很重要。

- URL中名词应该使用复数
  >所用名词往往和数据库的表名对应，数据库的表是一组记录的集合，因此URL中的名词表示一组资源的集合，故要使用复数<br>
  >在RESTful架构中，每个url代表一种资源，所以url中不能有动词，只能有名词
- 正确使用HTTP动词
  >GET：从服务器获取资源<br>
  >POST：在服务器新建一个资源<br>
  >PUT：在服务器更新资源（客户端提供改变后的完整资源）<br>
  >PATCH：在服务器更新资源（客户端提供改变的属性）<br>
  >DELETE：从服务器中删除资源

  <p align='center'><img src='../images/正确使用http动词.png' width='60%' height='60%' /></p>
- 合理使用查询参数
  <p align='center'><img src='../images/合理使用查询参数.png' width='60%' height='60%' /></p>
- HTTP请求方式
  >GET：获取指定资源信息，请求参数附加在URL后，一般不超过2048字符<br>
  >POST：提交数据，一般用于表单提交，可以传输大量数据<br>
  >PUT：更新服务器上指定资源，需指定更新后的URL和资源，URL不存在会创建新资源<br>
  >DELETE：删除资源，需指定需要删除的资源的URL
- get和post请求区别
  >功能不同：get是获取数据，post是传送数据<br>
  >数据量不同：get传送数据量较小，不能超过2KB。post传送量大，一般不受限制<br>
  >安全行不同：get安全性低。post安全性高

### 中间件
#### 中间件的概念
- 现实生活中的例子
  <p align='center'><img src='../images/现实生活中的例子.png' width='60%' height='60%' /></p>
- Express中间件的调用流程
  <p align='center'><img src='../images/express中间件的调用流程.png' width='60%' height='60%' /></p>
- Express中间件的格式
- next函数的作用

#### Express中间件初体验
- 定义中间件函数
- 全局生效的中间件
- 定义全局中间件的简化形式
- 中间件的作用
- 定义多个全局中间件
- 局部生效的中间件
- 定义多个局部中间件
- 了解中间件的5个使用注意事项

#### 中间件的分类
