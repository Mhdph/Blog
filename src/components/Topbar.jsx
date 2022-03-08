import React from "react";
import "../style/Topbar.css";
import avatar from "../image/avatar.jpg";
function Topbar() {
  return (
    <div className="top">
      <div className="topRight">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-telegram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">خروج</li>
          <li className="topListItem">تماس با ما</li>
          <li className="topListItem">خانه</li>
          <li className="topListItem">نوشتن</li>
          <li className="topListItem">درباره ما</li>
        </ul>
      </div>
      <div className="topLeft">
        <img className="topImg" src={avatar} alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
