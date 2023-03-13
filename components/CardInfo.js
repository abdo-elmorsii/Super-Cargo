/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
const CardInfo = ({ image, title, para }) => {
  return (
    <div class="card card-info">
      <div className="image-container" >
        <img src={image} class="card-img-top" alt="card" style={{height:"200px",objectFit:"cover"}}/>
      </div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text" style={{ color: "#555", fontWeight: "400" }}>
          {para}
        </p>
        <div className="Readmore">
          <div className="arrow">
            <HiOutlineArrowRight />
          </div>
          <div className="Readd">Read more</div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
