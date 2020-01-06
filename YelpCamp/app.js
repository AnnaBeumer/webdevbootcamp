require("dotenv").config({ path: __dirname + "/.env" });
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
});

var campgrounds = [
  {
    name: "Salmon Creek",
    image:
      "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022_960_720.jpg"
  },
  {
    name: "Granite Hill",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/04/17/bonfire-1867275_960_720.jpg"
  },
  {
    name: "Mountain Goat's Rest",
    image:
      "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg"
  }
];

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log(
    `The YelpCamp server has started at http://${process.env.IP}:${process.env.PORT}`
  );
});
