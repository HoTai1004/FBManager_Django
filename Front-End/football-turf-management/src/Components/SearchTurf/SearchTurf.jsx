import React from 'react';
import './SearchTurf.css';

export const SearchTurf = () => {
  return (
    <div className='search-form'>
      <div className='form-control'>
        <label htmlFor='search'>Search</label>
        <box-icon name='search'></box-icon>
        <input type="text" placeholder='Search for football turf' />
      </div>
    </div>
  );
};
