import CubeViewer from "./CubeViewer";

type CubeControlsProps = {
  scramble: string;
  algorithm: string;
  orientation: string;
  setShowScrambleModal: (input: boolean) => void;
  setShowSolutionModal: (input: boolean) => void;
  resetCube: VoidFunction;
};

function CubeControls({
  scramble,
  setShowScrambleModal,
  setShowSolutionModal,
  resetCube,
  algorithm,
  orientation,
}: CubeControlsProps) {
  return (
    <>
      <button onClick={() => setShowScrambleModal(true)}>Get Scramble</button>
      <button
        onClick={() => {
          setShowSolutionModal(true);
        }}
        disabled={!scramble}
        style={{ marginLeft: "1rem" }}
      >
        Solve Cube
      </button>
      <button onClick={resetCube} style={{ marginLeft: "1rem" }}>
        Reset Cube
      </button>
      {scramble && <p>Current scramble: {scramble}</p>}
      <div style={{ display: "flex", gap: "2rem" }}>
        <div>
          Scramble
          <CubeViewer algorithm={`${scramble} ${orientation}`} />
        </div>
        <div>
          Solution
          <CubeViewer algorithm={`${scramble} ${orientation} ${algorithm}`} />
        </div>
      </div>
    </>
  );
}

export default CubeControls;
