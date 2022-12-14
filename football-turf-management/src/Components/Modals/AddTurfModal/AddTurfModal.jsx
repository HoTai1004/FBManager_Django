import React, { useState } from "react";
import './AddTurfModal.scss';

export const AddTurfModal = ({ close, onAdd, turflist }) => {
  const [data, setData] = useState({
    label: "",
    imgSrc: null,
    subTurfs: null
  });

  return (
    <div className="add-turf-modal">
      <div className="add-form">
        <div className="form-control-n76">
          <div className="name">Name</div>
          <input
            type="text"
            placeholder="Name...."
            required
            value={data.label}
            onChange={(e) => setData({ ...data, label: e.target.value })}
          />
        </div>
        <div className="form-control-n76">
          <div className="image-turf">Image</div>
          <input
            type="file"
            required
            onChange={(e) => setData({ ...data, imgSrc: e.target.files[0] })}
          />
        </div>
        <button
          className="add-btn"
          onClick={() => {
            console.log("image : ", data.imgSrc.name)
            onAdd([...turflist, data])
            close()
          }}
        >
          Add football turf
        </button>
      </div>
    </div>
  );
}; 