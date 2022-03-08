import React from "react";
import "../style/Header.css";
import header from "../image/Header.webp";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesSm">React & Node</span>
        <span className="headerTitlesLg">Blog</span>
      </div>
      <img className="headerImg" src={header} alt="" />
    </div>
  );
}

export default Header;
