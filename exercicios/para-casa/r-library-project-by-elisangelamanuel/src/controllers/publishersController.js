const PublisherModel = require("../models/publishersModel");

const addNewPublisher = async (req, res) => {
    try {
        const {
            publisher,
            series,
            country,
            publisherISBN,
        } = req.body;

        const newPublisher = new PublisherModel({
            publisher,
            series,
            country,
            publisherISBN,
        });
        const savedPublisher = await newPublisher.save();
        res
            .status(201)
            .json({ message: "New Publisher added successfully!", savedPublisher });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

const getAllPublishers = async (req, res) => {
    try {
        const allPublishers = await PublisherModel.find({});
        res.status(200).json(allPublishers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const getPublisherById = async (req, res) => {
    try {
        const { id } = req.params;
        const findPublisher = await PublisherModel.findById(id);
        if (findPublisher == null) {
            return res.status(404).json({ message: `ID ${id} not found` });
        }
        res.status(200).json(findPublisher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePublisherById = async (req, res) => {
    try {
        const {
            publisher,
            series,
            country,
            publisherISBN,
        } = req.body;

        const updatePublisher = await PublisherModel.findByIdAndUpdate(
            req.params.id,
            {
                publisher,
                series,
                country,
                publisherISBN,
            },
            { new: true }
        );
        res.status(200).json(updatePublisher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

const deletePublisher = async (req, res) => {
    try {
        const { id } = req.params;
        const findPublisher = await PublisherModel.findById(id);

        if (findPublisher == null) {
            return res.status(404).json({ message: `Publisher with id ${id} not found` });
        };
        await findPublisher.remove();
        res.status(200).json({ message: `Publisher with id ${id} was successfully deleted` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

module.exports = {
    addNewPublisher,
    getPublisherById,
    getAllPublishers,
    updatePublisherById,
    deletePublisher,
};