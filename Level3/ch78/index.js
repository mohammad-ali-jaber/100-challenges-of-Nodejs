const { Worker, MessageChannel } = require('worker_threads');

const { port1, port2 } = new MessageChannel();

const worker = new Worker(`
  const { parentPort } = require('worker_threads');
  parentPort.on('message', msg => parentPort.postMessage('Worker got: ' + msg));
`, { eval: true });

port1.on('message', msg => console.log(msg)); 

port2.postMessage('Hello from main'); 
worker.postMessage('Hello worker');   
