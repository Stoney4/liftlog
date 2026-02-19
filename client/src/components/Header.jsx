// Header.jsx

import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logosec">
        <div className="logo">Liftlog</div>

        <img
          src="public/weight-logo.svg"
          className="icn menuicn"
          id="menuicn"
          alt="menu-icon"
        />
      </div>


      <div className="searchbar">
        <input type="text" placeholder="Search" />

        <div className="searchbtn">
          <img
            src="public/search-2903.svg"
            className="icn srchicn"
            alt="search-icon"
          />
        </div>
      </div>

      <div className="message">
        <div className="circle"></div>

        <img
          src="public/notification-bell-5743.svg"
          className="icn"
          alt="notifications"
        />

        <div className="dp">
          <img
            src="public/man-muscles-and-fitness-16863.svg"
            className="dpicn"
            alt="dp"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;