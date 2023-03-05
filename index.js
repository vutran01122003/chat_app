const express = require("express");
const path = require("path");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const webRoute = require("./src/routes/web");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.static(path.join(__dirname, "src", "public")));
io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("on-chat", (data) => {
        io.emit("user-chat", data);
    });
});

app.use("/", webRoute);

http.listen(3333, function () {
    console.log("ok");
});
