const readline = require('readline');

let counts = 0;
const rl = readline.createInterface({
  input: fs.createReadStream('input.txt')
});
rl.on('line', () => counts++);
rl.on('close', () => console.log('Lines:', counts));
