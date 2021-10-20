import React, { useState, useEffect } from "react";
import axios from 'axios';
import Favorite from "../components/Favorite";

//This file will retrieve the Nasa Photo of the day (today's date)

//API key that is stored
const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = props => {

    //setup state to receive incoming nasaData to then be displayed on the page
    const [nasaData, setNasaData] = useState(null);

    //axios call to get the photo of the day from NASA, then setNasaData to the json response
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&thumbs=True`)
            .then(res => {
                setNasaData(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    //returns structure for displaying the Nasa photo data
    return (
        <>
        {
            nasaData ? 
            <div className="nasa-photo">
                {/* checks to see if there is an image or video in the json data and returns appropriate styling */}
                {nasaData.media_type === "image" ? <img src={nasaData.url} alt={nasaData.title} /> : <iframe title="space-video" src={nasaData.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen/>}
                <div className="content">
                    <h1>{nasaData.title}</h1>
                    <p className="date">{nasaData.date}</p>
                    <p>Copyright: {nasaData.copyright ? nasaData.copyright : "Unknown"}</p>
                    <p className="explanation">{nasaData.explanation}</p>
                    {/* Use the component to favorite an image here */}
                    <Favorite data={nasaData}/>
                </div>
            </div> : ""
        }
        </>
        
    )
}

export default NasaPhoto;