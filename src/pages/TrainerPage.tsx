import { useState } from "react";
import ScrambleModal from "../components/ScrambleModal";
import SolutionModal from "../components/SolutionModal";
import { orientationMoves } from "../constants";
import OrientationControls from "../components/OrientationControl";
import CubeControls from "../components/CubeControls";
import RawSolution, { type RawSolutionType } from "../components/RawSolution";

function TrainerPage() {
  const [algorithm, setAlgorithm] = useState("");
  const [scramble, setScramble] = useState("");
  const [rawSolution, setRawSolution] = useState<RawSolutionType | null>(null);
  const [showScrambleModal, setShowScrambleModal] = useState(false);
  const [showSolutionModal, setShowSolutionModal] = useState(false);
  const [orientation, setOrientation] = useState("");

  const handleScrambleSubmit = (scr: string) => {
    setRawSolution(null);
    setScramble(scr);
    setShowScrambleModal(false);
  };

  const handleSolutionSubmit = (solution: string) => {
    setAlgorithm(solution);
    setShowSolutionModal(false);
  };

  const handleRawSolution = (edgeSolution: string, cornerSolution: string) => {
    setRawSolution({ edgeSolution, cornerSolution });
  };

  const addOrientation = (move: string) => {
    setOrientation((prev) => `${prev} ${orientationMoves[move]}`);
  };

  const resetOrientation = () => {
    setOrientation("");
  };

  const resetCube = () => {
    setAlgorithm("");
    setScramble("");
    setRawSolution(null);
    setOrientation("");
  };

  return (
    <>
      <h1>Blind Cube Trainer</h1>
      <OrientationControls onAdd={addOrientation} onReset={resetOrientation} />
      <CubeControls
        scramble={scramble}
        algorithm={algorithm}
        orientation={orientation}
        setShowScrambleModal={setShowScrambleModal}
        setShowSolutionModal={setShowSolutionModal}
        resetCube={resetCube}
      />
      <ScrambleModal
        onSubmit={handleScrambleSubmit}
        onClose={() => setShowScrambleModal(false)}
        isOpen={showScrambleModal}
      />
      <SolutionModal
        onSubmit={handleSolutionSubmit}
        onClose={() => setShowSolutionModal(false)}
        isOpen={showSolutionModal}
        scramble={scramble}
        handleRawSolution={handleRawSolution}
      />
      <RawSolution rawSolution={rawSolution} />
    </>
  );
}

export default TrainerPage;
