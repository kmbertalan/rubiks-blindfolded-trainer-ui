import { useState } from "react";
import CubeViewer from "./components/CubeViewer";
import ScrambleModal from "./components/ScrambleModal";
import SolutionModal from "./components/SolutionModal";

type RawSolution = {
  readonly edgeSolution: string;
  readonly cornerSolution: string;
};

function App() {
  const [algorithm, setAlgorithm] = useState("");
  const [scramble, setScramble] = useState("");
  const [rawSolution, setRawSolution] = useState<RawSolution | null>(null);
  const [showScrambleModal, setShowScrambleModal] = useState(false);
  const [showSolutionModal, setShowSolutionModal] = useState(false);

  const handleScrambleSubmit = (scr: string) => {
    setAlgorithm(scr);
    setRawSolution(null);
    setScramble(scr);
    setShowScrambleModal(false);
  };

  const handleSolutionSubmit = (solution: string) => {
    setAlgorithm((prev) => `${prev} ${solution}`);
    setShowSolutionModal(false);
  };

  const handleRawSolution = (edgeSolution: string, cornerSolution: string) => {
    setRawSolution({ edgeSolution, cornerSolution });
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Cube Viewer</h1>
      <button onClick={() => setShowScrambleModal(true)}>Get Scramble</button>
      <button
        onClick={() => {
          setAlgorithm(scramble);
          setShowSolutionModal(true);
        }}
        disabled={!scramble}
        style={{ marginLeft: "1rem" }}
      >
        Solve Cube
      </button>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div>
          Scramble
          <CubeViewer algorithm={scramble} />
        </div>
        <div>
          Solution
          <CubeViewer algorithm={algorithm} />
        </div>
      </div>
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
      {scramble && <p>Current scramble: {scramble}</p>}
      {rawSolution && (
        <p>Your solution for edges: {rawSolution.edgeSolution}</p>
      )}
      {rawSolution && (
        <p>Your solution for corners: {rawSolution.cornerSolution}</p>
      )}
    </div>
  );
}

export default App;
