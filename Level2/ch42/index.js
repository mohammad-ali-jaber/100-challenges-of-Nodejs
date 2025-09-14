const express = require("express");
const app = express();

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.get('/', (req, res) => {
  throw new Error('Something went wrong');
});

app.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});