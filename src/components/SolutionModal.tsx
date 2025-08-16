import React, { useState } from "react";
import { edgeMoves, cornerMoves, parity } from "./../constants";
import GenericModal from "./GenericModal";

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  scramble: string;
  onSubmit: (moves: string) => void;
}

const SolutionModal: React.FC<SolutionModalProps> = ({
  isOpen,
  onClose,
  scramble,
  onSubmit,
}) => {
  const [edgeInput, setEdgeInput] = useState("");
  const [cornerInput, setCornerInput] = useState("");

  const handleApply = () => {
    if (!scramble) {
      alert("Please generate a scramble first!");
      return;
    }

    const convertedMoveList: string[] = [];

    edgeInput.split("").forEach((letter) => {
      const moves = edgeMoves[letter.toUpperCase()];
      if (moves) convertedMoveList.push(moves);
    });

    if (convertedMoveList.length % 2 === 1) {
      convertedMoveList.push(parity);
    }

    cornerInput.split("").forEach((letter) => {
      const moves = cornerMoves[letter.toUpperCase()];
      if (moves) convertedMoveList.push(moves);
    });

    if (convertedMoveList.length > 0) {
      const finalMove = convertedMoveList.filter((m) => m.length > 0).join(" ");
      onSubmit(finalMove);
      setEdgeInput("");
      setCornerInput("");
      onClose();
    } else {
      alert("No valid solution moves provided.");
    }
  };

  if (!isOpen) return null;

  return (
    <GenericModal onClose={onClose}>
      <h2>Enter Solution</h2>
      <input
        type="text"
        value={edgeInput}
        onChange={(e) => setEdgeInput(e.target.value)}
        placeholder="Edge solution"
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />
      <input
        type="text"
        value={cornerInput}
        onChange={(e) => setCornerInput(e.target.value)}
        placeholder="Corner solution"
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={onClose} style={{ padding: "0.5rem 1rem" }}>
          Cancel
        </button>
        <button onClick={handleApply} style={{ padding: "0.5rem 1rem" }}>
          Apply
        </button>
      </div>
    </GenericModal>
  );
};

export default SolutionModal;
