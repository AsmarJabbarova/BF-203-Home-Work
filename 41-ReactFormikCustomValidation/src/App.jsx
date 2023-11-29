import { useState } from "react";
import myImage from "./imgs.png";
import yourImage from "./Slider dots.png";
import capzul from "./capzul.png";
import calendar from "./calendar.png";
import google from "./google.png";
import appStore from "./appStore.png";
import googlePlay from "./googlePlay.png";
import "./App.scss";
import { useFormik } from "formik";

const validate = (values) => {
  let phone = /^(?:\+994|994|0)(5[015]|7[07]|50|51|55|70|77|99)\d{7}$/;
  let letters = /^[A-Za-z]+$/;
  let password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Firstname required!";
  } else if (values.firstName.length < 3) {
    errors.firstName = "3 simvoldan az ola bilmez";
  } else if (!values.firstName.match(letters)) {
    errors.firstName = "simvol bosluq ve ya reqem ola bilmez";
  } else if (values.firstName.length > 10) {
    errors.firstName = "uzunluğu 10 simvoldan çox ola bilməz.";
  }

  if (!values.lastName) {
    errors.lastName = "LastName required!";
  } else if (values.lastName.length < 3) {
    errors.firstName = "3 simvoldan az ola bilmez";
  } else if (!values.lastName.match(letters)) {
    errors.lastName = "reqem ola bilmez";
  } else if (!values.firstName.match(letters)) {
    errors.firstName = "simvol ola bilmez";
  } else if (values.lastName.length > 10) {
    errors.lastName = "uzunluğu 10 simvoldan çox ola bilməz.";
  } else if (values.lastName.trim() == " ") {
    errors.lastName = "boşluq ola bilməz.";
  }

  if (!values.email.match(regex)) {
    errors.email = "duzgun email daxil edin";
  }
  if (!values.password.match(password)) {
    errors.password =
      "Passwordun uzunlugu min 6, min 1 simvol,1 boyuk, 1 kicik ,min 1 reqem olmalidir";
  }
  if (!values.email.match(phone)) {
    errors.phoneNumber = "standartlara uygun deyil";
  }

  return errors;
};
function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
      lastName: "",
      birth: "",
      confirmPassword: "",
      phoneNumber: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="body">
        <div className="main">
          <div className="left">
            <div className="title">
              <p>Social media shared today, tomorrow or by location</p>
            </div>
            <div className="img">
              <img src={myImage} alt="Benim Resmim" />
            </div>
            <div className="dots">
              <img src={yourImage} alt="Benim Resmim" />
            </div>
          </div>
          <div className="right">
            <div className="capzul">
              <div>
                {" "}
                <img src={capzul} alt="Benim Resmim" />
              </div>
              <div>
                {" "}
                <p>Capzul</p>
              </div>
            </div>
            <div className="creat">
              <h1>Create account</h1>
              <p>For business, band or celebrity.</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="inputs">
                <div className="inputLeft">
                  <label htmlFor="">Firts Name</label> <br />
                  <input
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.firstName ? (
                    <div style={{ color: "red" }}>
                      {" "}
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                  <label htmlFor="">Email or phone number</label>
                  <br />
                  <input type="email" name="email" />
                  <br />
                  {formik.errors.email ? (
                    <div style={{ color: "red" }}> {formik.errors.email}</div>
                  ) : null}
                  <label htmlFor="">Password</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    style={
                      formik.errors.password ? { borderColor: "red" } : null
                    }
                  />
                  {formik.errors.password ? (
                    <div style={{ color: "red" }}>
                      {" "}
                      {formik.errors.password}
                    </div>
                  ) : null}
                  <br />
                </div>

                <div className="inputRight">
                  <label htmlFor="">Last Name</label> <br />
                  <input
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                  <br />
                  {formik.errors.lastName ? (
                    <div style={{ color: "red" }}>
                      {" "}
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input type="data" name="birth" />
                  {formik.errors.phoneNumber ? (
                    <div style={{ color: "red" }}>
                      {" "}
                      {formik.errors.phoneNumber}
                    </div>
                  ) : null}
                  <img className="data" src={calendar} alt="Benim Resmim" />
                  <br />
                  <label htmlFor="">Confirm password</label>
                  <br />
                  <input type="password" name="confirmPassword" />
                </div>
              </div>
              <div className="remem">
                <div className="leftRemem">
                  <input type="checkbox" />
                  <label htmlFor="">Remember me</label>
                  <br />
                  <input type="checkbox" />
                  <label htmlFor="" className="agree">
                    I agree to all the Terms and Privacy policy{" "}
                  </label>
                </div>
                <div className="rightRemem">
                  <p>Forgot password?</p>
                </div>
              </div>
            </form>
            <div className="buttons">
              <button className="creat" type="submit">
                Create account
              </button>
              <button className="sign">
                <img src={google} alt="Benim Resmim" />
                <p>Sign-in with google</p>
              </button>
            </div>
            <div className="dont">
              <p className="have">
                Don’t have an account? <a>Log In</a>{" "}
              </p>
            </div>
            <div className="download">
              <img src={googlePlay} alt="Benim Resmim" />
              <img src={appStore} alt="Benim Resmim" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
