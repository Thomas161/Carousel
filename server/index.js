const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static("src"));
app.use(express.static(__dirname + "src"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});
app.get("*", (err, req, res, next) => {
  setImmediate(() => {
    next(new Error("Oops something went wrong"));
  });
  console.log(err.message);
  res.json({ message: err.message });
});

app.listen(port);
console.log(`Listening on Port : ${port}`);
