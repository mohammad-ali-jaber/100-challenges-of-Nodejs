const { Transform } = require("stream");
const upper = new Transform({
  transform(chunk, _, cb) {
    cb(null, chunk.toString().toUpperCase());
  }
});
process.stdin.pipe(upper).pipe(process.stdout);
