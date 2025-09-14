const fs = require('fs');
const dataSync = fs.readFileSync('data.txt');
console.log('Sync bytes:', dataSync.length);
console.log("---------------------------------")

fs.readFile('data.txt', (err, data) => {
    if(err){
        console.log(`the error : ${err}`)
    }
  console.log('Async bytes:', data.length);
  console.log("---------------------------------")
});