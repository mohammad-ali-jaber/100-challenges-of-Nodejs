const http = require('http');
const { URL } = require('url');

const server=http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === '/greet') {
    res.end(`Hello, ${url.searchParams.get('name')}`);
  }
})

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// in browser
// http://localhost:3000/greet?name=Ali

// in powershell
// Invoke-RestMethod "http://localhost:3000/greet?name=Omar"

