import React, { useState } from "react";
import Scrambo from "scrambo";
import GenericModal from "./GenericModal";
import "./ScrambleModal.css";

interface ScrambleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (scramble: string) => void;
}

const ScrambleModal: React.FC<ScrambleModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [input, setInput] = useState("");
  const scrambler = new Scrambo();

  const handleGenerate = () => {
    const finalScramble = input.trim()
      ? input.trim()
      : scrambler.type("333").length(20).get()[0];
    onSubmit(finalScramble);
    setInput("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <GenericModal onClose={onClose}>
      <h2>Enter Scramble</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Leave empty for random"
        className="scramble-modal__input"
      />
      <div className="scramble-modal__buttons">
        <button onClick={onClose} className="scramble-modal__button">
          Cancel
        </button>
        <button onClick={handleGenerate} className="scramble-modal__button">
          Generate
        </button>
      </div>
    </GenericModal>
  );
};

export default ScrambleModal;
