import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "./Navbar";

const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = props => {

    const [nasaData, setNasaData] = useState(null);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(res => setNasaData(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            {
                nasaData ? <div>
                    {
                        nasaData.media_type === "image" ? <img src={nasaData.url} alt={nasaData.title}/> : <iframe title="space-video" src={nasaData.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen
                    />
                    }
                    <div>
                        <h3>{nasaData.title}</h3>
                        <p>{nasaData.date}</p>
                        <p>{nasaData.explanation}</p>
                    </div>
                </div> : ""
            }
        </div>
    )
}

export default NasaPhoto;