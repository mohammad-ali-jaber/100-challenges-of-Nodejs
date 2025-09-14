const express = require('express');
const app = express();

app.use(express.json({ limit: '100kb' }));

app.post('/data', (req, res) => {
  res.json({ received: true });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
