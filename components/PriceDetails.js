import React from "react";
import { TiTick } from "react-icons/ti";
const PriceDetails = ({ title, price }) => {
  return (
    <div className="price-div card-info">
      <h4 style={{ color: "#374e71", margin: "15px" }}>{title}</h4>
      <div className="price-details">
        <h1>{price}</h1>
        <span>/ Month</span>
      </div>
      <hr></hr>
      <div className="web-info">
        <div>
          <TiTick className="icon-tik" />
          <h5>HTML & CSS3</h5>
        </div>
        <div>
          <TiTick className="icon-tik" />

          <h5>Bootstrap v5</h5>
        </div>
        <div>
          <TiTick className="icon-tik" />

          <h5>FontAwesome Icons</h5>
        </div>
        <div>
          <TiTick className="icon-tik" />

          <h5>Responsive Layout</h5>
        </div>
        <div>
          <TiTick className="icon-tik" />
          <h5>Cross-browser Support</h5>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
