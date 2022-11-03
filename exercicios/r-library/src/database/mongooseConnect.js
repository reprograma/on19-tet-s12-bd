<<<<<<< HEAD
const mongoose = require('mongoose')

const connect = async () =>{
  try {
    mongoose.connect("mongodb+srv://djeisly:Djeisly@cluster0.imdlyva.mongodb.net/rlibrary",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("Database conectada com sucesso")
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
    connect,
}
=======
const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect("mongodb+srv://GaiaMaria8:gaia1999@cluster0.btpmh.mongodb.net/rlibrary", {
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

>>>>>>> 866d8980daadd9e5e767ac2d21f60b13e7f5448e
