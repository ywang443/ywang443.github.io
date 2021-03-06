import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container footer border-top">
      <h6 className="text-dark mb-4">SweetHome Ltd.</h6>

      <p className="text-secondary">
        1st Floor, No: 666, 0 Sussex Dr, K1A 0U0
      </p>
      <p className="text-secondary mb-4">Ottawa, ON, 613-613-NICE</p>
      <div className="socialIcons mb-5">
        <img src="./imgs/icons/twitter.png" alt="Twitter" />
        <img src="./imgs/icons/instagram.png" alt="Instagram" />
        <img src="./imgs/icons/linkedin.png" alt="LinkedIn" />
      </div>

      <div className="d-flex justify-content-between flex-column flex-sm-row mb-3">
        <div className="mb-2">
          <Link to="/" className="text-secondary mr-4">
            Home
          </Link>
          <Link to="/about" className="text-secondary mr-4">
            About us
          </Link>
          <Link to="/contact" className="text-secondary mr-4">
            Contact
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Footer;
