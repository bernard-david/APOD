import React, { useState, useEffect } from "react";
import axios from 'axios';
import Favorite from "./Favorite";

const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = props => {

    const [nasaData, setNasaData] = useState(null);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(res => {
                setNasaData(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
        {
            nasaData ? 
            <div className="nasa-photo">
                {nasaData.media_type === "image" ? <img src={nasaData.hdurl} alt={nasaData.title} /> : <iframe title="space-video" src={nasaData.hdurl} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen/>}
                <div className="content">
                    <h1>{nasaData.title}</h1>
                    <p className="date">{nasaData.date}</p>
                    <p>Copyright: {nasaData.copyright}</p>
                    <p className="explanation">{nasaData.explanation}</p>
                    <Favorite data={nasaData}/>
                </div>
            </div> : ""
        }
        </>
        
    )
}

export default NasaPhoto;