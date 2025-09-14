const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const SECRET = 'MySecret'; 

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization']; 
  if (!authHeader) 
    return res.status(401).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1]; 
  if (!token) 
    return res.status(401).json({ error: 'Invalid token format' });

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Token is not valid' });
    req.user = decoded;
    next();
  });
}

app.post('/login', (req, res) => {
  const user = { id: 1, name: 'Ali' };
  const token = jwt.sign(user, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to protected route', user: req.user });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
