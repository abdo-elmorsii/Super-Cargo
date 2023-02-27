import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
      <div className="image-and-words">
          <img src="../assets/Ship.jpg" style={{ width: "100%" }} />
          <div className="words">
            <h3></h3>
            <h1 className="words-size">
              #Place For Your <span style={{color:"blue"}}>Transport</span> Solutions
            </h1>
            <div className="More-Info">
                <button className="Read">Read More</button>
                <button className="Free">Free Quote</button>
            </div>
          </div>
        </div>
        <div className="image-and-words">
          <img src="../assets/cars.jpg" style={{ width: "100%" }} />
          <div className="words">
            <h3></h3>
            <h1 className="words-size">
              #Place For Your <span style={{color:"blue"}}>Logictics</span> Solutions
            </h1>
            <div className="More-Info">
                <button className="Read">Read More</button>
                <button className="Free">Free Quote</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
