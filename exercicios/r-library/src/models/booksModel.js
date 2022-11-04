const mongoose = require("mongoose")


const BookSchema = new mongoose.Schema(
    {
        _id:{
            type: mongoose.Schema.Types.ObjectId, 
            default: mongoose.Types.ObjectId
        },

        titulo: {
            type: String,
            require: true,
            unique: true 
        },

        lancamento: {
            type: Number,
            require: true
        },

        disponibilidade: {
            type: Boolean,
            require: true
        },

        editora: {
            type: String,
            require: true,
        },

        genero: {
            type: String,
            require: true
        },

        escritor: {
            type: String,
            require: true
        },

        paginas: Number,
    }
);

const Model = mongoose.model("livro",  BookSchema); 

module.exports = Model

