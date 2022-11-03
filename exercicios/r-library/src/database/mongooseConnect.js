const mongoose = require("mongoose");
require('dotenv').config();
const MongoPass = process.env.MongoDB;

const connect = async () => {
  try {
    mongoose.connect(`mongodb+srv://${MongoPass}`, {
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

