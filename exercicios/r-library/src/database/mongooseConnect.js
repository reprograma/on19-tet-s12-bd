const mongoose = require("mongoose")

const connect = async () => {
    try{
        mongoose.connect("mongodb+srv://biancatrindade:xuxubeleza@cluster0.oxgeab4.mongodb.net/rlibrary",{
            useNewURLParser: true,
            useUnifiedTopology: true,
        })
        console.log("database conectada com sucesso")
    }catch (error){
        console.log(error)
    }
}
module.exports = {
    connect,
}
