const express = require("express"),
    router = express.Router(),
    fs = require("fs"),
    messages = require("./messages.json").messages;

function writeMessagesFile() {
    fs.writeFileSync("./messages.json", JSON.stringify({ messages }, null, 4));
}

function getMessageById(messageId) {
    return messages.find(msg => msg.id === messageId);
}

function handleErrorMessage(res, messageId) {
    res.status(404).json({ msg: `id ${messageId} does not exist` });
}

//Get:获取所有的留言 R:READ
router.get("/", (req, res) => res.status(200).json(messages));

// 获取单条留言
router.get("/:id", (req, res) => {
    const messageId = parseInt(req.params.id);
    const message = getMessageById(messageId);
    message ? res.status(200).json(message) : handleErrorMessage(res, messageId);
});

//POST:添加留言 C:CREATE
router.post("/", (req, res) => {
    const newMessage = {
        id: messages.length,
        name: req.body.name,
        message: req.body.message,
    };
    messages.push(newMessage);
    writeMessagesFile();
    res.status(201).json({ msg: "create successfully", newData: newMessage });
});

//PUT: 更新留言 U:UPDATE
router.put("/:id", (req, res) => {
    const messageId = parseInt(req.params.id);
    const messageToUpdate = getMessageById(messageId);
    if (messageToUpdate) {
        Object.assign(messageToUpdate, req.body);
        writeMessagesFile();
        res.status(201).json({ msg: "update successfully", updateData: messageToUpdate });
    } else handleErrorMessage(res, messageId);
});

//DELETE: 删除留言 D:DELETE
router.delete("/:id", (req, res) => {
    const messageId = parseInt(req.params.id);
    const messageIndex = messages.findIndex(msg => msg.id === messageId);
    if (messageIndex !== -1) {
        const deletedMessage = messages.splice(messageIndex, 1)[0];
        writeMessagesFile();
        res.status(201).json({ msg: "delete successfully", deleteData: deletedMessage });
    } else handleErrorMessage(res, messageId);
});

module.exports = router;
