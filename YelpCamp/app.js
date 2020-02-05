require("dotenv").config({ path: __dirname + "/.env" });
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/yelp_camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Granite Hill",
//     image:
//       "https://cdn.pixabay.com/photo/2016/11/29/04/17/bonfire-1867275_960_720.jpg",
//     description:
//       "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
//   },
//   function(err, campground) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Newly created campground");
//       console.log(campground);
//     }
//   }
// );

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
});

// var campgrounds = [
//   {
//     name: "Salmon Creek",
//     image:
//       "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022_960_720.jpg"
//   },
//   {
//     name: "Granite Hill",
//     image:
//       "https://cdn.pixabay.com/photo/2016/11/29/04/17/bonfire-1867275_960_720.jpg"
//   },
//   {
//     name: "Mountain Goat's Rest",
//     image:
//       "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg"
//   }
// ];

app.get("/campgrounds", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { campgrounds: allCampgrounds });
    }
  });
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = { name: name, image: image, description: desc };
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
  // campgrounds.push(newCampground);
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res) {
  Campground.findById(req.params.id, function(err, foundCampground) {
    if (err) {
      console.log(err);
    } else {
      res.render("show", { campground: foundCampground });
    }
  });
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log(
    `The YelpCamp server has started at http://${process.env.IP}:${process.env.PORT}`
  );
});
