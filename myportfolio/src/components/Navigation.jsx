import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <a href="#home">Sanjay Kumar</a>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;