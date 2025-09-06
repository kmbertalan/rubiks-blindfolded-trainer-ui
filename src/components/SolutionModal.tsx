import React, { useState } from "react";
import { edgeMoves, cornerMoves, parity } from "./../constants";
import GenericModal from "./GenericModal";
import "./SolutionModal.css";

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  scramble: string;
  onSubmit: (moves: string) => void;
  handleRawSolution: (edgeSolution: string, cornerSolution: string) => void;
}

const SolutionModal: React.FC<SolutionModalProps> = ({
  isOpen,
  onClose,
  scramble,
  onSubmit,
  handleRawSolution,
}) => {
  const [edgeInput, setEdgeInput] = useState("");
  const [cornerInput, setCornerInput] = useState("");

  const handleApply = () => {
    if (!scramble) {
      alert("Please generate a scramble first!");
      return;
    }

    handleRawSolution(edgeInput, cornerInput);

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
        className="solution-modal__input"
      />
      <input
        type="text"
        value={cornerInput}
        onChange={(e) => setCornerInput(e.target.value)}
        placeholder="Corner solution"
        className="solution-modal__input solution-modal__input--last"
      />
      <div className="solution-modal__buttons">
        <button onClick={onClose} className="solution-modal__button">
          Cancel
        </button>
        <button onClick={handleApply} className="solution-modal__button">
          Apply
        </button>
      </div>
    </GenericModal>
  );
};

export default SolutionModal;
