import { createContext, useState } from "react";
import "./modal.scss";

export const ModalServiceContext = createContext();

export const ModalServiceProvider = ({ children }) => {
  const [modal, setModal] = useState();

  const openModal = ({ title, content, width }) => {
    setModal({
      render: modalLayout({ title, content, width }),
    });
  }

  const closeModal = () => setModal(false);

  return (
    <ModalServiceContext.Provider value={{ openModal }}>
      {children}
      {modal && (
        <div className="modal-overlay">
          <div className="modal-container">
            {modal.render({ close: closeModal })}
          </div>
        </div>
      )}
    </ModalServiceContext.Provider>
  );
};

const modalLayout = ({ title, content, width }) => {
  return ({ close }) => {
    return (
      <div className="modal-layout" style={{ width }}>
        <div className="modal-header">
          <div className="title">{title}</div>
          <div className="x-button">
            <button onClick={close}>X</button>
          </div>
        </div>
        <div className="modal-content">{content({ close })}</div>
      </div>
    );
  };
};
