import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaInfoCircle, FaUsers, FaDumbbell, FaBlog, FaEnvelope, FaSignInAlt } from 'react-icons/fa';
import './NavBar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div id="sticky-wrapper" className="sticky-wrapper">
            <header className="site-navbar js-sticky-header site-navbar-target" role="banner" style={{ marginTop: "8px", width: '100%' }}>
                <div className="container">
                    <div className="align-items-center position-relative d-flex justify-content-between">
                        <div className="site-logo">
                            <Link to="/" className="text-white">
                                <h3 >Army Fitness Academy</h3>
                            </Link>
                        </div>

                        <div>
                            <nav className="site-navigation text-right ml-auto" role="navigation">
                                <ul className={`site-menu main-menu js-clone-nav ml-auto ${menuOpen ? '' : 'd-none'} d-lg-block`}>
                                    <li>
                                        <Link to="/" className="nav-link" onClick={toggleMenu} style={{ fontSize: "18px", display: "flex", alignItems: "center", gap: "8px", color: "#fff" }}>
                                            <FaHome size={18} /><span>Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" onClick={toggleMenu} className="nav-link" style={{ fontSize: "18px", display: "flex", alignItems: "center", gap: "8px", color: "#fff" }}>
                                            <FaInfoCircle size={18} /><span>About</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/trainer" className="nav-link" onClick={toggleMenu} style={{ fontSize: "18px", display: "flex", alignItems: "center", gap: "8px", color: "#fff" }}>
                                            <FaDumbbell size={18} /><span>Trainer</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/programs" className="nav-link" onClick={toggleMenu} style={{ fontSize: "18px", display: "flex", alignItems: "center", gap: "8px", color: "#fff" }}>
                                            <FaBlog size={18} /><span>Programs</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="nav-link" onClick={toggleMenu} style={{ fontSize: "18px", display: "flex", alignItems: "center", gap: "8px", color: "#fff" }}>
                                            <FaEnvelope size={18} /><span>Contact Us</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <button className="btn btn-slide-diagonal">
                                            <FaSignInAlt size={18} />Register Here
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="toggle-button d-inline-block d-lg-none">
                            <a
                                href="#"
                                className="site-menu-toggle py-5 js-menu-toggle text-black"
                                onClick={toggleMenu}
                            >
                                <FaBars />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;

