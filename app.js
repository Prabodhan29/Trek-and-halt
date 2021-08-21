const { urlencoded } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DestinationCard = require("./models/cards.js");

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/TreknHalt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/destinations", async function (req, res) {
  const destinationCards = await DestinationCard.find();
  res.render("destinations.ejs", { UploadedCards: destinationCards });
});

app.get("/collaborator", function (req, res) {
  res.render("collaborator.ejs");
});

app.post("/destinations", function (req, res) {
  var destinationCards = new DestinationCard({
    title: req.body.title,
    description: req.body.description,
    rating: req.body.rating,
    photos: req.body.photos,
  });

  if (destinationCards.save()) {
    return res.redirect("/destinations");
  }

  if (err) {
    console.log(err);
    return res.render("destinations.ejs", { UploadedCards: destinationCards });
  }
});

app.all("*", function (req, res) {
  res.status(404).send("404 Page not Found");
});

app.listen(5000, function () {
  console.log("This server is running on port 5000");
});
