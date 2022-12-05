import React from "react";
import './SelectRoleModal.scss';

export const SelectRoleModal = ({ close }) => {
  return (
    <div className="form-role">
      <div className="your-role">Select Your Role</div>
      <div className="role">
        <div className="owner">
          <label htmlFor="owner">owner</label>
          <input type="radio" name="role" id="" value="owner" />
        </div>
        <div className="renter">
          <label htmlFor="renter">renter</label>
          <input type="radio" name="role" id="" value="renter" />
        </div>
      </div>
      <button className="continue-btn">Continue</button>
    </div>
  );
}