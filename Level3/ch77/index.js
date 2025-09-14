const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");

function fib(n) {
 return n <= 1 ? n : fib(n-1) + fib(n-2); 
}

if (isMainThread) {
  new Worker(__filename, { workerData: 40 }).on("message", console.log);
} else {
  parentPort.postMessage(fib(workerData));
}
