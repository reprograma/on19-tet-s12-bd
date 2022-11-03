const mongoose = require("mongoose");

const connect = async () => {
  try {
      mongoose.connect("mongodb+srv://ValeriaCabral:161071@cluster0.jtdu9bi.mongodb.net/rlibrary", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connect,
};

