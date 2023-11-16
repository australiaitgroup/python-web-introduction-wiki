

# Note

## Node.js_tutorial (`16/11/2023`)

### 复习
#### npm yarn pnpm
##### npm i
- dependency
- dev dependency `--save-dev`
- `npm start` `npm run dev`
- node app.js
  <br>{"start":"node app.js"}

##### 包版本2.3.4
##### http fs
- `fs.readfile(path, data)`
- `fs.writefile(path, data)`

##### 创建服务器
```js
cosnt http = require('http')

const sever = http.createSever()
sever.on(request, (req,res)=>{
  //req
  //res
})
```

##### status code
- 2**:成功
- 4**：客户端错误
- 5**：服务器错误


##### 模块化
- 复用性  灵活性
- 可读性：大问题拆成小问题
- 三方，自定义的，内置
  
##### express
###### express koa nest （is）
```js
// 1.导入express
const express = require('express')

// 2.创建一个服务器
const app = express()

app.get('/',(req,res)=>{

})

// 3.启动服务器
app.listen(8080, ()=>{
  console.log('Server is running on 8080')
})
```
###### CRUD request method
- C:create
- R:read
- U:update
- D:delete
###### Route
- `const router = express.Router()`
- `app.use(route)`
```js
app.js
const userRouter = ('/router/user.route.js')
app.use(userRouter)

user.route.js
route.get('/',(req,res)=>{

})

module.exports = router  
```
- 注意：前端后端的引用方式要分开
`前端一般用require，后端一般用import，混用容易报错`

### 练习
