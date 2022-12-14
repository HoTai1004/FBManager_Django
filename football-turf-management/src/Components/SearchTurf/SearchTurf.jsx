import React, { useContext } from 'react';
import { AddTurfModal } from "../../Components/Modals/AddTurfModal/AddTurfModal";
import { ModalServiceContext } from "../../Components/Modal/ModalService";
import { UserContext } from "../../contexts/userContext";
import { bindInput } from "../../react/bindInput";
import './SearchTurf.scss';

export const SearchTurf = ({ searchText, onSearch, turflist, onAdd }) => {

  const { openModal } = useContext(ModalServiceContext);

  const { user } = useContext(UserContext);

  return (
    <div className='search-form'>
      <div className='form-control'>
        <label htmlFor='search'>Search</label>
        <box-icon name='search'></box-icon>
        <input
          {...{
            ...bindInput({
              value: searchText,
              onChange: (v) => onSearch(v)
            }),
            type: "text",
            placeholder: 'Search for football turf'
          }}
        />
      </div>

      {user.role === "owner" && (
        <button
          className="add-turf"
          onClick={() => openModal({
            title: "Add turf",
            width: "500px",
            content: ({ close }) => <AddTurfModal close={close} onAdd={onAdd} turflist={turflist} />,
          })}
        >
          Add football turf
        </button>
      )}
    </div>
  );
};
