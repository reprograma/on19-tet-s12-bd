const mongoose = require ("mongoose")

const GameSchema = new mongoose.Schema (
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        title: {
            type: String,
            required: true,
            unique: true
        },
        launchYear: {
            type: Number,
            required: true
        },
        steamAvailability: {
            type: Boolean,
            required: true
        },
        price : {
            type: Number,
            required: function () {return this.steamAvailability}
        },
        genre: {
            type: Array,
            required: true
        },
        developer: {
            type: String,
            required: true
        }
    }
)


const Model = mongoose.model("Games", GameSchema)

module.exports = Model