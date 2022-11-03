const booksController = require("../controllers/booksController");
const publisherController = require("../controllers/publishersController");

const express = require("express");

const router = express.Router();

router.post("/books/new", booksController.addNewBook);
router.get("/books/all", booksController.getAllBooks);
router.get("/books", booksController.getBookByTitle);
router.patch("/updateBooks/:id", booksController.updateBookById);
router.delete("/books/delete/:id", booksController.deleteBook);

router.post("/publishers/new", publisherController.addNewPublisher);
router.get("/publishers/all", publisherController.getAllPublishers);
router.get("/publishers/:id", publisherController.getPublisherById);
router.patch("/updatePublishers/:id", publisherController.updatePublisherById);
router.delete("/publishers/delete/:id", publisherController.deletePublisher);

module.exports = router;