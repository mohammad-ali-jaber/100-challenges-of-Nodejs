 const http = require('http');
 http.createServer((req, res) => {
   res.writeHead(200, { 'Content-Type': 'application/json' });
   res.end(JSON.stringify({ status: 'ok' }));
 }).listen(3000);