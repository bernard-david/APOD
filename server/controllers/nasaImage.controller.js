const NasaImage = require("../models/nasaImage.model")

//Create
module.exports.createNasaImage = (req, res) => {
    NasaImage.create(req.body)
        .then(newNasaImage => res.json(newNasaImage))
        .catch(err => res.json({message: "Something went wrong when creating a new NasaImage!!", error:err}))
}

//Get all
module.exports.findAllNasaImages = (req, res) => {
    NasaImage.find()
        .then(allNasaImages => res.json(allNasaImages))
        .catch(err => res.json({message: "Something went wrong when getting all the NasaImages!!", error:err}))
}

//Get One
module.exports.findOneNasaImage = (req, res) => {
    NasaImage.findOne({_id: req.params._id})
        .then(oneNasaImage => res.json(oneNasaImage))
        .catch(err => res.json({message: "Something went wrong when getting one NasaImage!!", error: err}))
}

//Delete
module.exports.deleteOneNasaImage = (req, res) => {
    NasaImage.deleteOne({_id: req.params._id})
        .then(oneNasaImage => res.json(oneNasaImage))
        .catch(err => res.json({message: "Something went wrong when deleting a NasaImage!!", error: err}))
}