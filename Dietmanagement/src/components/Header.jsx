import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Header.css'; // Import the external CSS file
import { Link } from 'react-router-dom';


function PositionedMenu() {
    const [anchorEl, setAnchorEl] = React.useState < null | HTMLElement > (null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
}
const handleClose = () => {
        setAnchorEl(null);
};

const Header = () => {
    return (
        <header className="header">
                <div>
                    <Button
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Dashboard
                    </Button>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            <h1 className="logo">Diet Manager</h1>
            <nav className="nav">
                <ul className="navList">
                    <li className="navItem"><Link to={'/obesityCalculator'}>obesityCalculator</Link></li>
                    <li className="navItem"><Link to={'/mealPlanner'}>Meal Planner</Link></li>
                    <li className="navItem"><Link to={'/caloriesCalculator'}>Calories Calculator</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header