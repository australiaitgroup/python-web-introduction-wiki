const express = require("express");
const router = express.Router();
let user = [
    { id: 1, name: "Ben", age: 20 },
    { id: 2, name: "John", age: 30 },
    { id: 3, name: "Chris", age: 40 },
    { id: 4, name: "Jane", age: 60 },
];

router.get("/users", function (req, res, next) {
    try {
        res.status(200).json({
            status: "success",
            msg: "Retrieved userlist successfully",
            data: user,
        });
    } catch (err) {
        next(err);
    }
});

function getNextUser(users) {
    return Math.max(...users.map(user => user.id), 0) + 1;
}

router.post("/users", function (req, res, next) {
    try {
        const { name, age } = req.body;
        if (!name || !age) return res.status(400).json({ msg: "missing parameters" });
        user.push({ id: getNextUser(user), ...req.body });
        res.status(201).json({ status: "success", msg: "add user successfully", data: user });
    } catch (err) {
        next(err);
    }
});

router.delete("/users", function (req, res, next) {
    try {
        user = [];
        res.status(204).send();
    } catch (err) {
        next(err);
    }
});

router.delete("/users/:id", function (req, res, next) {
    try {
        const userIdToDelete = parseInt(req.params.id);
        const initialUserCount = user.length;
        user = user.filter(function (user) {
            return user.id !== userIdToDelete;
        });
        if (user.length === initialUserCount) return res.status(404).json({ status: "error", msg: "User not found" });
        if (userIdToDelete !== initialUserCount) for (let i = userIdToDelete - 1; i < user.length; i++) --user[i].id;
        res.status(200).json({
            status: "success",
            msg: "User deleted successfully",
        });
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
