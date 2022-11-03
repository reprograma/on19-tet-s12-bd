const express = require("express");
const cors = require("cors");
const mongoose = require("./database/mongooseConnect");
const booksRoutes = require("./routes/booksRoute");
const app = express();

app.use(express.json());

app.use(cors());
mongoose.connect();

app.use("/library/books", booksRoutes); // crio uma rota raiz

// exportando para usar o server.js
module.exports = app;