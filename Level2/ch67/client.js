const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.emit("joinRoom", "room1");

socket.on("msg", (msg) => {
  console.log("Received:", msg);
});

setTimeout(() => {
  socket.emit("messageRoom", { room: "room1", msg: "Hello room1!" });
}, 1000);
