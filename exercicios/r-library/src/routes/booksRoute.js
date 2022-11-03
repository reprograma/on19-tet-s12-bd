const controller = require("../controllers/booksController");

const express = require("express");

// funcao de rotas de express
const router = express.Router();

// router. metodo http (rota, funcao)

router.get("/all", controller.getAllBooks);
router.get("/:id", controller.getBookById);
router.post("/new", controller.addNewBook);
router.put("/:id", controller.updateBookById);
router.delete("/:id", controller.deleteBook);

module.exports = router;
