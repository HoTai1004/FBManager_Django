import React, { useState } from "react";
import { guidGenerator } from "../../../utils/randomID"
import './AddSubTurfModal.scss';

export const AddSubTurfModal = ({ close, turf, setTurf, t, set }) => {
  const [data, setData] = useState({
    label: "",
    price: 0,
    imgSrc: null
  });

  return (
    <div className="add-subturf-modal">
      <div className="add-form-m89">
        <div className="form-control-n90">
          <div className="name">Name</div>
          <input
            type="text"
            placeholder="Name...."
            required
            value={data.label}
            onChange={(e) => setData({ ...data, label: e.target.value })}
          />
        </div>
        <div className="form-control-n90">
          <div className="price">Price</div>
          <input
            type="number"
            placeholder="Price...."
            required
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </div>
        <div className="form-control-n90">
          <div className="image-turf">Image</div>
          <input
            type="file"
            required
            onChange={(e) => setData({ ...data, imgSrc: e.target.files[0].name })}
          />
        </div>
        <button
          className="add-btn"
          onClick={() => {
            const id = guidGenerator();
            const subTurf = { id, ...data }
            setTurf({
              ...turf,
              subTurfs: [...turf.subTurfs, subTurf]
            })
            close()
          }}
        >
          Add sub-turf
        </button>
      </div>
    </div>
  );
};