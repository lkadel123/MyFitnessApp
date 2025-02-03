
import React from 'react';
import { FaEnvelopeOpen, FaPhone, FaTwitter, FaFacebook } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="top-bar" id='top-bar'>
            <div className="container">
                <div className="d-flex justify-content-between">
                        <div className="float-left">
                                <a href="#" className="text-decoration-none">
                                        <FaEnvelopeOpen className="mr-2" style={{marginRight: "10px"}} />
                                        <span className="d-none d-md-inline-block">info@yourdomain.com</span>
                                </a>
                                <span className="mx-md-2 d-inline-block"></span>
                                <a href="#" className="text-decoration-none">
                                        <FaPhone className="mr-2" style={{marginRight: "10px"}} />
                                        <span className="d-none d-md-inline-block">1+ (234) 5678 9101</span>
                                </a>
                        </div>

                        <div className="float-right">
                                <a href="#" className="text-decoration-none">
                                        <FaTwitter className="mr-2" style={{marginRight: "10px"}} />
                                        <span className="d-none d-md-inline-block">Twitter</span>
                                </a>
                                <span className="mx-md-2 d-inline-block"></span>
                                <a href="#" className="text-decoration-none">
                                        <FaFacebook className="mr-2" style={{marginRight: "10px"}}/>
                                        <span className="d-none d-md-inline-block">Facebook</span>
                                </a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

