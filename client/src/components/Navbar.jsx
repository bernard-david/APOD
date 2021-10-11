import { Link } from "@reach/router";
import React from "react";


const Navbar = props => {
    return (
        <div>
            <Link to="/">Home Page</Link>
            <br />
            <Link to="/favorites">Favorites</Link>
        </div>
        
    )
}

export default Navbar;