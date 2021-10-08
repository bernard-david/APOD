import React from "react";
import { Link } from "@reach/router";

const Home = props => {
    return (
        <div>
            <Link to="/nasaimage"><button className="btn btn-primary">See the Photo!</button></Link>
        </div>
    )
}

export default Home;