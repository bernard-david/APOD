import React from "react";

const AllFavorites = props => {
    const {favorite} = props;

    return (
        <div class="card" style={{width: "18rem"}}>
            {favorite.media_type === "image" ? <img class="card-img-top" src={favorite.url} alt={favorite.title} /> : <iframe title="space-video" src={favorite.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen/>}
            <div class="card-body">
                <h5 class="card-title">{favorite.title}</h5>
                <p class="card-text">{favorite.date}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default AllFavorites;