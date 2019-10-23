const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.static("src"));
app.use(express.static(__dirname + "src"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.get("*", (req, res, err) => {
  console.log(err.message);
  res.sendStatus(404);
});

/**Middleware to catch either a 404 or 500 error message after routing has completed */
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(port);
console.log(`Listening on Port : ${port}`);
