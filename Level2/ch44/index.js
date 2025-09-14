const express = require("express");
const app = express();

app.use('/static', express.static('public'));

app.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});

// in powershell
// (Invoke-WebRequest "http://localhost:3000/static/text.txt").Content