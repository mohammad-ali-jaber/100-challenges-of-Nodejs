const express = require('express');
const app = express();
const server = app.listen(3000);

process.on('SIGINT', async () => {
  console.log('Shutting down...');
  server.close(() => {
    process.exit(0);
  });
});
