import React from 'react';
import "./navbar.css";

const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <ul className="nav-ul">
                    <li className="nav-li"><a href="/">Home</a></li>
                    <li className="nav-li"><a href="/signup">SignUp</a></li>
                    <li className="nav-li"><a href="login">Login</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
