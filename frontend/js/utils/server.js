const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");

app.set("view engine", "ejs");

mongoose.connect(
  "",
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

const freelancerSchema = {
  email: String,
  password: String,
  country_residence: String,
  full_name: String,
  country_id: String,
  skills: Array,
  languages: Array,
};

const Freelancer = mongoose.model("freelancer", freelancerSchema);

app.get("/", (req, res) => {
  Freelancer.find({}, function (err,freelancers) {
    res.render("index", {
      freelancersList: freelancers,
    });
  });
});

app.listen(4000, function () {
  console.log("server is runing");
});
