import React, { useEffect, useState } from "react";
import axios from "axios";
import AllFavorites from "./AllFavorites";

//file contains structure to display all of the favorited images

const Home = props => {
    //setup state for favorites that will be return by axios call, and resetAPI which will trigger as a dependency for when a favorited image is deleted. this will 'rerun' the axios call
    const [favorites, setFavorites] = useState(null);
    const [resetAPI, setResetAPI] = useState(null);

    //axios call to get all favorited images
    useEffect(() => {
        axios.get("http://localhost:8000/api/nasaimages")
            .then(res => setFavorites(res.data))
            .catch(err => console.log(err))
    }, [resetAPI])

    //this is be triggered when a deletion takes place
    const update = () => {
        setResetAPI(!resetAPI);
    }

    //returns main structure for the home page
    return (
        <div className="container">
            <div className="welcome">
                <h2>Favorited Images</h2>
                <p>All data is taken directly from the NASA API and is only used for project purposes. Please feel free to click around the website!</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                {/* maps through all the favorited images, each one getting passed the data returned from the axios call (for one image) and the update function */}
                {
                    favorites ? 
                    favorites.map((favorite) => {
                        return <AllFavorites favorite={favorite} update={update}/>
                    }) : ""
                }
            </div>
            
        </div>
    )
}

export default Home;