const http= require("http");
http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("hello");
  }
  res.statusCode = 404;
  res.end();
}).listen(3000, () => console.log("server running on port : 3000"));