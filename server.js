const express = require('express');
const cors = require('cors');
const app = express();
require("./server/config/mongoose.config");
app.use(cors());
const port = 8000;
app.use(express.json(), express.urlencoded({extended: true}))

const AllMyRoutes = require('./server/routes/nasaImage.routes');
AllMyRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );