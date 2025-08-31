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
      <button
        onClick={(e) => {
          setShowScrambleModal(true);
          (e.target as HTMLButtonElement).blur();
        }}
      >
        Get Scramble
      </button>
      <button
        onClick={(e) => {
          setShowSolutionModal(true);
          (e.target as HTMLButtonElement).blur();
        }}
        disabled={!scramble}
        style={{ marginLeft: "1rem" }}
      >
        Solve Cube
      </button>
      <button
        onClick={(e) => {
          resetCube();
          (e.target as HTMLButtonElement).blur();
        }}
        style={{ marginLeft: "1rem" }}
      >
        Reset Cube
      </button>
      <p>Current scramble: {scramble}</p>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
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
