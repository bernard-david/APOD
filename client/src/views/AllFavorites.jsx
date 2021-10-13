import React from "react";
import axios from "axios";

const AllFavorites = props => {
    const {favorite} = props;

    const deleteFavorite = _id => {
        axios.delete(`http://localhost:8000/api/nasaimages/delete/${_id}`)
            .then(() => props.update())
            .catch(err => console.log(err))
    }

    return (
        <div className="card mb-3" style={{width: "18em"}}>
            {favorite.media_type === "image" ? <img className="card-img-top" style={{maxHeight: "20em"}} src={favorite.hdurl} alt={favorite.title} /> : <img className="card-img-top" src={favorite.thumbnail} alt={favorite.title}/>}
            <div className="card-body">
                <h5 className="card-title">{favorite.title}</h5>
                <p className="card-text">{favorite.date}</p>
                <button className="btn btn-info me-3" onClick={() => deleteFavorite(favorite._id)}>UnFavorite</button>
            </div>
        </div>
    )
}

export default AllFavorites;