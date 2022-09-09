import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Icon4  from '../Icon/Icon4.png'
import Icon5  from '../Icon/Icon5.png'
import Icon6  from '../Icon/Icon6.png'
import './carousel.css'
const carousel = () => {
  return (
    <div style={{ display: "block", width: 850, padding: 30 }} className ="carousal-1">
      <div className="carousel-text">Trust Convin. We Deliver Excellence.</div>
      <div className="carousel-text-1">See how our clients transformed their customer conversations.</div>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 IconSize"
            src={Icon4}
            alt=" One"
          />
          <Carousel.Caption>
         
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 IconSize"
            src={Icon5}
            alt=" Two"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>  
        <Carousel.Item interval={1500}>
          <img 
            className="d-block w-100 IconSize"
            src={Icon6}
            alt="three"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
};

export default carousel;
