const express = require('express')
const router=express.Router()
const fs = require('fs')
const messages = require('./messages.json').messages//const {messages}=require('./messages.json')

const writeMessagesFile = async(newMessages)=>{
    const data = JSON.stringify({
        messages:newMessages
    })
    await fs.writeFileSync("messages.json",data);
}
//CRUD

//Get:获取所有的留言 R：READ
router.get('/messages',(req,res)=>{
    res.status(200).json(messages)
})


//POST:添加留言 C: CREATE
router.post('/messages',async(req,res)=>{
    const newMessageId = messages.length;
    const {name, message} = req.body;

    //es6解构
    //const {name, message} = req.body;
    //const a=[1,2,3]
    //const [item1,,item3]=a

    const newMessage = {
        id: newMessageId,
        name,
        message
    }

    //messages.push(newMessage);//A
    const newMessages = [...messages, newMessage]

    await writeMessagesFile(newMessages)

    res.status(201).send({
        message:'Create success',
        data:newMessages
    })
})

//DELETE: 删除留言 D:DELETE
router.delete('/messages/:id',async(req,res)=>{
    const {id} = req.params
    const index = messages.findIndex(message=>message.id===parseInt(id));
    if(index === -1) res.sendStatus(404)
    messages.splice(index,1);//从'参数1'(index)开始删除'参数2'(1)个
    const newMessages = messages;
    await writeMessagesFile(newMessages);
    res.status(200).send({
        messages:'delete messages',
        data:newMessages
    })

})

//PUT: 更新留言 U：UPDATE
router.put("/messages/:id", async(req, res) => {
    const {id} = req.params
    const index = messages.findIndex(message=>message.id===parseInt(id));
    if(index === -1) res.sendStatus(404);
    messages.splice(index,1);
    const {name, message} = req.body;
    const newMessages = [...messages,{id:parseInt(id),name:name, message:message}]
    await writeMessagesFile(newMessages);
    res.status(201).send({   
        messages:'update messages',
        data:newMessages
    })
});
module.exports = router