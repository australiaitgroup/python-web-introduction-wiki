- [Note](#Note)
  - [Backend1 (`03/12/2023`)](#Backend1-03122023)
    - [设置Github Desktop](#设置Github-Desktop)
    - [TopSocial](#TopSocial)
      - [npm初始化](#npm初始化)
      - [Github创建repository](#Github创建repository)
      - [实用小插件](#实用小插件)
      - [修改index.js并初始化服务器](#修改indexjs并初始化服务器)
      - [修改package.json](#修改packagejson)
      - [创建routes文件夹及各个路由模块](#创建routes文件夹及各个路由模块)
        - [cards.js]
        - [highline.js]
        - [index.js](#indexjs)
        - [message.js]
        - [profile.js](#profilejs)
      - [创建controllers文件夹](#创建controllers文件夹)
        - [messageController.js](#messageControllerjs)
        - [profileController.js](#profileControllerjs)
       
<hr>  

<p align='center'><img src='../images/TopSocial.png' width='80%' height='80%' /></p>

<hr>  




# Note

## Backend1 (`03/12/2023`)

### 设置Github Desktop

<hr> 
<br>

### TopSocial
`创建backend文件夹和index.js`

#### npm初始化
- 注意cd到backend文件夹
```shell
npm init
npm i express cors axios json-server
npm i nodemon concurrently -D
npm i express cors json-server axios
```
- 创建 .gitigonre文件(避免source control里数据过多)
```shell
node_modules/
```

<hr> 

#### Github创建repository
- 名字、描述
- Public
- 本地commit
```bash
git commit -m 'version name'
```
- 链接远程repo到本地
```bash
git remote add origin http://.....your specific url
```
- 检查连接情况
```bash
git remote -v
```
- push本地代码到远程
```bash
git push
```
```bash
//但是如果是第一push，会有如下代码提示，复制粘贴并运行即可
git push --set-upstream origin master
```

<hr> 

#### 实用小插件
- Git History
- Git History Diff(能查看具体代码是由谁在什么时候修改的)

<hr> 

#### 修改index.js并初始化服务器
- index.js(在backend文件夹下)
```js
const express = require('express');
const cors = require('cors');
const router = require('./routes');
//create web server
const app = express();

app.use(cors());

app.use('/api',router);

const PORT = 80;
app.listen(PORT, function(){
    console.log('Server is running on http://localhost:80')
})
```
- 初始化服务器
```bash
npx nodemon index.js
```

<hr> 

#### 修改package.json
- 使用npm run dev能同时启动两个server
```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "json:server":"json-server --port 8000 --watch db.json",
    "server":"nodemon index.js",
    "dev":"concurrently \"npm run server\" \"npm run json:server\""
},
```

<hr> 

#### 创建routes文件夹及各个路由模块
##### cards.js
##### highline.js
##### index.js
```js
const express = require('express');
const profileRouter = require('./profile');
const messageRouter = require('./message');

//create router
const router = express.Router();

router.use('/profile', profileRouter);
router.use('/message', messageRouter);

module.exports = router;
```
##### message.js
##### profile.js
```js
const express = require('express');
const profileRouter = express.Router();
const axios = require('axios');
const { getProfile } = require('../controllers/profileController');

profileRouter.get('/', getProfile);
module.exports = profileRouter;
```
##### request.js

<hr> 

#### 创建controllers文件夹
##### messageController.js
```js
const axios = require('axios');

const getMessage = async function(req,res){
    try {
        const url = 'http://localhost:8000/message';
        const message = await axios.get(url);
        res.status(200).json({
            msg:'Get message succeed',
            data:{
                message:message.data
            }
        })
    } catch(error) {
        console.error('error', error)
    }
}

module.exports = {getMessage}
```

<hr> 

##### profileController.js
```js
const axios = require('axios');

const getProfile = async function(req,res){
    try {
        const url = 'http://localhost:8000/profile';
        const response = await axios.get(url);
        console.log('response', response);
        res.status(200).json({
            msg:'Get profile succeed',
            data:response.data
        })
    } catch(error) {
        console.error('error', error);
    }
}

module.exports = {getProfile}
```

