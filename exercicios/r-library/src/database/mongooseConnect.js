const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect("mongodb+srv://laumedeia:Anarquist4@cluster0.qkhsysp.mongodb.net/r-library", {
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

