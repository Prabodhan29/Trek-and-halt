const mongoose = require("mongoose");

const destinationSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  rating: {
    type: Number,
  },

  photos: {
    type: Number,
  },
});

module.exports = mongoose.model("DestinationCard", destinationSchema);
