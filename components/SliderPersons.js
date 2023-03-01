import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderInfo from "./SliderInfo";
export default function SliderPerson() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div >
      <Slider {...settings}>
        <div>
          <SliderInfo img="../assets/sliderimg1.jpg" />
        </div>
        <div>
          <SliderInfo img="../assets/sliderimg2.jpg" />
        </div>
        <div>
          <SliderInfo img="../assets/sliderimg3.jpg" />
        </div>
        <div>
          <SliderInfo img="../assets/sliderimg4.jpg" />
        </div>
        <div>
          <SliderInfo img="../assets/sliderimg4.jpg" />
        </div>
        <div>
          <SliderInfo img="../assets/sliderimg4.jpg" />
        </div>
      </Slider>
    </div>
  );
}
