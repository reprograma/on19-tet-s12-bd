const express = require("express"); //importo o express
const cors = require("cors");
const mongoose = require("./Database/mongooseConnect");

const app = express(); // executo o express

app.use(express.json()); // uso o body parse
app.use(cors());
mongoose.connect();

// importe da continuação de rotas podcast
const booksRoute = require("./routes/booksRoute");

app.use("/library/books", booksRoute); // crio uma rota raiz

// exportando para usar o server.js
module.exports = app;