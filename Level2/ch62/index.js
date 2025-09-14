const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

let users = [];

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.json({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);
  if (!user)
     return res.status(400).json({ error: 'User not found' });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) 
    return res.status(401).json({ error: 'Invalid password' });

  res.json({ message: 'Login successful' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
