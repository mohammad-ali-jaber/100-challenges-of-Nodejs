const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  if (isNaN(a) || isNaN(b)) return res.status(400).json({ error: 'Invalid numbers' });
  res.json({ sum: a + b });
});

app.listen(4000, () => console.log('Service B running on http://localhost:4000'));
