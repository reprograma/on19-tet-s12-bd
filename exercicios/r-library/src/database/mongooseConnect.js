const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect("mongodb://areiasgabrielli:24041993@ac-dhaqkzh-shard-00-00.cr73iq2.mongodb.net:27017,ac-dhaqkzh-shard-00-01.cr73iq2.mongodb.net:27017,ac-dhaqkzh-shard-00-02.cr73iq2.mongodb.net:27017/rlibrary?ssl=true&replicaSet=atlas-jnec55-shard-0&authSource=admin&retryWrites=true", {
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

