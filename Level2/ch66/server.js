const WebSocket = require('ws');
const WebSockets = new WebSocket.Server({ port: 8080 });

WebSockets.on('connection', ws => {
  ws.on('message', msg => ws.send('server: ' + msg));
});

