const mongoose = require('mongoose')

const connect = async () =>{
  try {
    mongoose.connect("mongodb+srv://mmcrisx:brunomars22@cluster0.yno4wio.mongodb.net/rlibrary",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Database conectada em nome da Beyonce")
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  connect,
}