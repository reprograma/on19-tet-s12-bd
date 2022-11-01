const mongoose = require('mongoose')

const connect = async () => {
    try {
        mongoose.connect("mongodb+srv://beatriz:bia12345@cluster0.klo9bos.mongodb.net/rlibrary", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Data base conectada")
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    connect
}