const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect("mongodb+srv://Cibelle:795661@cluster0.rxwlwer.mongodb.net/rlibrary", {
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

