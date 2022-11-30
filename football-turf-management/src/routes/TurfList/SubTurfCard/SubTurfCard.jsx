import React from "react";
import "./SubTurfCard.scss";

export const SubTurfCard = ({ subTurf }) => {
  const { label, imgSrc, price } = subTurf;
  return (
    <div className="sub-turf-card-f32">
      <div className="status">
        <div className="featured">FEATURED</div>
        <div className="checkout">CHECK OUT</div>
      </div>

      <div className="image">
        <img src={imgSrc} alt="" />
      </div>

      <div className="info">
        <div className="line1">{label}</div>
        <div className="line2">
          <div className="price">${price}</div>
          <div className="icon">
            <box-icon name="low-vision" color="#2288ff"></box-icon>
          </div>
        </div>
      </div>
    </div>
  );
};
