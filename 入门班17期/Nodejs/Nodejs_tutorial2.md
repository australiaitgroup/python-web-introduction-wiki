

# Note

## Nodejs_tutorial2 (`23/11/2023`)

### 答疑

### 复习
#### RESTFul
##### url
##### request body
##### status code

#### 前端请求数据
##### axios
##### ajax
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

#### 中间件
##### express:线性中间件
- next函数
- 使用同步函数处理异步请求

##### 两种中间件
##### cors
    
