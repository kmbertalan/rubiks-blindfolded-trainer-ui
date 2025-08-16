import React, { useState } from "react";
import Scrambo from "scrambo";
import GenericModal from "./GenericModal";

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
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={onClose} style={{ padding: "0.5rem 1rem" }}>
          Cancel
        </button>
        <button onClick={handleGenerate} style={{ padding: "0.5rem 1rem" }}>
          Generate
        </button>
      </div>
    </GenericModal>
  );
};

export default ScrambleModal;
