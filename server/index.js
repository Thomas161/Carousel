const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(
    "/Users/tommydates/Desktop/ALLREACT/htmlcarousel/src/index.html"
  );
});

app.listen(port);
console.log(`Listening on Port : ${port}`);
