//código para conectar a database

const mongoose = require("mongoose")

const connect = async() =>{
    try{
        mongoose.connect("mongodb+srv://lilianegomes:reprograma19@cluster0.w75dpov.mongodb.net/rlibrary", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database está conectada")
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    connect,
}