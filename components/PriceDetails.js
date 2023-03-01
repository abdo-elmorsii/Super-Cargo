import React from "react";

const PriceDetails = ({ title, price }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="price-details">
        <h1>{price}</h1>
        <span>/ Month</span>
      </div>
      <hr></hr>
      <div className="web-info">
        <div>
          <h3>HTML & CSS3</h3>
        </div>
        <div>
          <h3>Bootstrap v5</h3>
        </div>
        <div>
          <h3>FontAwesome Icons</h3>
        </div>
        <div>
          <h3>Responsive Layout</h3>
        </div>
        <div>
          <h3>Cross-browser Support</h3>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
