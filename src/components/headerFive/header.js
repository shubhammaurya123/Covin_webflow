import React from "react";
import "./header.css";
import Icon7 from "../Icon/Icon7.png";
import Icon8 from "../Icon/Icon8.png"
const header = () => {
  return (
    <div className="headerFive">
      <div className="headerFivetext">Don't just take it from us. </div>
      <img className="ImgInHeaderFive" src={Icon7} alt="logo7"></img>
      <div className="headerFivetext">Your safety is our priority!</div>
      <img className="Icon8" src={Icon8} alt="logo8"></img>
      <div className="Aria_cover">
        <div className="headerFivetext black_top">
          Eliminate human dependency <br />
          with Convin’s AI engine
        </div>
        <div className="headerFivetext1">
           Go from Insight to Action
        </div>
        <button className='BookDemo headerFivebtn' > BookDemo</button>
      </div>
    </div>
  );
};

export default header;
