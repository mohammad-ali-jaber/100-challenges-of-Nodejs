const { Server } = require('socket.io');
const io = new Server(3000);

io.on('connection', socket => {
  socket.on('joinRoom', room => socket.join(room));
  socket.on('messageRoom', ({ room, msg }) => {
    io.to(room).emit('msg', msg);
  });
});

