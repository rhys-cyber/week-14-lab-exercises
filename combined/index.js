const express = require("express");
const app = express();
const hello = require("./returnHello.js");

app.get("/", function (req, res) {
  var greeting = hello.generateHelloString(req.query.language);
  res.send(greeting);
});

app.listen(process.env?.PORT || 3000);

