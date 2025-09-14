const express = require("express");
const app = express();
app.use(express.json());

let todos = [];

app.post('/todos', (req, res) => {
  const todo = { id: todos.length+1, text: req.body.text };
  todos.push(todo);
  res.json(todo);
});

app.get('/todos', (req, res) => res.json(todos));

app.put('/todos/:id', (req, res) => {
  const t = todos.find(x => x.id == req.params.id);
  if (t) t.text = req.body.text;
  res.json(t);
});

app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(x => x.id != req.params.id);
  res.json({ ok: true });
});


app.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});