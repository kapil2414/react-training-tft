import React from 'react';
import './Modal.scss';

const Modal = ({ isOpen, message, buttonText, handleSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={handleSubmit}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Modal;

