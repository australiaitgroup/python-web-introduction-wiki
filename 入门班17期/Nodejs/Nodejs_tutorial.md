- [Note](#Note)
  - [Nodejs_tutorial (`16/11/2023`)](#Nodejs_tutorial-16112023)
    - [复习](#复习)
      - [npm yarn pnpm](#npm-yarn-pnpm)
        - [npm i](#npm-i)
        - [包版本2.3.4](#包版本234)
        - [http fs](#http-fs)
        - [创建服务器](#创建服务器)
        - [status code](#status-code)
        - [模块化](#模块化)
        - [express](#express)
          - [express koa nest （is）](#express-koa-nest-is)
          - [CRUD request method](#CRUD-request-method)
          - [Route](#Route)
    - [练习](#练习)

<hr>

<p align='center'><img src='../images/Nodejs.png' width='30%' height='30%' /></p>

<hr>
  

# Note



## Nodejs_tutorial (`16/11/2023`)



### 复习
#### npm yarn pnpm
##### npm i
- dependency
- dev dependency `--save-dev`
- `npm start` `npm run dev`
- node app.js
  <br>{"start":"node app.js"}

<hr>

##### 包版本2.3.4
> 2: major changes<br>
> 3. minor changes<br>
> 4. patch changes<br>

<hr>

##### http fs
- `fs.readfile(path, data)`
- `fs.writefile(path, data)`

<hr>

##### 创建服务器
```js
cosnt http = require('http')

const sever = http.createSever()
sever.on(request, (req,res)=>{
  //req
  //res
})
```

<hr>

##### status code
- 2**:成功
- 4**：客户端错误
- 5**：服务器错误

<hr>

##### 模块化
- 复用性  灵活性
- 可读性：大问题拆成小问题
- 三方，自定义的，内置

<hr>

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

<hr>

###### CRUD request method
- C:create
- R:read
- U:update
- D:delete

<hr>

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

<hr>
<br>

### 练习
- 注意时常在postman测试get和post能否拿到对应的信息
- 个人测试时出现过一直拿不到messages.json里的内容，但是调换一下app.use的前后顺序可以解决（仅供参考）
- 老师课堂代码：messages.js:
```js
var express = require('express');
var router = express.Router();
const fs = require('fs')
const { messages } = require('../messages.json')
//const messages = require('../messages.json').messages

/* GET: 获取所有留言. */
router.get('/', function(req, res) {
  res.send({
    status:200,
    data:messages
  })
});

/* POST: 添加留言*/
router.post('/',async function(req, res) {
  const {name, message} = req.body; // Get body post/put
  const id = messages.length;
  const newMessage = {
    id,
    name,
    message
  }
  messages.push(newMessage)
  /*
  课堂上的bug:这里应该是
  {
    messages
  } 而不是 messages
  格式一样才可以逻辑走通覆盖再正确读取我们的messages array
  */
  const data = JSON.stringify({
    messages
  });
  
  await fs.writeFileSync('../messages.json',data)
  res.send({
    status:201,
    data:messages
  })
});

/* DELETE:  删除留言*/
router.delete('/:id', function(req, res) {
  const {id} = req.params;

  /*
  课堂上的bug:这里应该用findIndex 返回目标item的index
  find返回的是目标的值，所以我们课堂上一直删除错误的item
  */
  const index = messages.findIndex((message)=>{
    return message.id === parseInt(id)
  })

  if(index === -1){
    res.sendStatus(404)
  }
  messages.splice(index,1);
  const data = JSON.stringify({messages});
  fs.writeFileSync('../messages.json',data)
  res.send({
    status:200,
    data:messages,
    message:'delete success'
  })
});


module.exports = router;
```
- app.js
```js
//app.js
var express = require('express');
const cors = require('cors')
var messagesRouter = require('./routes/messages');

var app = express();

app.use(express.json());
//设置cors请求头：允许跨域请求
app.use(cors())

// app.use('/', (req,res)=>{
//   res.send('Hello world');
// });
app.use('/messages', messagesRouter);

app.listen(8080,()=>{
  console.log('Server is running on 8080')
})
```

