import { useState } from "react";
import myImage from "./imgs.png";
import yourImage from "./Slider dots.png";
import capzul from "./capzul.png";
import calendar from "./calendar.png";
import google from "./google.png";
import appStore from "./appStore.png";
import googlePlay from "./googlePlay.png";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

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
            <div className="inputs">
              <div className="inputLeft">
                <label htmlFor="">Firts Name</label> <br />
                <input type="text" />
                <br />
                <label htmlFor="">Email or phone number</label>
                <br />
                <input type="email" />
                <br />
                <label htmlFor="">Password</label>
                <br />
                <input type="password" />
              </div>
              <div className="inputRight">
                <label htmlFor="">Last Name</label> <br />
                <input type="text" />
                <br />
                <label htmlFor="">Date of birth (MM/DD/YY)</label>
                <br />
                <input  type="data" />
                <img className="data" src={calendar} alt="Benim Resmim" />
                <br />
                <label htmlFor="">Confirm password</label>
                <br />
                <input type="password" />
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
            <div className="buttons">
              <button className="creat">Create account</button>
              <button className="sign">
                <img src={google} alt="Benim Resmim" />
                <p>Sign-in with google</p>
              </button>
            </div>
            <div className="dont">
              <p className="have">Don’t have an account? <a>Log In</a> </p>
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
