const mongoose = require('mongoose');

const NasaImageSchema = mongoose.Schema({
    copyright: {
        type: String
    },
    date: {
        type: String
    },
    explanation: {
        type: String
    },
    hdurl: {
        type: String
    },
    thumbnail: {
        type: String
    },
    media_type: {
        type: String
    },
    title: {
        type: String
    },
}, {timestamps: true})

const NasaImage = mongoose.model("NasaImage", NasaImageSchema);
module.exports = NasaImage;