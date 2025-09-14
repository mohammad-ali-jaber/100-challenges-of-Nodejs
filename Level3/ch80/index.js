const express = require('express');
const app = express();

let cache = null;
let cacheTime = 0;

app.get('/data', (req, res) => {
  const now = Date.now();
  if (cache && now - cacheTime < 5000) return res.send(cache);
  cache = "Fresh Data " + now;
  cacheTime = now;
  res.send(cache);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));