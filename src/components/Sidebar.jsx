import React from "react";
import "../style/Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span cslassName="sidebarTitle">درباره من</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          لورم ایپسوم این متن ساختگی است که نمیدانم چه مینویسم چون خودم متن
          ساختگی را بوجود آوردم
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">دسته بندی ها</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">زندگی</li>
          <li className="sidebarListItem">موسیقی</li>
          <li className="sidebarListItem">استایل</li>
          <li className="sidebarListItem">ورزش</li>
          <li className="sidebarListItem">تکنولوژی</li>
          <li className="sidebarListItem">سینما</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="siderbarTitle">دنبال کردن من</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-telegram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
