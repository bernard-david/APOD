const mongoose = require('mongoose');

//Creates the Schema for favoriting an image from Nasa. This matches the json response from the NASA API and stored in a similar format using strings
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
    url: {
        type: String
    },
    thumbnail_url: {
        type: String
    },
    media_type: {
        type: String
    },
    title: {
        type: String
    },
}, {timestamps: true})

//exports the model to use in the controller
const NasaImage = mongoose.model("NasaImage", NasaImageSchema);
module.exports = NasaImage;