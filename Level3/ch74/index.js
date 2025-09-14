const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) cluster.fork();
  cluster.on("exit", (w) => console.log("Worker died", w.process.pid));
} else {
  http.createServer((req, res) => res.end("Hello")).listen(3000);
  console.log("Worker", process.pid);
}
