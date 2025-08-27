import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavbarLinks, PopupItems } from "../../static";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar__logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navbar-links">
            <ul className="navbar__collection">
              {NavbarLinks.map((item, index) => (
                <li className="navbar__item" key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <button>Отправить заявку</button>
            <select name="langs" id="langs">
              <option value="ru">РУС</option>
              <option value="eng">ENG</option>
              <option value="uz">UZ</option>
            </select>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <div className={`popup-menu ${isOpen ? "active" : ""}`}>
          <ul>
            {PopupItems.map((item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
