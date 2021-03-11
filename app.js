const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname +"/index.html");
});

app.get("/signup", (req, res) => {
    res.send("signup page");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});