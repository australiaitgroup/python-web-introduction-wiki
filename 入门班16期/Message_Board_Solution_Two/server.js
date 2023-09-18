const express = require("express"),
    cors = require("cors"),
    fs = require("fs"),
    app = express(),
    { messages } = require("./messages.json");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function writeMessagesFile() {
    try {
        await fs.promises.writeFile("./messages.json", JSON.stringify({ messages }, null, 4));
        console.log("File written successfully.");
    } catch (err) {
        console.error("Error writing file:", err);
    }
}

function getMessageById(messageId) {
    return messages.find(msg => msg.id === messageId);
}

function handleErrorMessage(res, messageId) {
    res.status(404).json({ msg: `id ${messageId} does not exist` });
}

function handleParameters(req, res) {
    if (Object.keys(req.body).length !== 2) {
        res.status(400).json({ msg: "Invalid request body. Only 'name' and 'message' properties are allowed." });
        return false;
    } else if (!req.body.name || !req.body.message) {
        res.status(400).json({ msg: "name or message is empty" });
        return false;
    } else return true;
}

//GET:获取所有留言
app.get("/messages", (req, res) => {
    console.log("current message array", messages);
    res.status(200).json(messages);
});

//GET:获得单一留言
app.get("/messages/:id", (req, res) => {
    const messageId = parseInt(req.params.id);
    const message = getMessageById(messageId);
    message ? res.status(200).json(message) : handleErrorMessage(res, messageId);
});

function getMaxId() {
    return Math.max(...messages.map(msg => msg.id), 0) + 1;
}

//POST: 添加留言
app.post("/messages", async (req, res) => {
    if (!handleParameters(req, res)) return;
    const newMessage = {
        id: getMaxId(),
        name: req.body.name,
        message: req.body.message,
    };
    messages.push(newMessage);
    console.log("newMessage", newMessage);
    await writeMessagesFile();
    res.status(201).json({ msg: "create successfully", newData: newMessage });
});

//DELETE:删除留言
app.delete("/messages/:id", (req, res) => {
    const messageId = parseInt(req.params.id);
    const messageIndex = messages.findIndex(msg => msg.id === messageId);
    if (messageIndex !== -1) {
        if (messageIndex !== messages.length - 1) for (let i = messageIndex + 1; i < messages.length; i++) --messages[i].id;
        const deletedMessage = messages.splice(messageIndex, 1)[0];
        console.log("deletedMessage", deletedMessage);
        res.status(201).json({ msg: "delete successfully", deleteData: deletedMessage });
        writeMessagesFile();
    } else handleErrorMessage(res, messageId);
});

//Update:更新留言
app.put("/messages/:id", async (req, res) => {
    if (!handleParameters(req, res)) return;
    const messageId = parseInt(req.params.id);
    const messageToUpdate = getMessageById(messageId);
    if (messageToUpdate) {
        Object.assign(messageToUpdate, req.body);
        console.log("updateMessage", messageToUpdate);
        res.status(201).json({ msg: "update successfully", updateData: messageToUpdate });
        await writeMessagesFile();
    } else handleErrorMessage(res, messageId);
});

app.listen(8080, () => console.log("server is sunning on port 8080"));
