const express = require("express");
const app = express();
app.use(express.json());


app.post('/users', express.json(), (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({ message: 'Email required' });
  }
  res.json({ ok: true });
});

app.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});

// in powershell

// Invoke-WebRequest -Uri http://localhost:3000/users -Method POST -Body '{}' -ContentType "application/json"
