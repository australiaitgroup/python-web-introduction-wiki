- [Class Notes](#class-notes)
  - [Resources](#resources)
  - [Backend\_1 (`13/08/2023`)](#backend_1-13082023)
    - [上节课User\_List补全deleteList()和postUser()](#上节课user_list补全deletelist和postuser)
      - [deleteList()](#deletelist)
      - [postUser()](#postuser)
    - [Top Social](#top-social)
      - [npm初始化](#npm初始化)
      - [修改package.json](#修改packagejson)
      - [server.js](#serverjs)
      - [中间件顺序](#中间件顺序)
      - [创建routes文件夹实现模块化](#创建routes文件夹实现模块化)
        - [index.js](#indexjs)
        - [profile.js](#profilejs)
      - [errorHandler middleware](#errorhandler-middleware)

# Class Notes

## Resources
[backend code](https://github.com/AllyTang/TopSocial)

## Backend_1 (`13/08/2023`)
<p align='center'><img src='../image/Top Social.png' width='100%' height='100%' /></p>

### 上节课User_List补全deleteList()和postUser()

#### deleteList()
```js
function deleteList() {
    const url = "http://localhost:8080/api/users";
    axios
        .delete(url)
        .then(function (res) {
            console.log("user list cleared in backend");
            getList();
        })
        .catch(function (err) {
            console.error("Error clearing user list:", err);
        });
}
```

#### postUser()
```js
// 通过定义appendUsers(users)可以简化getUserList()和postUser()
function appendUsers(users) {
    users.forEach(function (user) {
        const li = document.createElement("li");
        li.innerHTML = user.name + " " + user.age;
        li.setAttribute("data-id", user.id);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            deleteUserById(user.id);
        });
        li.appendChild(deleteButton);
        document.getElementById("user_list").appendChild(li);
    });
}

function postUser() {
    const url = "http://localhost:8080/api/users";
    const nameInput = document.getElementById("username");
    const nameValue = nameInput.value;
    const ageInput = document.getElementById("age");
    const ageValue = ageInput.value;
    console.log("value", nameValue, ageValue);
    if (!nameValue || !ageValue) return;
    const body = {
        name: nameValue,
        age: ageValue,
    };
    axios
        .post(url, body)
        .then(function (res) {
            const updatedUsers = res.data.data;
            console.log("updatedUsers", updatedUsers);
            clear_list();
            appendUsers(updatedUsers);
            nameValue='';
            ageValue='';
        })
        .catch(function (err) {
            console.error("error adding user:", err);
        });
}
```

### Top Social
`创建backend文件夹和index.js`
#### npm初始化
```shell
npm init
npm i express cors axios json-server
npm i nodemon concurrently -D
```

#### 修改package.json
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "json:server": "json-server --port 8000 --watch db.json",
    "server": "npx nodemon server.js",
    "dev": "concurrently \"npm run server\" \"npm run json:server\""
},
```

`使用npm run dev能同时启动两个server`

#### server.js
```js
const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const { handleErrors } = require("./middleware/errorMiddleware");
//create web server
const app = express();

app.use(cors());

app.use(express.json());

app.use(router);
// use error middleware at the end
app.use(handleErrors);
const PORT = 80;
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:80");
});

// app.use(express.json())// parse JSON requests
//app.use(express.urlencoded({extended:true}))//parse URL-encoded requests
//app.use(cors())
//app.use(authMiddleware);// custom authentication middleware
//app.use(routes)// route handlers
//app.use(handleErrors)// error handling middleware (at the end)
```

#### 中间件顺序
<p align='center'><img src='../image/middleware sequence.png' width='80%' height='80%' /></p>

#### 创建routes文件夹实现模块化
##### index.js
```js
const express = require("express");
const axios = require("axios");
const profileRouter = require("./profile");

//create router
const router = express.Router();

router.use(profileRouter);

module.exports = router;
```

##### profile.js
```js
const express = require("express");
const axios = require("axios");
const profileRouter = express.Router();

// /api/profile  GET profile
// http://localhost/api/profile

profileRouter.get("/api/profile", async function (req, res, next) {
  try {
    const url = "http://localhost:8000/profile";
    const response = await axios.get(url);
    console.log("response", response.data);
    res.status(200).json({
      msg: "Get profile succeed",
      data: response.data,
    });
    // throw new Error("Server error");
  } catch (error) {
    console.error("error", error);
    next(error);
  }
});

module.exports = profileRouter;
```

#### errorHandler middleware
```js
const handleErrors = function (err, req, res, next) {
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({ error: message });
};

module.exports = { handleErrors };
```
