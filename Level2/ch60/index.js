const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const SECRET = "MySecret";

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "123") {
    const token = jwt.sign({ userId: 1 }, SECRET, { algorithm: "HS256" });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid" });
  }
});

app.listen(3000);
