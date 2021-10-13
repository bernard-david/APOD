import React, { useState, useEffect } from "react";
import axios from 'axios';
import Favorite from "../components/Favorite";

const apiKey = process.env.REACT_APP_NASA_KEY;

const RandomPhoto = props => {

    const [nasaData, setNasaData] = useState(null);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&thumbs=True&count=1`)
            .then(res => {
                setNasaData(res.data[0]);
                console.log(res.data[0]);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
        {
            nasaData ? 
            <div className="nasa-photo">
                {nasaData.media_type === "image" ? <img src={nasaData.url} alt={nasaData.title} /> : <iframe title="space-video" src={nasaData.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen/>}
                <div className="content">
                    <h1>{nasaData.title}</h1>
                    <p className="date">{nasaData.date}</p>
                    <p className="copyright">Copyright: {nasaData.copyright ? nasaData.copyright : "Unknown"}</p>
                    <p className="explanation">{nasaData.explanation}</p>
                    <Favorite data={nasaData}/>
                </div>
            </div> : ""
        }
        </>
        
    )
}

export default RandomPhoto;