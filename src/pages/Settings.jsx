import React from "react";
import Sidebar from "../components/Sidebar";
import "../style/Settings.css";
import avatar from "../image/avatar.jpg";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsDeleteTitle">پاک کردن حساب کاربری</span>
          <span className="settingsUpdateTitle">به روز رسانی حساب کاربری</span>
        </div>
        <form className="settingsForm">
          <label className="settingsil">عکس کاربری</label>
          <div className="settingPf">
            <img className="settingsImg" src={avatar} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>نام کاربری</label>
          <input type="text" placeholder="Mahdi" />
          <label>پست الکترونیکی</label>
          <input type="email" placeholder="Mahdiparivash@protonmail.con" />
          <label> رمز عبور</label>
          <input type="password" placeholder="******" />
          <button className="settingsSubmit">به روز رسانی</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
