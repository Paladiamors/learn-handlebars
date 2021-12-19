const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

let names = ["Max", "Tom", "Anna"];
app.get("/", function (req, res) {
  res.render("index", { students: names });
});

let people = [
  { name: "Max", age: 21 },
  { name: "Tom", age: 19 },
  { name: "Anna", age: 25 },
];
app.get("/ages", function (req, res) {
  res.render("ages", { students: people });
});

let adults = [
  { name: "Max", adult: true },
  { name: "Tom", adult: false },
  { name: "Anna", adult: true },
];

app.get("/adult", function (req, res) {
  res.render("adult", { students: adults });
});
app.listen(8080);
