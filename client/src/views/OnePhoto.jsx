import React, { useState, useEffect } from "react";
import axios from 'axios';

//This file displays one image that has been favorited and the user wants to go back to see that image 

const OnePhoto = props => {

    //setup state to receive incoming data from our API
    const [apiData, setApiData] = useState(null);

    //axios call to get one image thaat has been favorited, and setApiData to that json response
    useEffect(() => {
        axios.get(`http://localhost:8000/api/nasaimages/${props._id}`)
            .then(res => {
                setApiData(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [props._id]);

    //Returns structure for displaying the one image data
    return (
        <>
        {
            apiData ? 
            <div className="nasa-photo">
                {/* checks to see if there is an image or video in the json data and returns appropriate styling */}
                {apiData.media_type === "image" ? <img src={apiData.hdurl} alt={apiData.title} /> : <iframe title="space-video" src={apiData.hdurl} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen/>}
                <div className="content">
                    <h1>{apiData.title}</h1>
                    <p className="date">{apiData.date}</p>
                    <p>Copyright: {apiData.copyright ? apiData.copyright : "Unknown"}</p>
                    <p className="explanation">{apiData.explanation}</p>
                </div>
            </div> : ""
        }
        </>
        
    )
}

export default OnePhoto;