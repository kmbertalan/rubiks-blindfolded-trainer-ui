import React from "react";
import ReactDOM from "react-dom";
import "./GenericModal.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const GenericModal: React.FC<ModalProps> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="generic-modal" onClick={onClose}>
      <div
        className="generic-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default GenericModal;
