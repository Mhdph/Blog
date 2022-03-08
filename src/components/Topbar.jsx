import React from "react";
import "../style/Topbar.css";

function Topbar() {
  return (
    <div className="top">
      <div className="topRight">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-telegram"></i>
      </div>
      <div className="topCenter"></div>
      <div className="topLeft"></div>
    </div>
  );
}

export default Topbar;
