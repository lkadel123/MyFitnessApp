
import React from 'react';
import { FaEnvelopeOpen, FaPhone, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="top-bar" id='top-bar'>
            <div className="container">
                <div className="d-flex justify-content-around">
                <div className="relative" style={{width:"77%"}}>
                        <div className="overflow-x-auto whitespace-nowrap bg-green-100">
                         <a
                         href="#"
                         className="inline-block text-green-800 font-semibold animate-marquee px-3"
                           >
                                 Admissions Open for Session 2025-26. Limited Seats. Apply Now.
                         </a>
                        </div>
                </div>

                        <div className="float-right">
                                <a href="#" className="text-decoration-none">
                                        <FaPhone className="mr-2" style={{marginRight: "10px"}} />+91 8847528652
                                </a>
                                <span className="mx-md-2 d-inline-block"></span>
                                <a href="#" className="text-decoration-none">
                                        <FaXTwitter className="mr-2" style={{marginRight: "10px"}} />
                                </a>
                                <span className="mx-md-2 d-inline-block"></span>
                                <a href="#" className="text-decoration-none">
                                        <FaFacebook className="mr-2" style={{marginRight: "10px"}}/>

                                </a>
                                <span className="mx-md-2 d-inline-block"></span>
                                <a href="#" className="text-decoration-none">
                                        <FaYoutube className="mr-2" style={{marginRight: "10px"}} />
                                </a>
                                <span className="mx-md-2 d-inline-block"></span>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

