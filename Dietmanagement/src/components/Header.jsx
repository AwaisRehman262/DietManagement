import React from 'react';
import './Header.css'; // Import the external CSS file

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">Diet Manager</h1>
            <nav className="nav">
                <ul className="navList">
                    <li className="navItem"><a href="#">Home</a></li>
                    <li className="navItem"><a href="#">Plans</a></li>
                    <li className="navItem"><a href="#">Recipes</a></li>
                    <li className="navItem"><a href="#">Log In</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
