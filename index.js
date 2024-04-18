const express = require("express");
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const food = require("./data/food.json");
const country = require("./data/country.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/food", (req, res) => {
  res.send(food);
});
app.get("/country", (req, res) => {
  res.send(country);
});
app.get("/food/:id",(req,res)=>{
  const id=req.params.id;
  const selectedFood=food.find(n=>n.id===id);
  res.send(selectedFood);
});
app.get('/country/:id',(req,res)=>{
  const id=req.params.id;
  if(id==0){
    res.send(food);
  }else{
    const category=food.filter(n=>n.category_id===id);
  res.send(category);
  }
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = app