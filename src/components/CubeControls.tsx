import CubeViewer from "./CubeViewer";
import "./CubeControls.css";

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
        className="cube-controls__button--spaced"
        onClick={(e) => {
          setShowSolutionModal(true);
          (e.target as HTMLButtonElement).blur();
        }}
        disabled={!scramble}
      >
        Enter Solution
      </button>
      <button
        className="cube-controls__button--spaced"
        onClick={(e) => {
          resetCube();
          (e.target as HTMLButtonElement).blur();
        }}
      >
        Reset Cube
      </button>
      <p>
        Current scramble: <b>{scramble}</b>
      </p>
      <div className="cube-controls__cubes-container">
        <div>
          <b className="cube-controls__cube-label">Scramble</b>
          <CubeViewer algorithm={`${scramble} ${orientation}`} />
        </div>
        <div>
          <b className="cube-controls__cube-label">Solution</b>
          <CubeViewer algorithm={`${scramble} ${orientation} ${algorithm}`} />
        </div>
      </div>
    </>
  );
}

export default CubeControls;
