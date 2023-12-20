const express = require("express");
const { engine } = require("express-handlebars");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "views");

// setting static file
app.use(express.static("public"));

// router setting
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(port, () => `Express is listening on localhost:// ${port}`);
