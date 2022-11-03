const mongoose = require ('mongoose')

const connect = async () => {
    try {
        mongoose.connect ("mongodb+srv://user:pass@cluster0.k1iviup.mongodb.net/rlibrary", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log ('DataBase connected successfully')
    }
    catch (error) {
        console.log (error)
    }
}

module.exports = {connect}