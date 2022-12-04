import React from 'react';
import { AddTurfModal } from "../../Components/Modals/AddTurfModal/AddTurfModal";
import { useContext } from "react";
import { ModalServiceContext } from "../../Components/Modal/ModalService";
import './SearchTurf.scss';

export const SearchTurf = () => {

  const { openModal } = useContext(ModalServiceContext);

  return (
    <div className='search-form'>
      <div className='form-control'>
        <label htmlFor='search'>Search</label>
        <box-icon name='search'></box-icon>
        <input type="text" placeholder='Search for football turf' />
      </div>
      <button
        className="add-turf"
        onClick={() => openModal({
          title: "Add turf",
          width: "500px",
          content: ({ close }) => <AddTurfModal close={close} />,
        })}
      >
        Add football turf
      </button>
    </div>
  );
};
