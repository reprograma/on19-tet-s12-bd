const mongoose = require("mongoose");

const PublisherSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId,
        },
        publisher: {
            type: String,
            required: true,
        },
        series: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        publisherISBN: Number,
        timestamps: {
            type: mongoose.Schema.Types.Date,
            default: Date.now,
            immutable: true,
            required: true,
        },
    },
);

const ModelPublisher = mongoose.model("publisher", PublisherSchema);

module.exports = ModelPublisher;