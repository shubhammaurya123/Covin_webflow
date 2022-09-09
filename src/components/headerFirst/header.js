import React from "react";
import leftIcon from "../Icon/leftIcon.png";
import "./header.css";

const header = () => {
  return (
    <div className="headerFirst">
      <div className="header-1">
        <div className="leftText">
          <div className="box--sticky-1"></div>
          <h1 className="Text-1">
            <span className="Xtext">3X</span>{" "}
            <span>
              {" "}
              your contact center <br /> performance with
            </span>
          </h1>
          <div className="covinDesc">
            Convin improves agent performance, enhances customer experience, and{" "}
            <br />
            increases conversions with conversation intelligence.
          </div>
          <button className="Signup_1 btn_1">Signup</button>
        </div>
        <div className="rightIcon-1">
          <img src={leftIcon} alt="rightImage" className="rightImage"></img>
        </div>
      </div>
     
    </div>
  );
};
export default header;
