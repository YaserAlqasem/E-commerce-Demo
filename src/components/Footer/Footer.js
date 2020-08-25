import React, { Fragment } from 'react';

import './Footer.css';

const Footer = () => (
  <Fragment>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">E-commerce Demo Test <i> </i></p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="#">contact</a></li>
              <li><a href="#">about</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">AboutUs</a></li>
              <li><a href="#">Work with us</a></li>
              <li><a href="#">PrivacyAndPolicy</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
         <a href="#">E-commerce Demo Test</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fab fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
);

export default Footer;