

# Note

## Nodejs_tutorial2 (`23/11/2023`)

### 答疑
- why undefined?
<p align='center'><img src='../images/whyUndefined.png' width='30%' height='30%' /></p>

`原因：console.log return的值为undefined，所以return totalCost这个方法时会输出 undefined的结果`

### 复习
#### RESTFul
<p align='center'><img src='../images/6PopularAPIStyles.png' width='30%' height='30%' /></p>

##### url
<p align='center'><img src='../images/WhyIsRestfulApiPop.png' width='30%' height='30%' /></p>

##### request body
<p align='center'><img src='../images/requestBody.png' width='30%' height='30%' /></p>

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
    
