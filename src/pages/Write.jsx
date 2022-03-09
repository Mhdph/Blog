import React from "react";
import "../style/Write.css";
function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://thesavvyheart.com/wp-content/uploads/2019/12/Minimal-2020-Desktop-Calendar-Wallpaper-Free-Download-by-The-Savvy-Heart-Interior-Design-Studio.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label className="labelForm" htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="عنوان"
            className="writeInput"
            autoFocus="true"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="روایت خود را بنویسد"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">انتشار</button>
      </form>
    </div>
  );
}

export default Write;
