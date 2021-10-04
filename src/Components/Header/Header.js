import React from 'react';
import './Header.css'
import logo from '../../../src/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            {/* Logo for the website design */}
            <div className='logo'>
                <img src={logo} alt="" width='190'/>
            </div>
            <div className='nav-options'>
                {/* Navigation Bar Starts Here */}
                <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Features</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;