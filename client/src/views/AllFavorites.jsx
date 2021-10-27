import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

//file contains the styling and structure of each individual image that has been saved/favorited

const AllFavorites = props => {
    //destructure favorite coming in from the home page where there is a loop that maps through all favorited images
    const {favorite} = props;

    //delete favorite from the database. sends and update to the home page through props (THIS CAN BE PUT INTO IT'S OWN COMPONENT)
    const deleteFavorite = _id => {
        axios.delete(`http://localhost:8000/api/nasaimages/delete/${_id}`)
            .then(() => props.update())
            .catch(err => console.log(err))
    }

    //returns the styling and structure for one single image card to be displayed on the home page
    return (
        <div className="card mb-3" id="favorite" style={{width: "18em"}}>
            {favorite.media_type === "image" ? <img className="card-img-top" style={{maxHeight: "20em", objectFit: "contain"}} src={favorite.url} alt={favorite.title} /> : <img className="card-img-top" src={favorite.thumbnail_url} alt={favorite.title}/>}
            <div className="card-body">
                <h5 className="card-title">{favorite.title}</h5>
                <p className="card-text">{favorite.date}</p>
                <div className="d-flex justify-content-center gap-2">
                    <Link to={`/nasaimage/${favorite._id}`}><button className="btn btn-info btn-sm">More Info</button></Link>
                    <button className="btn btn-secondary btn-sm me-3" onClick={() => deleteFavorite(favorite._id)}>UnFavorite</button>
                </div>
            </div>
        </div>
    )
}

export default AllFavorites;