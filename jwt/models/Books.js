const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  edition: {
    type: Number,
    required: true,
  },

  year: {
    type: Number,
    required: true
  }
  
});

module.exports = mongoose.model("Book", bookSchema);
