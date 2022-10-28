const books = require("../models/books.json");

const getAllBooks = (request, response) => {
  try {
    response.status(200).json([
      {
        books: books,
      },
    ]);
  } catch (err) {
    response.status(500).send({ message: "Erro no server" });
  }
};

const getBooksById = (request, response) => {
  const booksRequest = request.params.id;
  const booksFilter = books.filter((books) => books.id == booksRequest);

  if (booksFilter.length > 0) {
    response.status(200).send(booksFilter);
  } else {
    response.status(404).send([
      {
        message: "book not found"
      },
    ]);
  }
};

const addNewBook = (request, response) => {
  try {
    let titleRequest = request.body.title;
    let launchYearRequest = request.body.launchYear;
    let availableRequest = request.body.available;
    let publisherRequest = request.body.publisher;
    let genderRequest = request.body.gender;
    let writerRequest = request.body.writer;
    let pagesRequest = request.body.pages;

    let newBooks = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      title: titleRequest,
      launchYear: launchYearRequest,
      available: availableRequest,
      publisher: publisherRequest,
      gender: genderRequest,
      writer: writerRequest,
      pages: pagesRequest,
    };

    books.push(newBooks);
    response.status(201).json([
      {
        message: "Book successfully registered",
        newBooks,
      },
    ]);
  } catch (err) {
    console.log(err);
    response.status(500).send([
      {
        message: "Server Error",
      },
    ]);
  }
};

const deleteBooks = (request, response) => {
  const idRequest = request.params.id;
  const indiceBooks = books.findIndex((books) => books.id == idRequest);

  books.splice(indiceBooks, 1);

  if (indiceBooks) {
    response.status(200).json([
      {
        message: "Book deleted",
        "book": idRequest,
        books,
      },
    ]);
  } else {
    response.status(404).send([
      {
        message: "book not deleted",
      },
    ]);
  }
};


module.exports = {
  getAllBooks,
  getBooksById,
  addNewBook,
  addbooks,
  updateBooks,
  deleteBooks,
};