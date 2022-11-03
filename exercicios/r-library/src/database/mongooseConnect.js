const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect("mongodb+srv://RobSouza:beta2304@cluster0.4uodw33.mongodb.net/rlibrary", {
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

