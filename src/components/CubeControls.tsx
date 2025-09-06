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
        Enter Solution
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
      <p>
        Current scramble: <b>{scramble}</b>
      </p>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        <div>
          <b>Scramble</b>
          <CubeViewer algorithm={`${scramble} ${orientation}`} />
        </div>
        <div>
          <b>Solution</b>
          <CubeViewer algorithm={`${scramble} ${orientation} ${algorithm}`} />
        </div>
      </div>
    </>
  );
}

export default CubeControls;
