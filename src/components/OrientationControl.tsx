type OrientationControlsProps = {
  onAdd: (move: string) => void;
  onReset: () => void;
};

function OrientationControls({ onAdd, onReset }: OrientationControlsProps) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <strong style={{ marginRight: "0.75rem" }}>Change Orientation:</strong>
      <button
        onClick={(e) => {
          onAdd("x");
          (e.target as HTMLButtonElement).blur();
        }}
      >
        X
      </button>
      <button
        onClick={(e) => {
          onAdd("y");
          (e.target as HTMLButtonElement).blur();
        }}
        style={{ marginLeft: "0.5rem" }}
      >
        Y
      </button>
      <button
        onClick={(e) => {
          onAdd("z");
          (e.target as HTMLButtonElement).blur();
        }}
        style={{ marginLeft: "0.5rem" }}
      >
        Z
      </button>
      <button
        onClick={(e) => {
          onReset();
          (e.target as HTMLButtonElement).blur();
        }}
        style={{ marginLeft: "0.5rem" }}
      >
        Reset
      </button>
    </div>
  );
}

export default OrientationControls;
