- [Note](#Note)
  - [Nodejs_tutorial2 (`23/11/2023`)](#Nodejs_tutorial2-23112023)
    - [答疑](#答疑)
    - [复习](#复习)
      - [RESTFul](#RESTFul)
      - [url](#url)
      - [request body](#request-body)
      - [status code](#status-code)
      - [前端请求数据](#前端请求数据)
        - [axios](#axios)
        - [ajax](#ajax)
        - [fetch](#fetch)
      - [中间件](#中间件)
        - [express线性中间件](#express线性中间件)
        - [两种中间件](#两种中间件)
        - [cors](#cors)
    - [练习](#练习)
      - [上节课的bug](#上节课的bug)
      - [更新留言功能](#更新留言功能)
      - [获取和增加留言功能](#获取和增加留言功能)
<hr>

<p align='center'><img src='../images/Nodejs.png' width='30%' height='30%' /></p>

<hr>     

  
# Note

## Nodejs_tutorial2 (`23/11/2023`)

### 答疑
- why undefined?
<p align='center'><img src='../images/whyUndefined.png' width='80%' height='80%' /></p>

`原因：console.log return的值为undefined，所以return totalCost这个方法时会输出 undefined的结果`

<hr>
<br>

### 复习
#### RESTFul
<p align='center'><img src='../images/6PopularAPIStyles.png' width='80%' height='80%' /></p>

<hr>

##### url
<p align='center'><img src='../images/WhyIsRestfulApiPop.png' width='80%' height='80%' /></p>

<hr>

##### request body
<p align='center'><img src='../images/requestBody.png' width='80%' height='80%' /></p>

<hr>

##### status code
<p align='center'><img src='../images/statusCode.png' width='80%' height='80%' /></p>

<hr>

#### 前端请求数据
##### axios
```js
const response1 = await axios.put(url,{}) //variable
const response2 = await axios.put(url,{
response1.bookingId})
```

<hr>

##### ajax

<hr>

##### fetch
```js
const promise = fetch(url,{
  method:'PUT',
  headers:{
    'Authorization':token
  }
  body:{
    ....
  }
}) /// 'pedning' -> 'reject'/'success'
promise.then((response)=>{
  console.log(response)
  response.bookingId
  const promise2 = fetch(url,{
    method:'PUT',
    headers:{
      'Authorization': token
    }
    body:{
      ....
    }
  })
  promise.then((response)=>{
      response.emailList
  })
})

//userId -> bookingId -> emailList
request1:userId->bookingId
request2:bookingId->emailList
```

<hr>

#### 中间件
##### express线性中间件
- next函数
```js
class MyExpress {
  private index: number
  public middleWares: ExpressMiddleWare[]
  public req: any
  public res: any
  constructor() {
    this.index = 0
    this.middleWares = []
    this.req = {}
    this.res = {}
  }
  public use(middleWare: ExpressMiddleWare) {
    this.middleWares.push(middleWare)
    return this
  }

  public next() {
    if (this.index < this.middleWares.length) {
      this.middleWares[this.index++](this.req, this.res, this.next.bind(this))
    }
  }

  public async start() {
    this.next()
  }
}
```
- 使用同步函数处理异步请求
<p align='center'><img src='../images/使用同步函数处理异步请求1.png' width='80%' height='80%' /></p>

`每个中间件内部都调用了next()函数，即在当前中间件完成执行之前就将控制权传递给了下一个中间件`

<p align='center'><img src='../images/使用同步函数处理异步请求2.png' width='80%' height='80%' /></p>

`在这个处理程序内部，有一个setTimeout函数，它通过延迟1000毫秒来推迟其回调函数的执行`<br>
`Middleware1 end出现在index router日志之前。表明事件循环在处理路由处理程序的延迟执行之前执行`

<hr>

##### 两种中间件
- 用在单独的request中
```js
.get(url,cors(),(req,res))
.get(url,[middleware1, middleware2],(req,res))
.get(url, middleware1, middleware2,(req,res))
```
- 全局使用apply到所有的request中
```js
app.use(cors())
app.use(middleware)
```
##### cors
- `Access-Control-Allow-Origin:*`

<hr>
<br>

### 练习
#### 上节课的bug
```js
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
```

<hr>

#### 更新留言功能
```js
//Put: 更新留言
router.put('/:id',async function(req, res) {
  const {id} = req.params; 
  const index = messages.findIndex((message)=>{
    return message.id === parseInt(id)
  });
  if(index === -1){
    res.sendStatus(404)
  }
  messages.splice(index,1);
  const {name, message} = req.body;
  const newMessage = {
    id: parseInt(id),
    name,
    message
  }
  messages.push(newMessage)
  const data = JSON.stringify({
    messages
  });

  await fs.writeFileSync('../messages.json', data)
  res.status(201).send({
    message:'update success',
    data: newMessage
  })
});
```

<hr>

#### 留言板前端界面
```html
<!DOCTYPE html>
<html>
    <head>
        <title>留言板</title>
        <script src="https://unpkg.com/axios/dist/axios.min.js" defer></script>
    </head>
    <body>
        <h1>留言板</h1>
        <form id="message-form">
            <input type="text" id="name" placeholder="姓名"/>
            <textarea id="message-input" placeholder="留言"/></textarea>
            <button type="submit">提交</button>
        </form>
        <ul id="message-list">

        </ul>
        <script src="script.js"></script>
    </body>
</html>
```

<hr>

#### 获取和增加留言功能
```js
const api = 'http://localhost:8080';

//获取留言
const getMessages = ()=>{
    const promise = fetch(`${api}/messages`,{
        method: "GET"
    })

    promise.then(response=>response.json()).then(messages=>{
        const messageList = document.getElementById('message-list');
        messages.data.forEach(message=>{
            const messageLi = document.createElement('li');
            messageLi.innerHTML = `
            <strong>${message.name}:</strong> ${message.message}
            <button class='update-button' data-id=${message.id}>更新</button>
            <button class='delete-button' data-id=${message.id}>删除</button>
            `
            messageList.appendChild(messageLi);
        })
    })
}

//增加留言
const handleCreateMessage = async (event)=>{
    event.preventDefault();
    const nameInput = document.getElementById("name-input")
    const messageInput = document.getElementById("message-input")

    if(!nameInput.value||!messageInput.value) return;
    const newMessage = {
        name: nameInput.value,
        message: messageInput.value
    }

    const response = await axios.post(`${api}/messages`,newMessage)

    if(response.status === 201){   
        nameInput.value = '';
        messageInput.value = '';
        alert('Create message success');
        getMessages();
    }

}
//getMessages();
const form = document.getElementById("message-form");
//form.onsubmit
form.addEventListener("submit", handleCreateMessage)
getMessages();
```
    
