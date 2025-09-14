const http = require('http');


const server=http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/sum') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const { a, b } = JSON.parse(body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ sum: a + b }));
    });
  }
})

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// in powershell
// Invoke-RestMethod -Uri "http://localhost:3000/sum" -Method POST -Body '{"a":5,"b":7}' -ContentType "application/json"
