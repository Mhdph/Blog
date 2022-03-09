import React from "react";
import "../style/Topbar.css";
import avatar from "../image/avatar.jpg";
import { Link } from "react-router-dom";
function Topbar() {
  const user = false;
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
          <li className="topListItem">{user && "خروج"}</li>
          <li className="topListItem">
            <Link className="link" to="/aboutus">
              تماس با ما
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              خانه
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              نوشتن
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              ارتباط با ما
            </Link>
          </li>
        </ul>
      </div>
      <div className="topLeft">
        {user ? (
          <img className="topImg" src={avatar} alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                ورود
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                ثبت نام
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
