import React from 'react';
import './Header.css'; // Import the external CSS file
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">Diet Manager</h1>
            <nav className="nav">
                <ul className="navList">
                    <li className="navItem"><Link to={'/obesityCalculator'}>obesityCalculator</Link></li>
                    <li className="navItem"><Link to={'/mealPlanner'}>Meal Planner</Link></li>
                    <li className="navItem"><Link to={'/caloriesCalculator'}>Calories Calculator</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
