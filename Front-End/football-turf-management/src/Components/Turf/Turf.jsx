import React from 'react';
import './Turf.scss';

export const Turf = ({ label, imgSrc, price }) => {
  return (
    <div className='turf-card-w43'>
      <div className='status'>
        <div className='featured'>FEATURED</div>
        <div className='checkout'>CHECK OUT</div>
      </div>

      <div className='image'>
        <img src={imgSrc} alt="" />
      </div>

      <div className='info'>
        <div className='line1'>{label}</div>
        <div className='line2'>
          <div className='price'>${price}</div>
          <div className='icon'><box-icon name='low-vision' color='#2288ff' ></box-icon></div>
        </div>
      </div>
    </div>
  );
};