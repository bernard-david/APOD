import { Link } from "@reach/router";
import React from "react";

//Navbar for a consitent header across the app, utilizes Bootstrap for quick and easy styling 

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "rgba(223,224,226,.6)"}}>
            <div className="container ps-5">
                <span className="navbar-brand mb-0 h1">APOD (Astronomy Picture of the Day)</span>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active">Home</Link>
                        <Link to="/nasaimage" className="nav-link active">Today's Image</Link>
                        <Link to="/randomimage" className="nav-link active">Random Image</Link>
                    </div>
                </div>
            </div>
            
        </nav>
        
    )
}

export default Navbar;