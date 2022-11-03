const express = require("express"); //importo o express
const cors = require("cors")
const mongoose = require("./database/mongooseConect")
const routes = require("./routes/booksRoute");

const app = express(); 


app.use(cors())
mongoose.conect()
 // executo o express

app.use(express.json()); // uso o body parse

// importe da continuação de rotas podcast

app.use("/library/books", routes); // crio uma rota raiz

// exportando para usar o server.js
module.exports = app;