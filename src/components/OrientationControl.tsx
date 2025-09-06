import "./OrientationControl.css";

type OrientationControlsProps = {
  onAdd: (move: string) => void;
  onReset: () => void;
};

function OrientationControls({ onAdd, onReset }: OrientationControlsProps) {
  return (
    <div className="orientation-controls">
      <strong className="orientation-controls__label">
        Change Orientation:
      </strong>
      <button
        onClick={(e) => {
          onAdd("x");
          (e.target as HTMLButtonElement).blur();
        }}
      >
        X
      </button>
      <button
        className="orientation-controls__button--spaced"
        onClick={(e) => {
          onAdd("y");
          (e.target as HTMLButtonElement).blur();
        }}
      >
        Y
      </button>
      <button
        className="orientation-controls__button--spaced"
        onClick={(e) => {
          onAdd("z");
          (e.target as HTMLButtonElement).blur();
        }}
      >
        Z
      </button>
      <button
        className="orientation-controls__button--spaced"
        onClick={(e) => {
          onReset();
          (e.target as HTMLButtonElement).blur();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default OrientationControls;
