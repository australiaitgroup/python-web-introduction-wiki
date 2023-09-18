const express = require("express"),
    app = express(),
    parser = require("body-parser"),
    cors = require("cors"),
    router = require("./router"),
    PORT = 8080;

app.use(cors());
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use("/api", router);
app.listen(PORT, () => console.log(`The server is now running on port ${PORT}.`));
