const express = require("express"),
    router = express.Router(),
    user = [
        { id: 1, name: "Ben", age: 20 },
        { id: 2, name: "John", age: 30 },
        { id: 3, name: "Chris", age: 40 },
        { id: 4, name: "Jane", age: 60 },
    ];

router.get("/users", (req, res, next) => {
    try {
        res.status(200).json({ msg: "get user successfully", user: user });
        console.log("userList", user);
    } catch (err) {
        next(err);
    }
});

router.post("/user", (req, res, next) => {
    try {
        if (!req.body.name || !req.body.age) res.status(400).json("missing parameters");
        user.push({ id: user.length + 1, ...req.body });
        res.status(201).json({
            msg: "add user successfully",
            user: req.body,
        });
    } catch (err) {
        next(err);
    }
});

router.delete("/clearsingle", (req, res, next) => {
    try {
        const messageIndex = user.findIndex(user => user.id === parseInt(req.query.id));
        if (messageIndex !== -1) {
            if (messageIndex !== user.length - 1) for (let i = messageIndex + 1; i < user.length; i++) --user[i].id;
            const deletedMessage = user.splice(messageIndex, 1)[0];
            console.log("deletedMessage", deletedMessage);
            res.status(201).json({ msg: "delete successfully", deleteData: deletedMessage });
        } else res.status(404).json({ msg: "cannot delete" });
    } catch (err) {
        next(err);
    }
});

router.delete("/clear", (req, res, next) => {
    try {
        user.length = 0;
        res.status(200).json({ status: "success", msg: "User list has been cleared" });
    } catch (err) {
        next(err);
    }
});

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: "error",
        msg: "Internal server error",
    });
});

module.exports = router;
