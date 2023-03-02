import React from "react";

const SliderInfo = ({ img }) => {
  return (
    <div className="sliderinfo">
      <div className="person-info">
        <img src={img} style={{ width: "90px", height: "90px" }} />
        <div>
          <h3>Client Name</h3>
          <h4>Profession</h4>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default SliderInfo;
