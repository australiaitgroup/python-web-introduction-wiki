

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
<p align='center'><img src='../images/什么是cors.png' width='70%' height='70%' /></p>

#### cors注意事项
- cors主要在服务器端进行配置，客户端浏览器无须做任何额外的配置，即可请求开启了cors的接口
- cors在浏览器中有兼容性，但对浏览器有一定要求，需要支持XMLHttpRequest Level2

#### cors响应头部
##### Acess-Control-Allow-Origin
- 响应头部可以携带 Acess-Control-Allow-Origin 字段
- 其中，origin参数的值指定了允许访问该资源的外域URL
```js
Acess-Control-Allow-Origin: <origin> | *
```
- 如果指定了Acess-Control-Allow-Origin字段的值为通配符'*'，表示允许来自任何域的请求
```js
res.setHeader('Acess-Control-Allow-Origin', '*')
```
##### Acess-Control-Allow-Origin-Headers
<p align='center'><img src='../images/Acess-Control-Allow-Origin-Headers.png' width='80%' height='80%' /></p>
