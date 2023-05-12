import React from "react";

const Navbar=({children})=>{
    return(
        <nav className="navbar">
            <h1>Inzamamul Hasan</h1>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">Projects</a>
            </div>
            {children}
        </nav>
    )
}
export default Navbar;