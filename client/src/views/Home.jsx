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
            <div className="d-flex gap-3 justify-content-center">
                <Link to="/nasaimage"><button className="btn btn-primary">Today's Image</button></Link>
                <Link to="/randomimage"><button className="btn btn-primary">Random Image</button></Link>
            </div>
            <div className="d-flex flex-wrap justify-content-start gap-3 mt-3">
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