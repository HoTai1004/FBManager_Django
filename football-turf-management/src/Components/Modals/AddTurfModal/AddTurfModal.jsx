import React from "react";
import './AddTurfModal.scss';

export const AddTurfModal = ({ close }) => {
  return (
    <div className="add-turf-modal">
      <div className="add-form">
        <div className="form-control-n76">
          <div className="name">Name</div>
          <input type="text" placeholder="Name...." required />
        </div>
        <div className="form-control-n76">
          <div className="image-turf">Image</div>
          <input type="file" required />
        </div>
        <button className="add-btn" onClick={close}>
          Add football turf
        </button>
      </div>
    </div>
  );
}; 