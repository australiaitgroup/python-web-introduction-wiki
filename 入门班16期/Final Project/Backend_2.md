- [Class Notes](#class-notes)
  - [Resources](#resources)
  - [Backend\_2 (`16/08/2023`)](#backend_2-16082023)
    - [router模块化思想](#router模块化思想)
    - [课上代码](#课上代码)
      - [backend根目录下index.js (可以用server.js避免歧义)](#backend根目录下indexjs-可以用serverjs避免歧义)
      - [routes目录下index.js](#routes目录下indexjs)
      - [profile路由](#profile路由)
        - [profile.js](#profilejs)
        - [profileController.js](#profilecontrollerjs)
      - [message路由](#message路由)
        - [message.js](#messagejs)
        - [messsageController.js](#messsagecontrollerjs)
      - [request路由](#request路由)
        - [request.js](#requestjs)
        - [requestController.js](#requestcontrollerjs)
      - [highline路由](#highline路由)
        - [highline.js](#highlinejs)
        - [highlineController.js](#highlinecontrollerjs)
      - [cards路由](#cards路由)
        - [cards.js](#cardsjs)
        - [cardsController.js](#cardscontrollerjs)

# Class Notes

## Resources

## Backend_2 (`16/08/2023`)
<p align='center'><img src='../image/Top Social.png' width='100%' height='100%' /></p>

### router模块化思想
> 上节课[backend_class_1](./Backend_class_1.md)根据features创建了不同的role. 其中回调函数async function要提取出放到新文件夹Controllers中.

<p align='center'><img src='../image/Final Project Backend file Structure.png' width='50%' height='50%' /></p>

### 课上代码
#### backend根目录下index.js (可以用server.js避免歧义)
```js
//npm init
//npm i express cors axios json-server
//npm i nodemon -D
//npm run json:server
//npm run server (npm nodemon index.js)在package.json script里面修改

const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const { handleErrors } = require("./middleware/errorMiddleware");
const app = express();

app.use(cors()); // 解决跨域问题
app.use(express.json()); //允许解析使用json数据

//router需要挂在在数据解析(json)和跨域全局中间件(cors)后面
app.use("/api", router); // 提取公共部分, 这样每个路由不需要重复写"/api"

// use error middleware at the end (全局中间件)
app.use(handleErrors);

const PORT = 80;
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:80");
});

//app.use(express.json())// parse JSON requests
//app.use(express.urlencoded({extended:true})) //parse URL-encoded requests
//app.use(cors()) //必须在路由之前挂在，解决跨域问题
//app.use(authMiddleware);// custom authentication middleare 比如用户验证，api授权之类的
//app.use(routes) // route handlers
//app.use(handleErrors) // error handling middleware (at the end) error中间件在路由后挂载
```

#### routes目录下index.js
```js
const express = require("express");
const profileRouter = require("./profile");
const requestRouter = require("./request");
const messageRouter = require("./message");
const highlineRouter = require("./highline");
const cardsRouter = require("./cards");
const router = express.Router();

router.use("/profile", profileRouter);
router.use("/request", requestRouter);
router.use("/message", messageRouter);
router.use("/highline", highlineRouter);
router.use("/cards", cardsRouter);

module.exports = router;
```

#### profile路由
##### profile.js
```js
const express = require("express");
const axios = require("axios");
const profileRouter = express.Router();
const { getProfile } = require("../controllers/profileController")

// /api/profile  GET profile
// http://localhost/api/profile

profileRouter.get("/", getProfile)

module.exports = profileRouter;
```

##### profileController.js
```js
const axios = require("axios");

const getProfile = async function (req, res, next) {
    try {
        const url = "http://localhost:8000/profile";
        const response = await axios.get(url);
        console.log("response", response.data);
        res.status(200).json({
            msg: "Get proflle succeed",
            data: response.data,
        });
        // throw new Error("Server error");
    } catch (error) {
        console.error("error", error);
        next(error);
    }
};

module.exports = { getProfile };
```
#### message路由
##### message.js
```js
const express = require("express");
const { getMessage } = require("../controllers/messsageController")
const messageRouter = express.Router();

messageRouter.get("/", getMessage)

module.exports = messageRouter;
```

##### messsageController.js
```js
const axios = require("axios");

const getMessage = async function (req, res, next) {
    try {
        const url = "http://localhost:8000/message";
        const message = await axios.get(url);
        res.status(200).json({
            msg: "get message succeed",
            data: message.data,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { getMessage };
```

#### request路由
##### request.js
```js
const express = require("express");
const { getRequest } = require("../controllers/requestController");
const requestRouter = express.Router();

requestRouter.get("/", getRequest);

module.exports = requestRouter;
```

##### requestController.js
```js
const axios = require("axios");

const getRequest = async function (req, res, next) {
    try {
        const url = "http://localhost:8000/request";
        const request = await axios.get(url);
        res.status(200).json({
            msg: "get request succeed",
            data: request.data,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { getRequest };
```

#### highline路由
##### highline.js
```js
const express = require("express");
const { getHighline } = require("../controllers/highlineController")
const highlineRouter = express.Router();

highlineRouter.get("/", getHighline);

module.exports = highlineRouter;
```

##### highlineController.js
```js
const axios = require("axios");

const getHighline = async function (req, res, next) {
    try {
        const url = "http://localhost:8000/highline";
        const highline = await axios.get(url);
        res.status(200).json({
            msg: "get highline succeed",
            data: highline.data,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { getHighline };
```

#### cards路由
##### cards.js
```js
const express = require("express");
const { getCardById, postCard, deleteCardById } = require("../controllers/cardsController");
const cardsRouter = express.Router();

//GET card by Id: /api/cards?id=1
cardsRouter.get("/", getCardById);

//POST new card   /api/cards
cardsRouter.post("/", postCard);

//DELETE a card   /api/cards/:card_id
cardsRouter.delete("/:card_id", deleteCardById);

module.exports = cardsRouter;
```

##### cardsController.js
```js
const axios = require("axios");

const CARDS_API_URL = "http://localhost:8000/cards";

const getCardById = async function (req, res, next) {
    const { id } = req.query; //const id = req.query.id
    console.log("id", id);
    if (!id) {
        return res.status(400).send("Id is required");
    }
    try {
        const cardResponse = await axios.get(`${CARDS_API_URL}?id=${id}`);
        const card = cardResponse.data;
        console.log("cards", card);
        if (!card.length) {
            return res.status(404).json({
                msg: "Card not found",
            });
        }
        res.status(200).json({
            msg: "Get card succeed",
            data: card,
        });
    } catch (error) {
        next(error);
    }
};

const postCard = async function (req, res, next) {
    const newCard = req.body;
    console.log("newCard", newCard);
    if (Object.keys(newCard).length === 0) {
        return res.status(400).send("Card is required");
    }
    try {
        await axios.post(CARDS_API_URL, newCard, {
            headers: { "Content-Type": "application/json" },
        });

        res.status(200).json({
            msg: "Card is created",
        });
    } catch (error) {
        next(error);
    }
};

const deleteCardById = async function (req, res, next) {
    const id = req.params.card_id;
    if (!id) {
        return res.status(400).send("Id is required");
    }
    try {
        await axios.delete(`${CARDS_API_URL}/${id}`);
        res.status(200).json({
            msg: "Card is deleted",
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { getCardById, postCard, deleteCardById };
```