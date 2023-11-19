

# Note

## Nodejs_4 (`19/11/2023`)

### 状态码
- 主要状态码类型
<p align='center'><img src='../images/状态码.png' width='50%' height='50%' /></p>
- 一般常见代码状态
<p align='center'><img src='../images/常见代码状态.png' width='50%' height='50%' /></p>

### 托管静态资源
#### express.tatic()
- express提供的一个函数，可以方便的创建一个静态资源服务器
```js
app.use(express.static('public'))
```
- 注意：express在指定静态目录中查找文件，存放静态文件的目录名不会出现在URL中
> `http://localhost:3000/images/bg.jpg

#### 托管多个静态资源目录
```js
app.use(express.static('public'))
app.use(express.static('files'))
```

#### 挂载路径前缀
- 可在静态资源访问路径之前，挂载路径前缀
```js
app.use('/public', express.static('public'))
```


### CORS跨域资源共享
#### 接口的跨域问题
- 之前编写的GET和POST接口接口，存在不支持跨域请求的问题
- 解决方案
> 1. CORS（主流解决方案）
> 2. JSONP（有缺陷的解决方案：只支持GET请求）
#### 使用cors中间件解决跨域问题
- cors是Express的一个三方中间件
- 步骤：
> 1. 运行npm install cors 安装中间件
> 2. 使用const cors = require（'cors'）导入中间件
> 3. 在路由之前调用app.use(cors())配置中间件
#### 什么是cors
<p align='center'><img src='../images/什么是cors.png' width='50%' height='50%' /></p>
