import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SelectRoleModal.scss';

export const SelectRoleModal = ({ close }) => {

  const [state, setState] = useState({ choice: "" });

  const navigate = useNavigate();

  return (
    <div className="form-role">
      <div className="your-role">Select Your Role</div>
      <div className="role">
        <div className="owner">
          <label htmlFor="owner">owner</label>
          <input type="radio" name="role" id="" value="owner" onClick={(e) => setState({ ...state, choice: e.target.value })} />
        </div>
        <div className="renter">
          <label htmlFor="renter">renter</label>
          <input type="radio" name="role" id="" value="renter" onClick={(e) => setState({ ...state, choice: e.target.value })} />
        </div>
      </div>
      <button
        className="continue-btn"
        onClick={() => {
          if (state.choice === "") {
            alert("You have to choose your role before moving on to the sign-up form");
          } else {
            close();
            navigate(`/signup?role=${state.choice}`);
          }
        }}
      >
        Continue
      </button>
    </div>
  );
}