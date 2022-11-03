const mongoose = require ('mongoose')

const connect = async () => {
    try {
        mongoose.connect ("mongodb+srv://user:pass@cluster0.rvz0u7u.mongodb.net/?retryWrites=true&w=majority/rlibrary", {
                                 //  minha senha     ^      ^|^      ^ nome do cluster                                      ^ nome da pasta no VS (SEM HIFEM)
            userNewUrlParser: true,
            userUnifiedTopology: true
        })
        console.log ('DB conectada com sucesso')
    } catch (error){
        console.log (error)
    }
}

module.exports = {connect}