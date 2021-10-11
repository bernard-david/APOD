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
    }, [])

    return (
        <div>
            <Link to="/nasaimage"><button className="btn btn-primary">See the Photo!</button></Link>
            {
                favorites ? 
                favorites.map((favorite) => {
                    return <AllFavorites favorite={favorite}/>
                }) : ""
            }
        </div>
    )
}

export default Home;