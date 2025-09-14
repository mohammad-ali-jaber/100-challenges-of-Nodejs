const fs = require('fs');
Promise.all([
  fs.promises.readFile('a.txt'),
  fs.promises.readFile('b.txt')
]).then(([a, b]) => {
  console.log(a.length + b.length);
});