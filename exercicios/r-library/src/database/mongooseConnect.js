const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://tipopamela:Alcoolgel20@cluster0.btpmh.mongodb.net/rlibrary",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connect,
};
