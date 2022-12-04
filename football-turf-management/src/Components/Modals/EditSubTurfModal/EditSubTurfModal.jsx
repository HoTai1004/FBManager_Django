import React from "react";
import './EditSubTurfModal.scss';

export const EditSubTurfModal = ({ close }) => {
  return (
    <div className="edit-subturf-modal">
      <div className="edit-form-m89">
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
        <button className="save-btn" onClick={close}>Save</button>
      </div>
    </div>
  );
};