import React, { useState, useEffect } from "react";
import axios from 'axios';
import Favorite from "../components/Favorite";

const OnePhoto = props => {

    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/nasaimages/${props._id}`)
            .then(res => {
                setApiData(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
        {
            apiData ? 
            <div className="nasa-photo">
                {apiData.media_type === "image" ? <img src={apiData.hdurl} alt={apiData.title} /> : <iframe title="space-video" src={apiData.hdurl} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen/>}
                <div className="content">
                    <h1>{apiData.title}</h1>
                    <p className="date">{apiData.date}</p>
                    <p>Copyright: {apiData.copyright}</p>
                    <p className="explanation">{apiData.explanation}</p>
                    <Favorite data={apiData}/>
                </div>
            </div> : ""
        }
        </>
        
    )
}

export default OnePhoto;