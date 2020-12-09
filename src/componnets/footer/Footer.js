import React from "react";
import "./Footer.css";
// import Button  from '../button/Button';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a
              target="blank"
              href="https://www.instagram.com/cristiannoh15/?hl=en"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/cristiannoh15/"
              target="blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href="mailto:cgsaldanasbd@gmail.com"
              target="blank"
              aria-label="Envelope"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
        <div className="developer-wrapper">
          <a
            className="a-tag-developer"
            target="blank"
            href="https://bengriffin-chi.vercel.app/"
          >
            <small className="website-rights">Created By Ben Griffin</small>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
