const express = require("express");
const app = express();

const escape = require('escape-html');
app.get("/", (req, res) => {
 const input = req.query.username || ""; 
 const safeName = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  res.send(`Hello ${safeName}`);
});

app.listen(3000);
