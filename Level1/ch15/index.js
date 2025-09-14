const http = require('http');
http.createServer((req, res) => {
  if (req.url === '/hello') {
    res.writeHead(200);
    res.end('Hello');
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(3000);