import React, { useState, useEffect } from "react";
import axios from 'axios';

const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = props => {

    const [nasaData, setNasaData] = useState(null);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <p>Nasa data page</p>
        </div>
    )
}

export default NasaPhoto;