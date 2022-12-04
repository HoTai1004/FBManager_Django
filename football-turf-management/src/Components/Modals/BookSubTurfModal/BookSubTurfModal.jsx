import React from "react";
import './BookSubTurfModal.scss';

export const BookSubTurfModal = ({ close }) => {
  return (
    <div className="modal-container">
      <div className="book-modal-container">
        <div className="content">
          <p>Do you want to book a</p>
          <h1>$100 football turf</h1>
          <p>for your match ?</p>
        </div>
        <div className="button-container">
          <button className="yes-btn" onClick={close}>Yes, I want to book</button>
          <button className="no-btn" onClick={close}>No, thanks</button>
        </div>
      </div>
    </div>
  );
}; 