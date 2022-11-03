const mongoose = require("mongoose")

const conect = async () => {
    try {
     mongoose.connect("mongodb+srv://GreiceGiacomelli:212121po@cluster0.qnn0qph.mongodb.net/rlibrary",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
     })
     console.log("Database conectada")
    }catch (error) {
    console.log(error)
    }
} 
module.exports = {
    conect,
}