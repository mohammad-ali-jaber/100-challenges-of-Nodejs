const { setTimeout } = require('timers/promises');
const ac = new AbortController(); 
setTimeout(5000, null, { signal: ac.signal }) 
.then(() => console.log('done')) 
.catch(err => console.log('aborted:', err.name)); 

setTimeout(() => ac.abort(), 1000);