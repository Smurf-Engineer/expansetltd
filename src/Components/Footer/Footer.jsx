import React, { useContext } from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";

import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  const { theme } = useContext(ShopContext);
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <Link className="nav-logo-link" to="/" onClick={handleLogoClick}>
          <img src={footer_logo} alt="EXPANSET Logo" />
          <p className={`footer_${theme}`}>EXPANSET</p>
        </Link>
      </div>
      <ul className={"footer-links_" + theme}>

        <li>
          {" "}
          <Link className={`link_${theme}`} to="/about " onClick={scrollToTop}>
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link className={`link_${theme}`} to="/contact" onClick={scrollToTop}>
            Contact Us
          </Link>
        </li>
      </ul>
      
      <div className={`footer-copyright_${theme}`}>
        <hr className={`hr_${theme}`} />
        <p>Copyright @ {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
