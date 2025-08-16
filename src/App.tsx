import { useState } from "react";
import CubeViewer from "./components/CubeViewer";
import ScrambleModal from "./components/ScrambleModal";
import SolutionModal from "./components/SolutionModal";

function App() {
  const [algorithm, setAlgorithm] = useState("");
  const [scramble, setScramble] = useState("");
  const [showScrambleModal, setShowScrambleModal] = useState(false);
  const [showSolutionModal, setShowSolutionModal] = useState(false);

  const handleScrambleSubmit = (scr: string) => {
    setAlgorithm(scr);
    setScramble(scr);
    setShowScrambleModal(false);
  };

  const handleSolutionSubmit = (solution: string) => {
    setAlgorithm((prev) => `${prev} ${solution}`);
    setShowSolutionModal(false);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Cube Viewer</h1>
      <button onClick={() => setShowScrambleModal(true)}>Get Scramble</button>
      <button
        onClick={() => setShowSolutionModal(true)}
        disabled={!scramble}
        style={{ marginLeft: "1rem" }}
      >
        Solve Cube
      </button>
      <CubeViewer algorithm={algorithm} />
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
      />
      {scramble && <p>Current scramble: {scramble}</p>}
    </div>
  );
}

export default App;
