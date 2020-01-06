var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/cat_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);
