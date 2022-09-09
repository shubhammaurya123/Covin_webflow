import React from "react";
import "./header.css";
import watchIcon from "../Icon/watchIcon.png";
import postiveIcon from '../Icon/PostiveIcon.png'
import dotIcon from '../Icon/dotIcon.png'
const header = () => {
  return (
    <div className="headerSecond">
      <div className="textItem1"> Convin's Automation Engine</div>
      <div className="CardItem-1">
        <div className="card-1 animate__animated animate__bounceIn animate__delay-1s">
          <img src={watchIcon} className="watchIcon" alt="watchIcon"></img>
          <div className="title">
            Automated <br />
            Call QA{" "}
          </div>
          <div className="desc">
            {" "}
            Monitor And Analyze 100% Calls Automatically Based On A Custom
            Scorecard.{" "}
          </div>
        </div>
        <div className="card-1 animate__animated animate__bounceIn animate__delay-2s">
        <img src={postiveIcon} className="watchIcon" alt="watchIcon"></img>
          <div className="title">
          Win Behavior <br />
          Analysis{" "}
          </div>
          <div className="desc">
            {" "}
            Identify Actions And Behaviors That Drive Positive And Negative Business Outcomes.{" "}
          </div>
        </div>
        <div className="card-1 animate__animated animate__bounceIn animate__delay-3s">
        <img src={dotIcon} className="watchIcon" alt="watchIcon"></img>
          <div className="title">
          Automated Agent <br />
          Coaching{" "}
          </div>
          <div className="desc">
            {" "}
            Automatically Create And Share Personalized Agent Coaching At Scale.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default header;
