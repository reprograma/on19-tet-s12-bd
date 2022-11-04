const mongoose = require("mongoose")

const connect = async() =>  {
    try {
        mongoose.connect("mongodb+srv://karenfr:12345@cluster0.vdfgflr.mongodb.net/rlibrary", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("Bonita, conectou aqui, gatíssiman");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    connect
}
