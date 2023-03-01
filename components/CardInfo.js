import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
const CardInfo = ({ image, title }) => {
  return (
    <div class="card card-info">
      <div className="image-container">
        <img src={image} class="card-img-top" alt="..." />
      </div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text" style={{ color: "#555", fontWeight: "400" }}>
          Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
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
