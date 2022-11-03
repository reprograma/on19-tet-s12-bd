const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        launchYear: {
            type: Number,
            required: true,
        },
        available: {
            type: Boolean,
            required: true,
        },
        publisher: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true,
        },
        writer: {
            type: String,
            required: true,
        },
        pages: Number,
        timestamps: {
            type: mongoose.Schema.Types.Date,
            default: Date.now,
            immutable: true,
            required: true,
        },
    },
);

const Model = mongoose.model("book", BookSchema);

module.exports = Model;