const os = require('os');
console.log('Platform:', os.platform());
console.log('CPUs:', os.cpus().length);
console.log('Memory MB:', Math.round(os.totalmem() / 1024 / 1024));