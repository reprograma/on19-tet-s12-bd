const controller = require("../controllers/booksController"); // conecto ao controller

const express = require("express"); // importo o express

// funcao de rotas de express
const router = express.Router();

// router. metodo http (rota, funcao)

router.get("/all", controller.getAllBooks);
router.get("/:id", controller.getBookById);
router.post("/new", controller.addNewBook);
<<<<<<< HEAD
router.put("/:id", controller.updateBookById);
router.delete("/:id", controller.deleteBook);

module.exports = router;
=======
router.patch("/:id", controller.updateBookById);
router.delete("/:id", controller.deleteBook);

module.exports = router; //exporto as rotas
>>>>>>> 866d8980daadd9e5e767ac2d21f60b13e7f5448e
