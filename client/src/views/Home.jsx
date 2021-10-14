import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import AllFavorites from "./AllFavorites";

const Home = props => {
    const [favorites, setFavorites] = useState(null);
    const [resetAPI, setResetAPI] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/nasaimages")
            .then(res => setFavorites(res.data))
            .catch(err => console.log(err))
    }, [resetAPI])

    const update = () => {
        setResetAPI(!resetAPI);
    }

    return (
        <div className="container">
            <div className="welcome">
                <h2>Favorited Images</h2>
                <p>All data is taken directly from the NASA API and is only used for project purposes. Please feel free to click around the website!</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
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