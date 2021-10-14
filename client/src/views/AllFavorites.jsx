import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

const AllFavorites = props => {
    const {favorite} = props;

    const deleteFavorite = _id => {
        axios.delete(`http://localhost:8000/api/nasaimages/delete/${_id}`)
            .then(() => props.update())
            .catch(err => console.log(err))
    }

    return (
        <div className="card mb-3" id="favorite" style={{width: "18em"}}>
            {favorite.media_type === "image" ? <img className="card-img-top" style={{maxHeight: "20em", objectFit: "contain"}} src={favorite.hdurl} alt={favorite.title} /> : <img className="card-img-top" src={favorite.thumbnail} alt={favorite.title}/>}
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