import React from "react";
import "../style/Register.css";
function Register() {
  return (
    <div className="register">
      <span className="registerTittle">ثبت نام</span>
      <form className="registerForm">
        <label> نام کاربری</label>
        <input
          className="registerInput"
          type="text"
          placeholder="نام کاربری خود را بنویسید"
        />
        <label>پست الکترونیکی</label>
        <input
          className="registerInput"
          type="text"
          placeholder="پست الکترونیکی خود را بنویسید"
        />
        <label> رمز عبور</label>
        <input
          className="registerInput"
          type="text"
          placeholder=" رمز عبور خود را بنویسید"
        />
        <button className="registerButton">ورود</button>

        <button className="registerLoginButton">
          حساب کاربری دارید؟ وارد شوید
        </button>
      </form>
    </div>
  );
}
export default Register;
