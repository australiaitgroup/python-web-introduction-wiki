- [Note](#Note)
  - [Backend2 (`10/12/20231`)](#Backend2-101220231)
    - [功能模块化](#功能模块化)
    - [highline](#highline)
      - [highline.js](#highlinejs)
      - [highlineController.js](#highlineControllerjs)
      - [highline写完以后记得去index.js挂载](#highline写完以后记得去indexjs挂载)
    - [request](#request)
      - [request.js](#requestjs)
      - [requestController.js](#requestControllerjs)
      - [request写完以后记得去index.js挂载](#request写完以后记得去indexjs挂载)
    - [cards](#cards)
      - [cards.js](#cardsjs)
      - [cardsController.js](#cardsControllerjs)
      - [cards写完以后记得去index.js挂载(重要的事说三遍)](cards写完以后记得去indexjs挂载重要的事说三遍)
    - [创建一个错误中间件](#创建一个错误中间件)
      - [创建errorMiddleware.js](#创建errorMiddlewarejs)
      - [middleware写完以后记得去index.js挂载](#middleware写完以后记得去indexjs挂载)
      - [作用和使用方法](#作用和使用方法)


# Note 

## Backend2 (`10/12/20231`)

### 功能模块化
- 所有需要调用的call back function统一放在controller文件夹内

### highline
#### highline.js
```js
const express = require('express');
const {getHighline} = require('../controllers/highlineController');
const highlineRouter = express.Router();

module.exports = highlineRouter;
highlineRouter.get('/', getHighline)

module.exports = highlineRouter;
```
#### highlineController.js
```js
const axios = require('axios');

const getHighline = async function(req, res, next){
    try{
        const url = 'http://localhost:8000/highline';
        const response = await axios.get(url);
        res.status(200).json({
            msg:'get highline succeed',
            data:{
                highline:response.data
            }
        })
    } catch(error){
        next(error)
    }
}

module.exports = {getHighline}
```
#### highline写完以后记得去index.js挂载
```js
const highlineRouter = require('./highline');
router.use('/highline', highlineRouter);
```

### request
#### request.js
```js
const express = require('express');
const requestRouter = express.Router();
const {getRequest} = require('../controllers/requestController');

requestRouter.get('/', getRequest);
module.exports = requestRouter;
```

#### requestController.js
```js
const axios = require('axios');

const getRequest = async function(req, res, next){
    try{
        const url = 'http://localhost:8000/request';
        const response = await axios.get(url)
        res.status(200).json({
            msg:'get request succeed',
            data:response.data
        })
    } catch(error) {
        next(error)
    }
}

module.exports = {getRequest}
```

#### request写完以后记得去index.js挂载
```js
const requestRouter = require('./request');
router.use('/request', requestRouter);
```

### cards
#### cards.js
```js
const express = require('express');
const { getCardById, postCard, deleteCardById } = require('../controllers/cardsController');

const cardsRouter = express.Router();

//GET /api/cards?id=1 get card by id
cardsRouter.get('/', getCardById);
//POST /api/cards post a card
cardsRouter.post('/', postCard);
//DELETE /api/cards/:card_id delete a card
cardsRouter.delete('/:card_id', deleteCardById);
module.exports = cardsRouter;
```

#### cardsController.js
```js
const axios = require('axios');
const { response } = require('express');

const CARDS_API_URL = 'http://localhost:8000/cards';

const getCardById = async function(req, res, next){
    const {id} = req.query;
    console.log('id', id);
    if(!id){
        return res.status(400).send('Id is required')
    }
    try{
        const response = await axios.get(`${CARDS_API_URL}?id=${id}`);
        const card = response.data;
        if(!card.length){
            return res.status(404).json({
                msg:'Card not found'
            })
        }
        res.status(200).json({
            msg:'Get card succeed',
            data:card
        })
    } catch(error){
        next(error)
    }
}

const postCard = async function(req, res, next){
    const newCard = req.body;//{}
    if(Object.keys(newCard).length === 0){
        return res.status(400).send('Card is required')
    }
    try {
        await axios.post(CARDS_API_URL, newCard, {
            headers:{"Content-Type":"application/json"}
        });
        res.status(200).json({
            msg:'Card is created'
        })
    } catch(error) {
        next(error)
    }
}

const deleteCardById = async function(req, res, next){
    const id = req.params.card_id;
    if(!id){
        return res.status(400).send('Id is required')
    }
    try{
        await axios.delete(`${CARDS_API_URL}/${id}`);
        res.status(200).json({
            msg:'Card is deleted'
        })
    } catch(error) {
        next(error)
    }
}

module.exports = {getCardById , postCard, deleteCardById}
```

#### cards写完以后记得去index.js挂载(重要的事说三遍)
```js
const cardsRouter = require('./cards');
router.use('/cards', cardsRouter);
```

### 创建一个错误中间件
#### 创建errorMiddleware.js
```js
const handleError = function(err,req,res,next){
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({error:message})
}

module.exports = {handleError}
```
#### middleware写完以后记得去index.js挂载
```js
//注意此时的index.js是全局的，即存在于backend文件夹中的
const {handleError} = require('./middleware/errorMiddleware')
//注意此时error挂载的位置应在app.use('/api',router)之后
//use error middleware at the end
app.use(handleError);
```

#### 作用和使用方法
- 减少代码量
- 需要把每个controller里的错误判断中增加一个next函数
```js
const getHighline = async function(req, res, next){
    ...
    } catch(error){
        next(error)
    }
}
```
