import React from "react";
import "./TurfCard.scss";

export const TurfCard = ({ turf }) => {

  const { label, imgSrc, subTurfs } = turf;

  const lowestPrice = Math.min(...subTurfs.map((s) => s.price));

  return (
    <div className="turf-card-w43">
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
          <div className="price">${lowestPrice}</div>
          <div className="icon">
            <box-icon name="low-vision" color="#2288ff"></box-icon>
          </div>
        </div>
      </div>
    </div>
  );
};
