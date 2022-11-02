const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  title: {
    type: String,
    require: true,
    unique: true,
  },
  launchYear: {
    type: Number,
    require: true,
  },
  available: {
    type: Boolean,
    require: true,
  },
  publisher: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  pages: Number,
});

const Model = mongoose.model("book", BookSchema);

module.exports = Model;
