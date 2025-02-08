
import React from 'react';
import { FaEnvelopeOpen, FaPhone, FaTwitter, FaFacebook } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="top-bar" id='top-bar'>
            <div className="container">
                <div className="d-flex justify-content-between">
                        <div className="float-left">
                                <div className="overflow-hidden whitespace-nowrap bg-green-100">
                                <a
                                        href="registration-form.php"
                                         className="inline-block text-lg text-green-800 font-semibold animate-marquee"
                                        >
                                        Admissions Open for Session 2025-26. Limited Seats. Apply Now.
                                        </a>
                                </div>
                        </div>

                        <div className="float-right">
                                <a href="#" className="text-decoration-none">
                                        <FaTwitter className="mr-2" style={{marginRight: "10px"}} />
                                </a>
                                <span className="mx-md-2 d-inline-block"></span>
                                <a href="#" className="text-decoration-none">
                                        <FaFacebook className="mr-2" style={{marginRight: "10px"}}/>

                                </a>
                                <span className="mx-md-2 d-inline-block"></span>
                                <a href="#" className="text-decoration-none">
                                        <FaEnvelopeOpen className="mr-2" style={{marginRight: "10px"}} />
                                </a>
                                <span className="mx-md-2 d-inline-block"></span>
                                <a href="#" className="text-decoration-none">
                                        <FaPhone className="mr-2" style={{marginRight: "10px"}} />
                                </a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

