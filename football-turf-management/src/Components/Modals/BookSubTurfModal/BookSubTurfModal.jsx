import React, { useState } from "react";
import { authApi } from "../../../api/mock-api";
import { TimeSelect } from "../../TimeSelect/TimeSelect";
import './BookSubTurfModal.scss';

export const BookSubTurfModal = ({ close, userId, turfId, subTurf }) => {
  const [state, setState] = useState();
  const [saving, setSaving] = useState();

  return (
    <div className="modal-container">
      <div className="book-modal-container">
        <div className="form-control">
          <label htmlFor="from">From</label>
          <TimeSelect onChange={(v) => setState({ ...state, start: v })} />
          <label htmlFor="to">To</label>
          <TimeSelect onChange={(v) => setState({ ...state, end: v })} />
        </div>

        <div className="content">
          <p>Do you want to book a</p>
          <h1>${subTurf.price} football turf</h1>
          <p>for your match ?</p>
        </div>

        <div className="button-container">
          <button
            className="yes-btn"
            disabled={saving}
            onClick={async () => {
              const booking = {
                turfId,
                subTurfId: subTurf.id,
                userId,
                price: subTurf.price,
                ...state,
              };
              setSaving(true);
              const booked = await authApi.bookSubTurf(booking);
              console.log(booked);
              setSaving(false);
              close();
            }}
          >
            {saving ? "Booking..." : "Yes, I want to book"}
          </button>
          <button className="no-btn" onClick={close}>No, thanks</button>
        </div>
      </div>
    </div>
  );
};

  // const booking = {
  //   id: "rf34fq",
  //   turfId: "tg352",
  //   subTurfId: "57juheg",
  //   userId: "24rfqed",
  //   start: "2022-12-10T15:00",
  //   end: "2022-12-10T17:00",
  //   price: 50,
  // };