const NasaImageController = require("../controllers/nasaImage.controller")

module.exports = app => {
    //CREATE
    app.post('/api/nasaimages/create', NasaImageController.createNasaImage);
    //GET ALL
    app.get('/api/nasaimages', NasaImageController.findAllNasaImages);
    //GET ONE
    app.get('/api/nasaimages/:_id', NasaImageController.findOneNasaImage);
    //DELETE
    app.delete('/api/nasaimages/delete/:_id', NasaImageController.deleteOneNasaImage);
}