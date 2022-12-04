import React from "react";
import './AddSubTurfModal.scss';

export const AddSubTurfModal = ({ close }) => {
  return (
    <div className="add-subturf-modal">
      <div className="add-form-m89">
        <div className="form-control-n90">
          <div className="name">Name</div>
          <input type="text" placeholder="Name...." required />
        </div>
        <div className="form-control-n90">
          <div className="price">Price</div>
          <input type="number" placeholder="Price...." required />
        </div>
        <div className="form-control-n90">
          <div className="image-turf">Image</div>
          <input type="file" required />
        </div>
        <button className="add-btn" onClick={close}>Add sub-turf</button>
      </div>
    </div>
  );
};