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
