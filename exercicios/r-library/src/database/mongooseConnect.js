const mongoose = require("mongoose")

const connect = async () => {
    try {
        mongoose.connect("mongodb+srv://rihanna:rihanna123@cluster0.kylsn6i.mongodb.net/rlibrary", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Conectei a database com sucesso! ONLINE E ROTEANDO")
    } catch (error) {
        console.log(error)
    }

}
module.exports = {
    connect,



}