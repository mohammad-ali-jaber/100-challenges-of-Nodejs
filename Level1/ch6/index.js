const fs = require('fs');
fs.readFile('file.txt', () => {
  console.log('read done');
  setImmediate(() => console.log('after-read'));
  console.log("---------------------------------")
});