//This file sets up a server with a connection to mongodb and the routes that will be communicating to it. 
const express = require('express');
const cors = require('cors');
const app = express();
require("./server/config/mongoose.config");
app.use(cors());
const port = 8000;
app.use(express.json(), express.urlencoded({extended: true}))

//import the routes and connect to app
const AllMyRoutes = require('./server/routes/nasaImage.routes');
AllMyRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );