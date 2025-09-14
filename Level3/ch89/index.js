const express = require('express');
const app = express();

const isNewHomeEnabled = process.env.FEATURE_NEW_HOME;

app.get('/', (req, res) => {
  if (isNewHomeEnabled) {
    res.send('New Home Enabled');
  } else {
    res.send('Old Home');
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
