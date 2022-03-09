import React from "react";
import { Link } from "react-router-dom";
import "../style/Login.css";
export default function Login() {
  return (
    <div className="login">
      <span className="loginTittle">ورود به حساب کاربری</span>
      <form className="loginForm">
        <label>پست الکترونیکی</label>
        <input
          className="loginInput"
          type="text"
          placeholder="پست الکترونیکی خود را بنویسید"
        />
        <label> رمز عبور</label>
        <input
          className="loginInput"
          type="text"
          placeholder=" رمز عبور خود را بنویسید"
        />
        <button className="loginButton">ورود</button>
        <span className="forgetPassword">
          <a href="">رمز عبور خود را فراموش کرده اید؟</a>
        </span>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">
            ثبت نام
          </Link>
        </button>
      </form>
    </div>
  );
}
