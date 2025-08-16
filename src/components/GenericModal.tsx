import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const GenericModal: React.FC<ModalProps> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "8px",
          minWidth: "300px",
          maxWidth: "90%",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default GenericModal;
