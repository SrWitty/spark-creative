import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow" style={{ backgroundColor: '#da89ff', color: '#ffffff' }}>
            <div className="container">
                <a className="navbar-brand animated-item" href="/">Spark Creative</a>
                <button className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`} type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white animated-item" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white animated-item" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white animated-item" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white animated-item" href="#team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white animated-item" href="/blog">Our Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
