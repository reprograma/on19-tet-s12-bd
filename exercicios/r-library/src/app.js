const express = require("express"); //importo o express
const cors = require("cors")
const mongoose = require("./database/mongooseConnect")
const routes = require("./routes/booksRoute")

const app = express(); // executo o express

app.use(express.json()); // uso o body parse
app.use(cors())
mongoose.connect()
// importe da continuação de rotas podcast
app.use("/library/books", routes); // crio uma rota raiz

// exportando para usar o server.js
module.exports = app;