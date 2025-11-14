import React from "react";
import { NavLink } from "react-router-dom";
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">

          {/* 1. Logo & About */}
          <div className="col-md-3">
            <h3 className="fw-bold">MyWebsite</h3>
            <p className="mt-3">
              We provide high-quality services and professional support
              to help your business grow.
            </p>
          </div>

          {/* 2. Menu Links */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink className="footer-link" to="/">Home</NavLink></li>
              <li><NavLink className="footer-link" to="/about">About</NavLink></li>
              <li><NavLink className="footer-link" to="/service">Service</NavLink></li>
              <li><NavLink className="footer-link" to="/blog">Blog</NavLink></li>
              <li><NavLink className="footer-link" to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* 3. Contact Details */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Contact</h5>
            <p><i className="bi bi-geo-alt"></i> Surat, Gujarat, India</p>
            <p><i className="bi bi-telephone"></i> +91 98765 43210</p>
            <p><i className="bi bi-envelope"></i> info@mywebsite.com</p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          {/* 4. Contact Form  */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Contact Form</h5>

            <form>
              <input type="text" className="form-control mb-2" placeholder="Your Name" />
              <input type="email" className="form-control mb-2" placeholder="Your Email" />
              <textarea className="form-control mb-2" rows="2" placeholder="Message"></textarea>
              <button className="btn btn-primary w-100">Send</button>
            </form>
          </div>

        </div>

        <hr className="mt-4" />
        <p className="text-center mb-0">© 2025 MyWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
