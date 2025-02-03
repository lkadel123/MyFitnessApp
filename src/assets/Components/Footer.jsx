import React from 'react';
import './Footer.css'; // Link to your CSS file

const Footer = () => {
  return (
    <div className="footer-area footer-padding">
      <div className="container">
        <div className="rows d-flex justify-content-between">
          {/* Logo and Description */}
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="single-footer-caption mb-30">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="free-falcon-logo-design.jpg" alt="Logo" />
                  </a>
                </div>
                <div className="footer-tittle">
                  <div className="footer-pera">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Offers &amp; Discounts</a></li>
                  <li><a href="#">Get Coupon</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* New Products */}
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>New Products</h4>
                <ul>
                  <li><a href="#">Woman Cloth</a></li>
                  <li><a href="#">Fashion Accessories</a></li>
                  <li><a href="#">Man Accessories</a></li>
                  <li><a href="#">Rubber made Toys</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Frequently Asked Questions</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Report a Payment Issue</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="rows">
          <div className="col-xl-7 col-lg-7 col-md-7">
            <div className="footer-copy-right">
              <p>
                Copyright &copy; {new Date().getFullYear()} All rights reserved | 
                This template is made with <i class="fas fa-heart" style={{color: "red"}}></i> by 
                <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">@yagya</a>
              </p>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5">
            <div className="footer-copy-right f-right">
              {/* Social Icons */}
              <div className="footer-social " style={{display: "flex", justifyContent: "flex-end"}}>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-behance"></i></a>
                <a href="#"><i className="fas fa-globe"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
