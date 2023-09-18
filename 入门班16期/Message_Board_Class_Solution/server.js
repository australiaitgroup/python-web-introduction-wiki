//1.导入express
const express = require("express");
const cors = require('cors')
//2.创建一个web服务器
const app = express()
const messageRouter = require('./router')


//解析请求体中的json数据
app.use(express.json())

//设置cors请求头
//允许跨域请求
app.use(cors())



//4.处理一个简单的request
app.get('/',(req,res)=>{
	res.send("hello world");
})

app.use(messageRouter);
//3.启动服务器
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});