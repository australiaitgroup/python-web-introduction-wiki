//1.导入express, cors, route.js的express.Router()对象
const express = require("express");
const cors = require("cors");
const messageRouter = require("./router");
//2.创建一个web服务器
const app = express();
//设置cors请求头 - 允许跨域请求
app.use(cors());
//允许postman在body使用json和x-www-form-urlencoded格式
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//4.处理一个简单的request
app.get("/test", (req, res) => res.send("hello world"));
app.use(messageRouter);
//3.启动服务器
app.listen(8080, () => console.log("Server is running on port 8080"));
