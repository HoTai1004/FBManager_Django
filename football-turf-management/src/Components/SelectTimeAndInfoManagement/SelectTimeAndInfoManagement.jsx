import React, { useContext } from "react";
import { AddSubTurfModal } from "../Modals/AddSubTurfModal/AddSubTurfModal";
import { ModalServiceContext } from "../Modal/ModalService";
import { UserContext } from "../../contexts/userContext";
import './SelectTimeAndInfoManagement.scss';

export const SelectTimeAndInfoManagement = () => {

  const { openModal } = useContext(ModalServiceContext);

  const { user } = useContext(UserContext);

  return (
    <div className="select-manage">
      {user.role === "owner" && (
        <button
          className="manage-info"
          onClick={() => openModal({
            title: "Add sub turf",
            width: "500px",
            content: ({ close }) => <AddSubTurfModal close={close} />
          })}
        >
          Add sub turf
        </button>
      )}
    </div>
  );
};

