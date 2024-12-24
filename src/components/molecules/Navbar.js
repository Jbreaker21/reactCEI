import React from "react";
import "./Navbar.css";

const Navbar = ({ userImage, onMenuClick, onAccountSettingsClick }) => {
  return (
    <nav className="navbar">

      <button className="menu-button" onClick={onMenuClick}>
        ☰
      </button>

      <div className="logo-container d-flex gap-2">
        <div className="logo my-auto">CEI</div>

        <div className="slogan my-auto">
          <span>Centro de</span>
          <span>experiencia</span>
          <span>de innovación</span>
        </div>
      </div>

      <input type="text" className="search-bar" placeholder="Buscar..." />

      <div className="user-section">
        <img src={userImage} alt="User" className="user-picture" />
        <button
          className="account-settings-button"
          onClick={onAccountSettingsClick}
        >
          ⚙️
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
