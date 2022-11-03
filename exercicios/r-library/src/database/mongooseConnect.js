const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect("mongodb+srv://Mabarioto:mamaragufe1996@cluster0.wwdcjel.mongodb.net/rlibrary", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database conectada");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connect,
};

