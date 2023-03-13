/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="image-and-words">
          <img src="/assets/ship.jpg" style={{ width: "100%" }} />
          <div className="words">
            <h3></h3>
            <h1 className="words-size">
              #Place For Your <span style={{ color: "#88f" }}>Transport</span>{" "}
              Solutions
            </h1>
            <div className="More-Info">
              <button className="Read">
                {" "}
                <Link
                  href="/services"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    padding: "15px",
                  }}
                >
                  Read More
                </Link>
              </button>
              <button className="Free">
                <Link
                  href="/contact"
                  style={{
                    textDecoration: "none",
                    padding: "11px",
                    color: "black",
                  }}
                >
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="image-and-words">
          <img src="/assets/cars.jpg" style={{ width: "100%" }} />
          <div className="words">
            <h3></h3>
            <h1 className="words-size">
              #Place For Your <span style={{ color: "blue" }}>Logistics</span>{" "}
              Solutions
            </h1>
            <div className="More-Info">
              <button className="Read">
                <Link
                  href="/services"
                  style={{
                    textDecoration: "none",
                    padding: "15px",
                    color: "white",
                  }}
                >
                  Read More
                </Link>
              </button>
              <button className="Free">
                <Link
                  href="/contact"
                  style={{
                    textDecoration: "none",
                    padding: "11px",
                    color: "black",
                  }}
                >
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
