var socket = io();
const name = prompt("What's your name ?");
const chatBox = document.querySelector("#chat-box");
const chatMes = document.querySelector("#chat");

chatBox.addEventListener("submit", function (e) {
    e.preventDefault();
    const chatValue = chatMes.value;
    if (chatValue !== "") {
        socket.emit("on-chat", {
            name,
            message: chatValue
        });
        chatMes.value = "";
    } else {
        chatMes.focus();
    }
});

const messageList = document.querySelector(".messages");
socket.on("user-chat", (message) => {
    const chatItem = document.createElement("li");
    const spanName = document.createElement("span");
    spanName.textContent = `${message.name}:`;
    chatItem.textContent = `${message.message}`;
    messageList.appendChild(spanName);
    messageList.appendChild(chatItem);
});
