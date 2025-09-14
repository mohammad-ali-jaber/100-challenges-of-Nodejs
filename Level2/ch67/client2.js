const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.emit("joinRoom", "room1");

socket.on("msg", (msg) => {
  console.log("Client2 received:", msg);
});

setTimeout(() => {
  socket.emit("messageRoom", { room: "room1", msg: "Hi from Client2!" });
}, 2000);
