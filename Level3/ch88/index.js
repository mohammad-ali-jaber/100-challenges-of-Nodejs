const express = require('express');
const { z } = require('zod');

const app = express();
app.use(express.json());

const schema = z.object({ email: z.string().email(), age: z.number().int().positive() });

app.post('/validate', (req, res) => {
  const result = schema.safeParse(req.body);
  if (!result.success) return res.status(400).json(result.error);
  res.json({ ok: true });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

// in powershell 
//Invoke-RestMethod -Uri http://localhost:3000/validate -Method POST -Body '{"email":"test@example.com","age":25}' -ContentType "application/json"

// or in postman