const express = require("express");
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const food = require("./data/food.json");
const categories = require("./data/categories.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/food", (req, res) => {
  res.send(food);
});
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app