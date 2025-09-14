const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'https://app.example.com' }));

app.get('/', (req, res) => res.send('CORS OK'));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});