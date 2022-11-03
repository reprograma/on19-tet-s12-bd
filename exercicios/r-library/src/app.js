<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/mongooseConnect");
const booksRoutes = require("./routes/booksRoute");
=======
const express = require("express"); // importo o express
const cors = require("cors"); // importo o cors
const mongoose = require("./database/mongooseConnect"); // conecto a pasta do Mongo
const booksRoutes = require("./routes/booksRoute"); // conecto as rotas
>>>>>>> 866d8980daadd9e5e767ac2d21f60b13e7f5448e

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/library/books", booksRoutes); // crio uma rota raiz

// exportando para usar o server.js
module.exports = app;