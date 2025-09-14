const express = require("express");
const app = express();

const limit = 60; 
const windowMs = 60 * 1000; 
const store = {};

app.use((req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  if (!store[ip] || now - store[ip].start > windowMs) {
    store[ip] = { count: 1, start: now };
    return next();
  }

  if (store[ip].count < limit) {
    store[ip].count++;
    return next();
  }

  res.status(429).send("Too many requests - try again later");
});

app.get("/", (req, res) => {
  res.send("Hello! You are within the rate limit.");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
