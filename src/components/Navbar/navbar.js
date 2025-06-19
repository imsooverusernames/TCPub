import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/Logo.png";
import { ReactComponent as GlobeIcon } from "../../assets/svg/Nav_svg/Globe.svg";
import { ReactComponent as LoginIcon } from "../../assets/svg/Nav_svg/Login.svg";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./navbar.css";

const Navbar = () => {
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "DE" : "EN"));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const { pathname } = useLocation();
  const buildHashLink = (hash) => (pathname === "/" ? `#${hash}` : `/#${hash}`);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" aria-label="Homepage">
          <img src={Logo} alt="Company Logo" />
        </Link>
      </div>

      {/* Hamburger Button (visible on mobile) */}
      <button
        type="button"
        className={`ham-button ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        aria-label="Toggle Menu"
      >
        <svg
          fill="#FAD53E"
          className="hamburger"
          viewBox="0 0 100 100"
          width="20"
        >
          <rect
            className="line top"
            width="80"
            height="10"
            x="10"
            y="15"
            rx="5"
          />
          <rect
            className="line middle"
            width="80"
            height="10"
            x="10"
            y="45"
            rx="5"
          />
          <rect
            className="line bottom"
            width="80"
            height="10"
            x="10"
            y="75"
            rx="5"
          />
        </svg>
      </button>

      {/* Main Navigation */}
      <nav
        id="primary-navigation"
        className={`hamburger-links ${menuOpen ? "open" : ""}`}
        aria-label="Main Navigation"
      >
        <ul className="navbar-links">
          <li>
            <HashLink
              to={buildHashLink("events")}
              onClick={() => setMenuOpen(false)}
            >
              Events
            </HashLink>
          </li>
          <li>
            <HashLink
              to={buildHashLink("about")}
              onClick={() => setMenuOpen(false)}
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              to={buildHashLink("open-mic")}
              onClick={() => setMenuOpen(false)}
            >
              Stand-up
            </HashLink>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </Link>
          </li>
        </ul>

        <div className="buttons">
          <button
            type="button"
            className="svg-buttons"
            onClick={toggleLanguage}
            aria-label="Toggle Language"
          >
            <GlobeIcon className="icon" role="img" aria-hidden="true" focusable="false" />
            <span className="language-code">{language}</span>
          </button>

          <button type="button" className="svg-buttons" aria-label="Login">
            <LoginIcon className="icon" role="img" aria-hidden="true" focusable="false" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
