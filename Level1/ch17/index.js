const fs = require('fs');
const zlib = require('node:zlib');

const input = fs.createReadStream('big.txt');
const output = fs.createWriteStream('big.txt.gz');
const gzip = zlib.createGzip();

input.pipe(gzip).pipe(output);

output.on('finish', () => {
  console.log('File compressed successfully');
});