import React from "react";
import Icon1 from "../Icon/Icon1.png";
import Icon2 from "../Icon/Icon2.png";
import Icon3 from "../Icon/Icon3.png";
import "./header.css";
const header = () => {
  return (
    <div className="headerFour">
      <div className="textInHeaderFour">
        Different roles. Different problems.
        <br /> One solution.{" "}
      </div>
      <div className="FirstData">
        <img alt="Icon1" className="Icon1 animate__animated animate__backInLeft animate__delay-2s" src={Icon1}></img>
        <div className="textInHeaderFour-1">
          <span className="titleHeaderFour">For Leaders </span>
          <br /> <br />
          <span className="descInHeaderFour ">
           
            Increase Customer Lifetime Value by accelerating QA, scaling <br />
            automated coaching, and optimize for business drivers. <br />
            Simultaneously, reduce employee churn by investing in agent <br />
            performance and development.
          </span>
        </div>
      </div>
      <div className="FirstData ">
        <div className="textInHeaderFour-1">
          <span className="titleHeaderFour">For Managers </span>
          <br /> <br />
          <span className="descInHeaderFour ">
            {" "}
            Increase Customer Lifetime Value by accelerating QA, scaling <br />
            automated coaching, and optimize for business drivers. <br />
            Simultaneously, reduce employee churn by investing in agent <br />
            performance and development.{" "}
          </span>
        </div>
        <img alt="Icon1" className="Icon1 Icon2 animate__animated animate__backInRight animate__delay-3s" src={Icon2}></img>
      </div>
      <div className="FirstData">
        <img alt="Icon1" className="Icon1 animate__animated animate__backInLeft animate__delay-4s" src={Icon3}></img>
        <div className="textInHeaderFour-1">
          <span className="titleHeaderFour">For Agents </span>
          <br /> <br />
          <span className="descInHeaderFour">
            {" "}
            Increase Customer Lifetime Value by accelerating QA, scaling <br />
            automated coaching, and optimize for business drivers. <br />
            Simultaneously, reduce employee churn by investing in agent <br />
            performance and development.{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default header;
