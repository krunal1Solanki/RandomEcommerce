import React, { useState } from "react";
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="headerContainer">
      <div className="topSection">
        <div className="brandWrapper">
          <div
            className="menuToggle"
            onClick={() => setMenuActive(!menuActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="brandLogo">
            <img src="/assets/images/Logo.png" alt="Logo" width={25} height={25} />
          </div>
        </div>
        <nav className="centerNavigation">
          <a href="/">Logo</a>
        </nav>
        <div className="actionIcons">
          <img src="/assets/images/search-normal.png" alt="Search Logo" />
          <img src="/assets/images/heart.png" alt="Heart Icon" />
          <img src="/assets/images/shopping-bag.png" alt="Shopping Bag Icon" />
          <img
            className="hideOnMobile"
            src="/assets/images/profile.png"
            alt="Profile"
          />
          <span>ENG ▼</span>
        </div>
      </div>
      <nav className="bottomSection desktopMenu">
        <a href="/#">SHOP</a>
        <a href="/#">SKILLS</a>
        <a href="/#">STORIES</a>
        <a href="/#">ABOUT</a>
        <a href="/#">CONTACT US</a>
      </nav>
      {menuActive && (
        <nav className="mobileNavigation">
          <a href="/#">SHOP</a>
          <a href="/#">SKILLS</a>
          <a href="/#">STORIES</a>
          <a href="/#">ABOUT</a>
          <a href="/#">CONTACT US</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
