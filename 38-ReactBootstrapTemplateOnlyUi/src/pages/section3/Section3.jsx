import React from "react";
import "./section3.scss";
import { IoIosPhonePortrait } from "react-icons/io";
import { SlMustache } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { LuPencil } from "react-icons/lu";
function Section3() {
  return (
    <div className="section3">
      <div className="ser">
        <h6>SERVICES</h6>
      </div>
      <div className="wht">
        <h1>What We Offer</h1>
      </div>
      <div className="back">
        <div className="res">
          <div >
            <span>
              <IoIosPhonePortrait />
            </span>
          </div>
          <div>
            <h4>Responsive</h4>
          </div>
          <div>
            <h6>Looks great on any screen size!</h6>
          </div>
        </div>
        <div className="res">
          <div>
            <span>
              <LuPencil />
            </span>
          </div>
          <div>
            <h4>Redesigned</h4>
          </div>
          <div>
            <h6>Freshly redesigned for Bootstrap 5.</h6>
          </div>
        </div>
        <div className="res">
          <div>
            <span>
              <SlLike />
            </span>
          </div>
          <div>
            <h4>Favorited</h4>
          </div>
          <div>
            <h6>Millions of users Start Bootstrap!</h6>
          </div>
        </div>
        <div className="res">
          <div>
            <span>
              <SlMustache />
            </span>
          </div>
          <div>
            <h4>Question</h4>
          </div>
          <div>
            <h6>I mustache you a question...</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
