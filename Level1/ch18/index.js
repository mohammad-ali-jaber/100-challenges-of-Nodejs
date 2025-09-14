const fs = require('fs');
const readable = fs.createReadStream('big.txt');
const writable = fs.createWriteStream('copy.txt');

readable.on('data', (chunk) => {
  if (!writable.write(chunk)) {
    readable.pause();
    writable.once('drain', () => readable.resume());
  }
});
readable.on('end', () => writable.end());