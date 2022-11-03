const BooksModel = require("../models/booksModel");

const addNewBook = async (req, res) => {
    try {
        const {
            title,
            launchYear,
            available,
            publisher,
            gender,
            writer,
            pages,
        } = req.body;

        const newBook = new BooksModel({
            title,
            launchYear,
            available,
            publisher,
            gender,
            writer,
            pages,
        });
        const savedBook = await newBook.save();
        res
            .status(201)
            .json({ message: "New Book added successfully!", savedBook });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await BooksModel.find({});
        res.status(200).json(allBooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const getBookByTitle = async (req, res) => {
    try {
        const { title } = req.query;
        const findBook = await BooksModel.find({ title }).exec();
        if (!findBook.length) {
            return res.status(404).json({ message: "Title not found" });
        }
        res.status(200).json(findBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const updateBookById = async (req, res) => {
    try {
        const {
            title,
            launchYear,
            available,
            publisher,
            gender,
            writer,
            pages,
        } = req.body;
        const updateBook = await BooksModel.findByIdAndUpdate(
            req.params.id,
            {
                title,
                launchYear,
                available,
                publisher,
                gender,
                writer,
                pages,
            },
            { new: true }
        );
        res.status(200).json(updateBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const findBook = await BooksModel.findById(id);

        if (findBook == null) {
            return res.status(404).json({ message: `Book with id ${id} not found` });
        };
        await findBook.remove();
        res.status(200).json({ message: `Book with id ${id} was successfully deleted` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

module.exports = {
    addNewBook,
    getAllBooks,
    getBookByTitle,
    updateBookById,
    deleteBook,
};