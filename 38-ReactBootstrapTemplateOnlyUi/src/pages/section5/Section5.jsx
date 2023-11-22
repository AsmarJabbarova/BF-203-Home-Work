import React from "react";
import "./section5.scss";
function Section5() {
  return (
    <div className="section5">
      <div>
        <h3>PORTFOLIO</h3>
      </div>
      <div>
        <h1>Recent Projects</h1>
      </div>
      <div className="boxs">
        <div className="up">
          <div className="box1">
            <div>
              <h2>STATIONRY</h2>
            </div>
            <div>
              <p>A yellow pencil with envolopes on a clean,blue background!</p>
            </div>
          </div>
          <div className="box2">
            <div>
              <h2>ICE CREAM</h2>
            </div>
            <div>
              <p>
                A dark blue background with a colored pencil,a clip,and a tiny
                ice cream cone!
              </p>
            </div>
          </div>
        </div>
        <div className="down">
          <div className="box3">
            <div>
              <h2>STRAWBERRIES</h2>
            </div>
            <div>
              <p>
                Strawberies are such a tasty snack, especially with a little
                sugar on top!
              </p>
            </div>
          </div>
          <div className="box4">
            <div>
              <h2>WIRKSPACE</h2>
            </div>
            <div>
              <p>
                A yellow workspace with some scissors,pencil,and other objects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
