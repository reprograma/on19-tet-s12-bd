const mongoose = require("mongoose")

const connect = async () => {
    try{
        mongoose.connect("mongodb+srv://larissafontes:lari2108@cluster0.3f27kxu.mongodb.net/rlibrary", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Conectadíssima!!!!")
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    connect
}