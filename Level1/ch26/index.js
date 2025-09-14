const buf1 = Buffer.from('Hello');
const buf2 = Buffer.from('World');
const buf = Buffer.concat([buf1, buf2]); 
console.log(buf.toString());