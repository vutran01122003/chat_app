var socket = io();
const name = prompt("What's your name ?");
const chatBox = document.querySelector("#chat-box");
const chatMes = document.querySelector("#chat");

chatBox.addEventListener("submit", function (e) {
    e.preventDefault();
    const chatValue = chatMes.value;
    socket.emit("on-chat", {
        name,
        message: chatValue
    });
    chatMes.value = "";
});

const messageList = document.querySelector(".messages");
socket.on("user-chat", (message) => {
    const chatItem = document.createElement("li");
    chatItem.textContent = `${message.name}: ${message.message}`;
    messageList.appendChild(chatItem);
});
