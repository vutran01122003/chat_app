const messageBox = document.querySelector(".messages");
const send = document.querySelector("#send");
const chat = document.querySelector("#chat");

send.addEventListener("click", function (e) {
    setTimeout(function () {
        const bottom = messageBox.scrollHeight - messageBox.clientHeight; // Tính chiều cao phần tử cần cuộn tới
        messageBox.scrollTop = bottom;
    }, 100);
});
