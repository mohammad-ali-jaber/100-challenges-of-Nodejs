const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser("secret"));
app.get("/set", (req, res) => {
  res.cookie("sas", "1235", { signed: true });
  res.send("Cookie set");
});
app.get("/get", (req, res) => {
  res.send(req.signedCookies.sid || "No cookie");
});


app.listen(3000, () => {
  console.log('http://localhost:3000/set');
  console.log('http://localhost:3000/get');
});
