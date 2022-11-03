const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    launchYear: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      required: true,
    },
    pages: Number,
  },
);

const Model = mongoose.model("Book", BookSchema);

<<<<<<< HEAD
module.exports = Model;
=======
module.exports = Model;
>>>>>>> 866d8980daadd9e5e767ac2d21f60b13e7f5448e
