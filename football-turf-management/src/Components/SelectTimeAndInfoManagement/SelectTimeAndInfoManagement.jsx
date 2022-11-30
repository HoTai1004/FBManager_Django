import React from "react";
import Select from 'react-select'
import { Link } from "react-router-dom";
import './SelectTimeAndInfoManagement.scss';

export const SelectTimeAndInfoManagement = () => {
  return (
    <div className="select-manage">
      <div className='form-control'>
        <label htmlFor='selectTime'>Time</label>
        <box-icon name='time-five'></box-icon>
        <Select options={timeFrames} className="select" />
      </div>
      <Link>
        <button className="manage-info">
          Manage Info
        </button>
      </Link>
    </div>
  );
};

const timeFrames = [
  { value: '7h-8h am', label: '7h-8h am' },
  { value: '8h-9h am', label: '8h-9h am' },
  { value: '9h-10h am', label: '9h-10h am' },
  { value: '10h-11h am', label: '10h-11h am' },
  { value: '13h-14h pm', label: '13h-14h pm' },
  { value: '14h-15h pm', label: '14h-15h pm' },
  { value: '16h-17h pm', label: '16h-17h pm' },
  { value: '17h-18h pm', label: '17h-18h pm' },
  { value: '18h-19h pm', label: '18h-19h pm' },
  { value: '20h-21h pm', label: '20h-21h pm' },

]
