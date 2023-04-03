import React from "react"

function Navbar() {
    return (
        <nav className="navbar">
            <img src="../images/dezeen.jpg" className="logo" />
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;